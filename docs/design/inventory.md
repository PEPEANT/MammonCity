<!-- 현재 구현 기준 문서. 미래 아이디어는 아래 "다음 단계"에만 적는다. -->

# 인벤토리 시스템

현재 결론: 인벤토리 v1은 읽기 전용 보유품 패널이다. 판매, 버리기, 사용 UI는 아직 없고 `state.inventory`와 `state.ownership`를 함께 보여준다.

## 현재 구현

- 게임 화면에 고정 `인벤토리` 버튼이 있다.
- 버튼 배지는 현재 표시 가능한 보유 항목 수를 보여준다.
- 패널 탭은 `소지품 / 장비 / 문서 / 자산` 4개다.
- 요약 영역은 `슬롯`, `현재 거주`, `보유 집`, `보유 차량`을 보여준다.
- 초기 장비는 `기본 스마트폰`, `기본 가방`이다.
- 기본 슬롯은 8칸이고 현재는 `소지품(carry)` 카테고리만 슬롯을 사용한다.
- 보유 집이 있으면 `문서` 탭에 집 관련 서류가, `자산` 탭에 집 카드가 자동으로 생긴다.
- 보유 차량이 있으면 `소지품` 탭에 차량 키가, `자산` 탭에 차량 카드가 자동으로 생긴다.

## 상태 구조

```js
state.inventory = {
  panelOpen: false,
  activeTab: "carry",
  slotLimit: 8,
  items: [
    { id: "phone-basic", qty: 1 },
    { id: "bag-basic", qty: 1 },
  ],
  equipped: {
    phone: "phone-basic",
    bag: "bag-basic",
  },
};
```

- `items`는 실제로 소지하거나 장비로 가진 아이템 원본이다.
- `equipped`는 현재 사용 중인 장비 ID를 저장한다.
- 탭 표시용 카드 일부는 `items`가 아니라 `ownership`에서 파생된다.

## 카탈로그

현재 기본 카탈로그는 아래만 들어 있다.

- `phone-basic`
- `bag-basic`

집/차 카탈로그는 인벤토리 서비스 안에 따로 정의되어 있으며, 실제 표시는 `ownership` 값과 연동된다.

## 저장 연동

- 메인 세이브 키 `mammon-city-save-v1`에 함께 저장된다.
- `panelOpen`, `activeTab`, `items`, `equipped`가 모두 저장된다.
- `renderGame()` 시점 자동 저장 규칙을 그대로 따른다.

## 현재 제외한 기능

- 판매
- 버리기
- 사용 버튼
- 상점 연동
- 선택지 `requiresItem` 조건 연결
- 스마트폰 외형 실시간 변경

## 다음 단계

1. 이벤트와 선택지에서 `grantInventoryItem`, `consumeInventoryItem`, `hasInventoryItem`를 쓰도록 연결한다.
2. 가방 업그레이드 아이템을 추가하고 `slotLimit` 또는 `slotBonus`를 늘린다.
3. 장착 중인 스마트폰 ID로 폰 쉘 외형을 바꾼다.
4. 문서/자산 카드에 상세 정보나 획득 경로를 붙인다.
