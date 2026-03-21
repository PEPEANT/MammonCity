# happiness-system
결론: 행복도는 `0 ~ 100` 단일 수치로 저장되며, 하루 감소와 몇몇 실제 행동 보정이 붙은 v1 상태다.

## Purpose

- 돈, 평판과 별도로 현재 삶의 결을 보여주는 수치를 둔다.
- 엔딩에서 "얼마를 벌었나"뿐 아니라 "어떤 상태로 버텼나"도 같이 남긴다.
- 이후 연애, 고립, 중독, NPC 반응 분기의 공용 기반으로 쓴다.

## Current Rules

- 상태는 `state.happiness`에 저장된다.
- 기본값은 `45`, 상태 라벨은 `steady | low | depressed`다.
- 기준값:
  - `70+`: `steady`
  - `30 ~ 69`: `low`
  - `29 이하`: `depressed`
- 하루가 넘어갈 때 기본적으로 `5` 감소한다.

## Current Hooks

- 골목 배회: `+1`
- 취업지원센터 상담: `+2`
- 캠퍼스 인연 이벤트: `+4`
- 성형수술 완료: `+8`
- 편의점 구매: `+1`

현재는 얇은 v1이라서 행복도 변화처를 일부 행동에만 연결했다. 이후 콘텐츠가 늘면 이벤트 단위로 계속 붙이면 된다.

## State

```js
state.happiness = {
  value: 45,
  status: "low",
  dailyDecay: 5,
  lastModifiedDay: 1,
};
```

## UI

- 캐릭터 패널에 `행복도` 바가 추가된다.
- 상태 라벨은 `안정 / 낮음 / 우울한 상태` 배지로 같이 표시된다.
- DEV 패널에서 행복도를 직접 조절할 수 있다.

## Save / Ending

- 저장 데이터에 `happiness`가 포함된다.
- 구세이브에는 값이 없어도 기본값으로 복구된다.
- 엔딩 요약에 최종 행복도와 해석 문장이 추가된다.

## Next

- 관계 이벤트, 연애, 외로움, 수면 부족, 소비 패턴과 연결
- `risk`나 `social`과 묶인 장기 저하 이벤트 추가
- 랭킹 화면에 행복도 별도 표기 여부 검토

## Related

- [save-system.md](./save-system.md)
- [design/happiness-system.md](./design/happiness-system.md)
- [design/job-tracks.md](./design/job-tracks.md)
