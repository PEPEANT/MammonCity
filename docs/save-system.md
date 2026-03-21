# 저장 시스템
현재 결론: 세이브는 `localStorage` 기반으로 동작하고, 지금은 `jobs`, `happiness`, `inventory`, `ownership`, `world`를 포함한 현재 플레이 상태를 통째로 저장한다.

## 목적

현재 저장/불러오기 범위와 예외 규칙을 빠르게 확인하기 위한 문서다.

## 현재 규칙

1. 저장 키는 `mammon-city-save-v1`이다.
2. 저장 버전은 `1`이다.
3. 시작 화면이 열려 있을 때는 저장하지 않는다.
4. `devPreviewMode = true`일 때는 저장하지 않는다.
5. `renderGame()` 흐름 중 `persistState()`가 호출되는 구조다.
6. 저장 데이터는 `serializeState()`에서 만들고, 복구는 `hydrateState()`에서 한다.
7. 새 게임 시작과 타이틀 복귀 시 기존 저장은 지운다.

## 주요 저장 대상

- 날짜, 돈, 체력, 에너지
- 현재 장면과 스토리 진행값
- 폰 상태와 앱 상태
- `jobs`
- `happiness`
- `inventory`
- `ownership`
- `world`
- `memory`
- `bank`
- `dialogue`
- `activeJobs`, `seenIncidents`
- 현재 공고, 예약 근무, 결과 카드

## jobs 저장 범위

`state.jobs`

- `dailyOffers`
- `scheduledShift`
- `interviewResult`
- `applicationDoneToday`
- `activeTrack`
- `careerOffers`
- `career`
- `careerPrep`
- `certifications`
- `careerApplicationDoneToday`

## happiness save scope

`state.happiness`

- `value`
- `status`
- `dailyDecay`
- `lastModifiedDay`

하위 호환을 위해 top-level 별칭도 같이 유지한다.

- `dayOffers`
- `nextDayShift`
- `interviewResult`
- `jobApplicationDoneToday`

## inventory / ownership 저장 범위

### inventory

- `panelOpen`
- `activeTab`
- `slotLimit`
- `items`
- `equipped`

### ownership

- `residence`
- `home`
- `vehicle`

## world 저장 범위

- `currentLocation`
- `alleyNpcVisible`
- `alleyNpcId`
- `pendingTravelTarget`

## 복구 메모

- `activeJobs`, `seenIncidents`는 저장 시 배열로 바꾸고 복구 시 다시 `Set`으로 돌린다.
- 중첩 객체인 `inventory`, `ownership`, `jobs`, `bank`, `dialogue`, `memory`, `world`는 hydrate 과정에서 기본값과 합쳐 복구한다.
- `jobs`는 복구 후 `syncJobsDomainState()`로 다시 정규화한다.

## 현재 제약

- 시작 화면 진입 시 저장을 비우는 흐름이 여전히 남아 있다.
- 저장 슬롯 시스템은 아직 없다.
- 자동 저장은 있지만 사용자용 `이어하기` UX는 더 다듬을 여지가 있다.

## 다음 문서

- [phone-system.md](./phone-system.md)
- [design/inventory.md](./design/inventory.md)
- [design/ownership.md](./design/ownership.md)
