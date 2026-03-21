<!-- 미구현 설계 문서. 현재 코드에 바로 얹을 최소 규칙만 적는다. -->

# 공고 2트랙과 준비 장소

결론: `단기알바 / 직장지원 / 도서관 / 시험장`을 하나의 최소 루프로 묶는다. 단기알바는 즉시 돈, 직장지원은 준비가 필요한 진로, 도서관과 시험장은 그 준비를 만드는 장소다. 대학가는 상위 루트, 공원은 회복과 NPC 허브로 뒤따라 붙인다.

## 목적

- 공고 앱이 전부 같은 감각으로 보이는 문제를 줄인다.
- `오늘 버티기`와 `앞으로 올라가기`를 플레이어가 분리해서 느끼게 만든다.
- 도시 이동이 단순 배경 이동이 아니라 준비와 기회 탐색의 루프가 되게 만든다.
- 공고 앱만으로는 열리지 않는 범죄, 창업, 투자 루트도 같이 받을 기반을 만든다.

## 핵심 루프

```text
단기알바
  -> 당장 현금 확보

도서관 / 시험장
  -> 준비도, 자격증, 서류 확보

직장지원
  -> 느린 결과, 재직 상태, 커리어 축 형성

NPC / 사건
  -> 범죄자, 창업가, 사업가, 투자자 같은 대체 루트 진입
```

## 트랙 역할

### 단기알바

- 현재 구현된 공고 루프를 그대로 맡는다.
- `오늘 확인 -> 지원 -> 빠른 결과 -> 다음날 출근 예약` 흐름이다.
- 체력/에너지와 당장 벌 돈이 핵심이다.

### 직장지원

- 느린 진행과 지속 상태를 맡는다.
- `지원 -> 대기/면접 -> 합격 -> 재직중` 흐름이다.
- 같은 날 결과가 끝나지 않는 것이 핵심 차이다.
- 한 번 취직하면 "내가 지금 어떤 일 하는 사람인지"가 남아야 한다.

### 도서관

- 저비용 준비 장소다.
- 취업 준비도, 이력서 준비, 필기시험 준비를 쌓는다.
- 직장지원 확률을 올리는 가장 기본적인 루트다.

### 시험장

- 자격증/면허 해금 장소다.
- 준비도만으로는 못 뚫는 직장지원 요구조건을 푼다.
- 예: 운전면허, 컴퓨터 자격증, 행정 보조용 시험.

### 대학가

- 시작부터 크게 벌이지 않는다.
- 1차 구현에서는 `상위 직군 준비 허브`로만 쓴다.
- 야간 강의, 취업지원센터, 과외/전문직 준비의 확장 축이다.

### 공원

- 회복과 NPC 만남 중심이다.
- 곧바로 취업 확률을 올리진 않지만, 루트 전환의 사건 허브 역할을 맡는다.

## 7일 프로토타입 최소안

### 지금 바로 구현할 범위

1. 공고 앱 상단에 `단기알바 | 직장지원` 탭을 추가한다.
2. 버스정류장 이동지에 `도서관`, `시험장`을 먼저 추가한다.
3. `도서관`에서 `careerPrep`을 올릴 수 있게 한다.
4. `시험장`에서 면허/자격증 플래그를 얻을 수 있게 한다.
5. `직장지원`은 준비도와 자격증 보정이 붙은 느린 지원 루프로 분리한다.

### 그 다음 단계

1. 버스정류장 이동지에 `대학가`, `공원`을 추가한다.
2. `대학가`에서 상위 직군 준비를 연다.
3. `공원`에서 NPC/사건 허브를 연다.
4. 범죄자, 창업가, 투자자 제안 루트를 붙인다.

### 이번 단계에서 미루는 것

- 급여 명세 시스템
- 재직 중 세부 스케줄 관리
- 풀 대학 시스템
- 대형 창업 시스템
- 투자 포트폴리오 시스템

## 상태 구조

최소 구현 기준으로 `jobs` 도메인 안에 아래 필드를 둔다.

```js
state.jobs = {
  activeTrack: "short-term",

  shortTermOffers: [],
  shortTerm: {
    scheduledShift: null,
    result: null,
    applicationDoneToday: false,
  },

  careerOffers: [],
  career: {
    status: "idle",
    postingId: "",
    appliedDay: null,
    interviewDay: null,
    resultDay: null,
    employedJobId: "",
  },

  careerPrep: {
    service: 0,
    labor: 0,
    office: 0,
    academic: 0,
  },

  certifications: {
    driverLicense: false,
    computerCert: false,
    interviewKit: false,
  },
};
```

### 상태값 의미

- `activeTrack`
  현재 공고 앱에서 보고 있는 탭.
- `shortTermOffers`
  오늘 보이는 단기알바 카드.
- `shortTerm.scheduledShift`
  기존 `nextDayShift` 역할.
- `shortTerm.result`
  기존 `interviewResult` 역할.
- `shortTerm.applicationDoneToday`
  기존 `jobApplicationDoneToday` 역할.
- `careerOffers`
  직장지원 탭 전용 공고 목록.
- `career.status`
  `idle | applied | interview_scheduled | passed | employed | rejected`
- `careerPrep`
  장소 방문, 반복 근무, 사건으로 쌓이는 취업 준비도.
- `certifications`
  시험장이나 이벤트로 얻는 지원 자격.

## 호환 규칙

현재 코드에 바로 얹기 위해 단기알바 쪽은 기존 필드를 한동안 같이 유지한다.

- `dayOffers` = `jobs.shortTermOffers`
- `nextDayShift` = `jobs.shortTerm.scheduledShift`
- `interviewResult` = `jobs.shortTerm.result`
- `jobApplicationDoneToday` = `jobs.shortTerm.applicationDoneToday`

즉 1차 구현에서는 기존 루프를 깨지 않고 `shortTerm`으로 감싼다.

## 직장지원 규칙

### 기본 규칙

1. 직장지원은 하루에 여러 개 누를 수 없다.
2. `지원중` 상태일 때 다른 직장지원 공고는 막는다.
3. `재직중`일 때는 새 직장지원 공고 지원을 막는다.
4. 직장지원 결과는 즉시 뜨지 않는다.
5. 단기알바 예약근무와 직장지원 재직 상태는 동시에 존재할 수 있다.

### 최소 진행

```text
idle
  -> 지원
applied
  -> 다음날 interview_scheduled 또는 rejected
interview_scheduled
  -> 면접일에 passed 또는 rejected
passed
  -> 바로 employed
employed
  -> 직장지원 탭 상단에 현재 직장 카드 고정
```

## 취업 확률 보정

직장지원은 단순 랜덤보다 `준비도 + 연결고리 + 사건 플래그`가 같이 영향을 줘야 한다.

### 최소 계산 방향

```text
최종 합격률
  = 공고 기본 확률
  + 준비도 보너스
  + 자격증 보너스
  + NPC 소개/추천 보너스
  + 관련 이벤트 보너스
  - 전과/평판 패널티
```

### 준비도 계열

- `service`
  편의점, 카페, 응대형 직군 보정
- `labor`
  청소, 물류, 현장형 직군 보정
- `office`
  사무, 관리, 일반 회사형 직군 보정
- `academic`
  대학/도서관 기반 전문직, 과외, 시험형 보정

## 장소 설계

현재 `world.js`의 버스정류장 맵 구조에 맞춰 아래 위치 ID를 추가하는 것을 기준으로 잡는다.

### 1차 추가 위치

- `library`
  도서관
- `exam-center`
  시험장

### 2차 추가 위치

- `university-district`
  대학가
- `park`
  공원

## 장소 역할

### `library`

- 행동 예시
  `이력서 정리`, `필기 준비`, `컴퓨터 자격증 공부`
- 보상
  `careerPrep.office`, `careerPrep.academic`, `interviewKit`
- 비용
  시간, 에너지

### `exam-center`

- 행동 예시
  `운전면허 시험`, `컴퓨터 자격증 시험`
- 보상
  `certifications.driverLicense`, `certifications.computerCert`
- 비용
  응시료, 시간, 준비도 요구치

### `university-district`

- 행동 예시
  `야간 강의`, `취업지원센터 방문`, `조교 정보 찾기`
- 보상
  `careerPrep.academic` 대량 증가, 상위 직군 해금
- 비용
  돈, 시간, 장기 투자

### `park`

- 행동 예시
  `쉬기`, `사람 구경`, `대화 걸기`
- 보상
  회복, 소문, NPC 접점
- 비용
  핵심 준비도 직접 상승은 없음

## 지원 조건 예시

### 직장지원

- 사무보조
  `office 준비도 3 + computerCert`
- 학원조교
  `academic 준비도 3 + library 방문 경험`
- 배달 정규직
  `driverLicense + labor 준비도 2`
- 공공기관 계약직
  `office 준비도 4 + computerCert + 면접 통과`

### 단기알바

- 편의점 야간
- 배달
- 카페 스탠딩
- 물류

단기알바는 준비도가 없어도 시작 가능하지만, 반복 시 관련 `careerPrep`이 소폭 오르게 해도 좋다.

## NPC / 이벤트 중심 루트

모든 직업이 공고 앱에서만 시작되면 재미가 줄어든다. 일부 루트는 NPC나 사건을 통해 열린다.

### 공고 앱 중심 루트

- 일반 회사원
- 서비스직
- 청소/물류 정식 근무

### NPC / 이벤트 중심 루트

- 범죄자
  뒷골목 NPC, 검은 돈 이벤트, 전과 플래그와 연결
- 창업가 / 사업가
  장사 제안 NPC, 소자본 이벤트, 점포나 장비 구매와 연결
- 투자자
  주식/코인/정보 제공 NPC, 자본 규모, 금융 앱 사용 기록과 연결

### 설계 원칙

1. 공고 앱 루트는 `지원해서 들어가는 삶`이다.
2. NPC / 이벤트 루트는 `관계와 사건으로 들어가는 삶`이다.
3. 범죄, 창업, 투자 루트는 공고 앱에 상시 노출하지 않는다.
4. 조건이 맞으면 연락, 제안, 소문, 사건 형태로 등장시킨다.

## UI 규칙

### 공고 앱

- 상단 고정 탭: `단기알바 | 직장지원`
- 단기알바 탭
  현재와 같은 카드형 공고 목록 + 예약근무 카드 + 결과 카드
- 직장지원 탭
  공고 목록 또는 현재 상태 카드

### 장소 이동

- 버스정류장 맵에서 `도서관`, `시험장`, `대학가`, `공원`을 선택지로 노출한다.
- 1차 구현에서는 `도서관`, `시험장`만 실제 행동 화면을 만든다.

### 상태 카드 문구

- `지원중`
  "결과 대기 중"
- `면접예정`
  "DAY 03 면접 예정"
- `재직중`
  "현재 편의점 고정근무 재직중"

## 구현 순서

1. `jobs` 상태에 `activeTrack`, `careerOffers`, `career`, `careerPrep`, `certifications`를 추가한다.
2. 공고 앱 UI에 2탭을 추가한다.
3. 현재 공고 루프를 `단기알바`로 이름만 옮긴다.
4. 버스정류장 맵에 `library`, `exam-center`를 추가한다.
5. 도서관 행동으로 `careerPrep`을 올리게 만든다.
6. 시험장 행동으로 `certifications`를 얻거나 실패하게 만든다.
7. 직장지원 카드/상태 카드를 읽기 전용으로 먼저 붙인다.
8. 날짜가 바뀔 때 `career.status`가 진행되도록 최소 전환을 넣는다.
9. 마지막에 재직중 카드와 준비 상태가 저장/복구되게 만든다.

## 다음 문서

- `docs/phone-system.md`
- `docs/early-progression.md`
- `docs/design/progression.md`
- `docs/design/endings.md`
