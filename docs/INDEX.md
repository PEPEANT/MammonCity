# 문서 인덱스

`docs/`는 MammonCity의 현재 동작과 가까운 문서를 먼저 읽기 위한 안내서다.  
`docs/design/`은 아직 구현되지 않았거나, 다음 단계 설계를 정리한 문서 모음이다.

## 현재 프로토타입 요약

- 현재 플레이 범위는 `7일` 프로토타입이다.
- 핵심 루프는 `1일차 프롤로그 -> 방청소 -> 스마트폰 공고 -> 다음날 예약 출근 -> 바깥 이동/생활 앱/기억 확인 -> 7일차 정산 랭킹`이다.
- `30일 구조`, 장기 도시 확장, 본격적인 엔딩 분기, 대형 경제 확장은 아직 설계 문서 쪽에 있다.

## 먼저 읽을 문서

- [early-progression.md](./early-progression.md)  
  현재 7일 프로토타입의 흐름과 마감 구조를 정리한 문서.

- [phone-system.md](./phone-system.md)  
  스마트폰 사용 시점, 공고 앱 루프, 예약 근무 흐름을 설명하는 문서.

- [save-system.md](./save-system.md)  
  현재 저장/불러오기 구조와 저장 대상 상태를 정리한 문서.

- [happiness-system.md](./happiness-system.md)  
  행복도 v1 현재 규칙, 저장 상태, UI 반영 범위를 정리한 문서.

- [memory-system.md](./memory-system.md)  
  기억 로그가 어떻게 쌓이고 사라지는지 정리한 문서.

- [day-data-layout.md](./day-data-layout.md)  
  날짜별 데이터와 자산이 어디에 놓이는지 설명하는 문서.

## 현재 기준 문서

- [character-asset-workflow.md](./character-asset-workflow.md)  
  캐릭터 PNG 정리와 출력 자산 워크플로 문서.

- [day-data-layout.md](./day-data-layout.md)  
  `story / events / world / dev` 날짜 데이터 묶음 구조 문서.

- [dev-position-editor.md](./dev-position-editor.md)  
  DEV 위치 편집기와 코드 복사 흐름 문서.

- [device-internet-structure.md](./device-internet-structure.md)  
  기기, 인터넷, 시스템 분리 방향을 정리한 문서.

- [early-progression.md](./early-progression.md)  
  현재 플레이 가능한 초반 진행 구조 문서.

- [memory-system.md](./memory-system.md)  
  기억 버튼, 기록 규칙, 유지 범위를 설명하는 문서.

- [phone-system.md](./phone-system.md)  
  스마트폰 잠금 해제 이후 앱 접근과 공고 흐름 문서.

- [png-asset-cleanup.md](./png-asset-cleanup.md)  
  day01 청소 화면 PNG 정리 기준 문서.

- [save-system.md](./save-system.md)  
  `localStorage` 기반 저장 구조 문서.

## 설계 아이디어 문서

- [design/economy.md](./design/economy.md)  
  장기 경제 루프와 수입/지출 구조 설계.

- [design/endings.md](./design/endings.md)  
  엔딩 분기와 직업군별 결말 설계.

- [design/happiness-system.md](./design/happiness-system.md)  
  행복도 단일 수치와 `우울한 상태` 파생 규칙, 연애/결혼/랭킹 연결 설계.

- [design/inventory.md](./design/inventory.md)  
  인벤토리/보유품 시스템의 현재 구현 기준 문서.

- [design/job-tracks.md](./design/job-tracks.md)  
  공고 앱을 `단기알바 / 직장지원` 2트랙으로 나누는 최소 설계 문서.

- [design/memory-system.md](./design/memory-system.md)  
  장기 기억 확장 아이디어 문서.

- [design/ownership.md](./design/ownership.md)  
  집/차 같은 큰 자산의 소유 구조 문서.

- [design/progression.md](./design/progression.md)  
  14일 이상 중기 진행 확장 설계 문서.

- [design/special-events.md](./design/special-events.md)  
  특수 이벤트와 미니게임 확장 설계 문서.

- [design/timeline.md](./design/timeline.md)  
  시간 소비와 하루 스케줄 확장 설계 문서.
