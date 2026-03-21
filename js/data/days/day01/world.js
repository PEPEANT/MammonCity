const DAY01_WORLD_PLAYER_ACTOR = {
  src: CHARACTER_ART.player.standing,
  alt: "player",
  left: 40,
  bottom: 6,
  height: 84,
  zIndex: 2,
};

const DAY01_WORLD_ALLEY_GIRL_ACTOR = {
  src: CHARACTER_ART.highSchoolGirl.default,
  alt: "high-school-girl",
  left: 74,
  bottom: 8,
  height: 90,
  zIndex: 1,
};

const DAY01_WORLD_ALLEY_OFFICE_WORKER_ACTOR = {
  src: CHARACTER_ART.alleyOfficeWorker.default,
  alt: "alley-office-worker",
  left: 73,
  bottom: 6,
  height: 88,
  zIndex: 1,
};

const DAY01_WORLD_ALLEY_AUNT_ACTOR = {
  src: CHARACTER_ART.alleyAunt.default,
  alt: "alley-aunt",
  left: 70,
  bottom: 5,
  height: 86,
  zIndex: 1,
};

const DAY01_WORLD_CONVENIENCE_CASHIER_ACTOR = {
  src: CHARACTER_ART.convenienceCashier.default,
  alt: "convenience-cashier",
  npcId: "convenience-cashier",
  left: 74,
  bottom: 7,
  height: 86,
  zIndex: 1,
};

const DAY01_WORLD_ALLEY_NPC_POOL = [
  {
    id: "high-school-girl",
    weight: 4,
    tag: "여고생",
    actor: DAY01_WORLD_ALLEY_GIRL_ACTOR,
    headlineBadge: "낯선 시선",
    headlineText: "교복 입은 여고생이 골목 끝 전봇대 아래에 멈춰 서 있다.",
    approachBadge: "시선 교차",
    approachText: "가까이 다가가자 여고생이 휴대폰 화면을 끄고 한 걸음 물러선다.",
  },
  {
    id: "alley-office-worker",
    weight: 3,
    tag: "직장인",
    actor: DAY01_WORLD_ALLEY_OFFICE_WORKER_ACTOR,
    headlineBadge: "골목 통화",
    headlineText: "양복 차림의 남자가 전화를 받으며 골목 입구에 멈춰 서 있다.",
    approachBadge: "짧은 통화",
    approachText: "가까이 가자 남자는 통화를 끊지 않은 채 너를 한 번 훑어보고 지나간다.",
  },
  {
    id: "alley-aunt",
    weight: 3,
    tag: "동네 주민",
    actor: DAY01_WORLD_ALLEY_AUNT_ACTOR,
    headlineBadge: "익숙한 발걸음",
    headlineText: "장바구니를 든 아주머니가 통화하며 골목을 천천히 지나간다.",
    approachBadge: "스친 대화",
    approachText: "가까이 다가가자 아주머니는 통화를 마무리하며 바삐 발걸음을 옮긴다.",
  },
];

const DAY01_WORLD_BUS_MAP = {
  title: "배금시 버스 노선도",
  subtitle: "정류장 유리판에 손때 묻은 동네 지도가 붙어 있다.",
  nodes: [
    {
      id: "apt-alley",
      emoji: "🏠",
      label: "집앞 골목",
      note: "부모님 아파트 앞",
    },
    {
      id: "bus-stop",
      emoji: "🚌",
      label: "버스 정류장",
      note: "환승 지점",
    },
    {
      id: "city-crossroads",
      emoji: "🚦",
      label: "배금시 사거리",
      note: "전단과 사람 흐름",
    },
    {
      id: "station-front",
      emoji: "🚉",
      label: "배금역 앞",
      note: "알바와 식사 냄새",
    },
    {
      id: "downtown",
      emoji: "🌃",
      label: "배금 중심가",
      note: "큰돈과 위험",
    },
  ],
};

DAY01_WORLD_BUS_MAP.nodes.push(
  {
    id: "library",
    emoji: "📚",
    label: "도서관",
    note: "준비도 상승",
  },
  {
    id: "exam-center",
    emoji: "📝",
    label: "시험장",
    note: "자격 확보",
  },
);

const DAY01_WORLD_CITY_CROSSROADS_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/city-crossroads.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.2) 100%)",
};

const DAY01_WORLD_BUS_STOP_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/bus-stop.png",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.16) 100%)",
};

const DAY01_WORLD_BUS_TRAVEL_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/bus-travel.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.24) 100%)",
};

const DAY01_WORLD_DOWNTOWN_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/downtown-street.png",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.18) 100%)",
};

const DAY01_WORLD_STATION_FRONT_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/station-front.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.18) 100%)",
};

const DAY01_WORLD_STATION_INTERIOR_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/station-interior.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.18) 100%)",
};

const DAY01_WORLD_STATION_SEOUL_ROUTE_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/station-seoul-route.png",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.18) 100%)",
};

const DAY01_WORLD_LIBRARY_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/station-interior.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.24) 100%)",
};

const DAY01_WORLD_EXAM_CENTER_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/station-front.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.22) 100%)",
};

const DAY01_WORLD_UNIVERSITY_DISTRICT_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/university-district.png",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.22) 100%)",
};

const DAY01_WORLD_CAMPUS_PARK_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/campus-park.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.18) 100%)",
};

const DAY01_WORLD_BAEGEUM_HOSPITAL_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/baegeum-hospital.png",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%)",
};

const DAY01_WORLD_CONVENIENCE_STORE_BACKGROUND = {
  className: "custom-location-bg",
  image: "assets/backgrounds/day01/convenience-store.jpg",
  position: "center center",
  size: "cover",
  overlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.16) 100%)",
};

const DAY01_WORLD_LOCATIONS = {
  "apt-alley": {
    label: "부모님 아파트 집앞 골목",
    speaker: "부모님 아파트 집앞 골목",
    title: "골목 바람이 아직 잠에서 덜 깬다",
    lines: [
      "익숙한 담배 냄새와 편의점 불빛이 뒤섞인 동네 입구다.",
      "집으로 들어갈지, 사거리 쪽으로 걸어 나갈지 정하면 된다.",
    ],
    tags: ["집앞", "생활", "골목"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    randomNpcPool: DAY01_WORLD_ALLEY_NPC_POOL,
    exits: ["city-crossroads", "bus-stop"],
    options: [
      {
        title: "배금시 사거리로 간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
      {
        title: "버스 정류장으로 간다",
        action: "move",
        targetLocation: "bus-stop",
      },
      {
        title: "돌아다닌다",
        action: "wander",
      },
      {
        title: "다시 집으로 들어간다",
        action: "home",
      },
    ],
  },
  "bus-stop": {
    label: "버스 정류장",
    speaker: "버스 정류장",
    title: "정류장 기둥 밑에서 버스 바람이 스친다",
    background: DAY01_WORLD_BUS_STOP_BACKGROUND,
    lines: [
      "낡은 의자와 광고판 사이로 버스 도착 방송이 끊겨 들린다.",
      "정류장 유리판에 붙은 노선도를 보면 배금시 안쪽 이동이 한눈에 들어온다.",
    ],
    tags: ["환승", "대기", "정류장"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["apt-alley", "city-crossroads", "bus-stop-map"],
    options: [
      {
        title: "노선도를 본다",
        action: "move",
        targetLocation: "bus-stop-map",
      },
      {
        title: "집앞 골목으로 돌아간다",
        action: "move",
        targetLocation: "apt-alley",
      },
      {
        title: "배금시 사거리로 간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
    ],
  },
  "bus-stop-map": {
    label: "버스 정류장 노선도",
    speaker: "버스 정류장 노선도",
    title: "유리판 뒤 노선도가 오늘의 동선을 바꾼다",
    background: DAY01_WORLD_BUS_STOP_BACKGROUND,
    lines: [
      "손때 묻은 배금시 지도를 따라가면 웬만한 곳은 버스로 이어진다.",
      "갈 곳을 정하면 다음 정류장처럼 바로 이동할 수 있다.",
    ],
    tags: ["환승", "지도", "노선도"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop", "city-crossroads", "station-front", "downtown", "library", "exam-center", "apt-alley"],
    map: DAY01_WORLD_BUS_MAP,
    options: [
      {
        title: "정류장 자리로 돌아간다",
        action: "move",
        targetLocation: "bus-stop",
      },
      {
        title: "집앞 골목으로 간다",
        action: "move",
        targetLocation: "apt-alley",
        travelVia: "bus",
      },
      {
        title: "배금시 사거리로 간다",
        action: "move",
        targetLocation: "city-crossroads",
        travelVia: "bus",
      },
      {
        title: "배금역 앞으로 간다",
        action: "move",
        targetLocation: "station-front",
        travelVia: "bus",
      },
      {
        title: "배금 중심가로 간다",
        action: "move",
        targetLocation: "downtown",
        travelVia: "bus",
      },
      {
        title: "도서관으로 간다",
        action: "move",
        targetLocation: "library",
        travelVia: "bus",
      },
      {
        title: "시험장으로 간다",
        action: "move",
        targetLocation: "exam-center",
        travelVia: "bus",
      },
    ],
  },
  "bus-ride": {
    label: "버스 이동 중",
    speaker: "버스 창가",
    title: "버스가 천천히 다음 정류장으로 나아간다",
    background: DAY01_WORLD_BUS_TRAVEL_BACKGROUND,
    lines: [
      "창밖 간판과 가로등이 차창 유리에 길게 번진다.",
      "내릴 타이밍만 놓치지 않으면 된다.",
    ],
    tags: ["이동", "버스", "창가"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    options: [
      {
        title: "도착해서 내린다",
        action: "complete-bus-travel",
      },
    ],
  },
  "city-crossroads": {
    label: "배금 사거리",
    speaker: "배금 사거리",
    title: "사거리의 소음이 하루 방향을 흔든다",
    background: DAY01_WORLD_CITY_CROSSROADS_BACKGROUND,
    lines: [
      "사람 흐름이 갈라지는 상업 구역의 허브다.",
      "역 앞과 중심가, 병원 쪽으로 동선을 고를 수 있다.",
    ],
    tags: ["허브", "상업 구역", "유동"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop", "station-front", "downtown", "baegeum-hospital"],
    options: [
      {
        title: "버스 정류장으로 간다",
        action: "move",
        targetLocation: "bus-stop",
      },
      {
        title: "배금역 앞으로 간다",
        action: "move",
        targetLocation: "station-front",
      },
      {
        title: "배금 중심가로 간다",
        action: "move",
        targetLocation: "downtown",
      },
      {
        title: "배금병원 쪽으로 간다",
        action: "move",
        targetLocation: "baegeum-hospital",
      },
    ],
  },
  "station-front": {
    label: "배금역 앞",
    speaker: "배금역 앞",
    title: "역 앞 인파가 알바 냄새를 몰고 온다",
    background: DAY01_WORLD_STATION_FRONT_BACKGROUND,
    lines: [
      "값싼 음식 냄새와 구인 전단지가 제일 빨리 모이는 곳이다.",
      "역 안으로 들어가거나 사거리 쪽으로 되돌아갈 수 있다.",
    ],
    tags: ["알바", "식사", "유동인구"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop", "city-crossroads", "station-interior"],
    options: [
      {
        title: "버스 정류장으로 간다",
        action: "move",
        targetLocation: "bus-stop",
      },
      {
        title: "배금시 사거리로 돌아간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
      {
        title: "배금역 안으로 들어간다",
        action: "move",
        targetLocation: "station-interior",
      },
      {
        title: "역 앞 공고를 확인한다",
        action: "board",
      },
    ],
  },
  "station-interior": {
    label: "배금역 안",
    speaker: "배금역 안",
    title: "전광판 소리와 발걸음이 천장에 부딪혀 울린다",
    background: DAY01_WORLD_STATION_INTERIOR_BACKGROUND,
    lines: [
      "개찰구와 편의시설 사이로 사람들의 발걸음이 끊기지 않는다.",
      "서울역 방향 통로로 더 들어가거나 다시 역 앞 광장으로 나갈 수 있다.",
    ],
    tags: ["역 안", "개찰구", "플랫폼"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["station-front", "station-seoul-route"],
    options: [
      {
        title: "역 앞 광장으로 나간다",
        action: "move",
        targetLocation: "station-front",
      },
      {
        title: "서울역 가는 통로로 향한다",
        action: "move",
        targetLocation: "station-seoul-route",
      },
    ],
  },
  "station-seoul-route": {
    label: "배금역 철도 통로",
    speaker: "서울역 방향 통로",
    title: "서울역으로 이어지는 철도 안내판이 길게 이어진다",
    background: DAY01_WORLD_STATION_SEOUL_ROUTE_BACKGROUND,
    lines: [
      "노란 안내 화살표와 플랫폼 번호가 서울행 방향을 또렷하게 가리킨다.",
      "여기서 열차를 타면 다음 구역 이벤트로 넘어가게 될 것이다. 지금은 잠시 대기만 할 수 있다.",
    ],
    tags: ["철도", "서울행", "환승"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["station-interior"],
    options: [
      {
        title: "탑승구 앞에서 잠시 기다린다",
        action: "wait-seoul-rail",
      },
      {
        title: "배금역 안으로 돌아간다",
        action: "move",
        targetLocation: "station-interior",
      },
    ],
  },
  downtown: {
    label: "배금 중심가",
    speaker: "배금 중심가",
    title: "간판 불빛이 더 큰 돈 냄새를 풍긴다",
    background: DAY01_WORLD_DOWNTOWN_BACKGROUND,
    lines: [
      "밝은 조명과 시끄러운 음악이 기회와 위험을 같이 끌어당긴다.",
      "아직은 둘러보는 정도지만, 나중엔 여기서 큰 소비와 사건이 열린다.",
    ],
    tags: ["고액소비", "유흥", "위험"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop", "city-crossroads"],
    options: [
      {
        title: "버스 정류장으로 간다",
        action: "move",
        targetLocation: "bus-stop",
      },
      {
        title: "배금시 사거리로 돌아간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
    ],
  },
  "baegeum-hospital": {
    label: "배금병원 성형외과",
    speaker: "배금병원 성형외과",
    title: "로비 안내판 너머로 성형 상담 배너가 차갑게 줄지어 서 있다",
    background: DAY01_WORLD_BAEGEUM_HOSPITAL_BACKGROUND,
    lines: [
      "수술 전후 사진과 상담 안내 문구가 유리 벽면을 따라 반듯하게 붙어 있다.",
      "돈만 준비되면 얼굴과 인상을 다시 설계할 수 있다는 공기가 병원 안에 가득하다.",
    ],
    tags: ["병원", "성형", "상업 구역"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["city-crossroads"],
    options: [
      {
        title: "천만원으로 성형 상담을 진행한다",
        action: "get-plastic-surgery",
      },
      {
        title: "배금 네거리로 돌아간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
    ],
  },
  "convenience-store": {
    label: "편의점 내부",
    speaker: "편의점 내부",
    title: "형광등 아래 진열대와 계산대가 지나치게 깔끔한 편의점이다",
    background: DAY01_WORLD_CONVENIENCE_STORE_BACKGROUND,
    lines: [
      "냉장고 모터 소리와 전자레인지 알림음이 야간 편의점 특유의 공기를 붙잡고 있다.",
      "계산대 쪽 점원이 잠깐 시선을 들었다가 다시 바코드 스캐너를 정리한다.",
    ],
    tags: ["편의점", "상점", "상업 구역"],
    actors: [DAY01_WORLD_PLAYER_ACTOR, DAY01_WORLD_CONVENIENCE_CASHIER_ACTOR],
    exits: ["city-crossroads"],
    options: [
      {
        title: "생수를 산다",
        action: "buy-convenience-water",
      },
      {
        title: "삼각김밥을 산다",
        action: "buy-convenience-kimbap",
      },
      {
        title: "진통제를 산다",
        action: "buy-convenience-painkiller",
      },
      {
        title: "배금 네거리로 돌아간다",
        action: "move",
        targetLocation: "city-crossroads",
      },
    ],
  },
  library: {
    label: "도서관",
    speaker: "도서관",
    title: "낮은 조명 아래 열람실 공기가 조용히 가라앉아 있다",
    background: DAY01_WORLD_LIBRARY_BACKGROUND,
    lines: [
      "책장 사이로 오래된 종이 냄새가 돌고, 빈 좌석마다 누군가의 준비 시간이 남아 있다.",
      "이력서를 다듬거나 공부를 하며 직장지원 준비도를 쌓기 좋은 곳이다.",
    ],
    tags: ["도서관", "준비", "공부"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop-map"],
    options: [
      {
        title: "사무 준비를 한다",
        action: "study-office-prep",
      },
      {
        title: "학업 준비를 한다",
        action: "study-academic-prep",
      },
      {
        title: "버스 정류장 지도로 돌아간다",
        action: "move",
        targetLocation: "bus-stop-map",
      },
    ],
  },
  "exam-center": {
    label: "시험장",
    speaker: "시험장",
    title: "접수 창구 앞 공기가 팽팽하게 식어 있는 시험장이다",
    background: DAY01_WORLD_EXAM_CENTER_BACKGROUND,
    lines: [
      "수험표와 접수 안내문이 벽을 빼곡하게 채우고 있다.",
      "오늘은 자격을 챙겨 두면 앞으로 지원할 수 있는 직장 루트가 늘어난다.",
    ],
    tags: ["시험장", "자격", "접수"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["bus-stop-map"],
    options: [
      {
        title: "컴퓨터 자격을 챙긴다",
        action: "take-computer-cert",
      },
      {
        title: "운전면허를 챙긴다",
        action: "take-driver-license",
      },
      {
        title: "버스 정류장 지도로 돌아간다",
        action: "move",
        targetLocation: "bus-stop-map",
      },
    ],
  },
  "university-district": {
    label: "대학가",
    speaker: "대학가",
    title: "취업지원센터 배너와 동아리 전단이 뒤섞인 캠퍼스 길목이다",
    background: DAY01_WORLD_UNIVERSITY_DISTRICT_BACKGROUND,
    lines: [
      "건물 유리문마다 강의실 안내와 취업 상담 포스터가 겹쳐 붙어 있다.",
      "학생들 틈에서 서류를 다듬거나 사람을 만나면 직장지원 루트에 도움이 될 것 같은 분위기다.",
    ],
    tags: ["대학가", "취업지원", "학생"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["study-hub", "campus-park"],
    options: [
      {
        title: "취업지원센터에서 상담을 받는다",
        action: "study-career-center-review",
      },
      {
        title: "캠퍼스 공원으로 걸어간다",
        action: "move",
        targetLocation: "campus-park",
      },
      {
        title: "학습 구역 입구로 돌아간다",
        action: "move",
        targetLocation: "study-hub",
      },
    ],
  },
  "campus-park": {
    label: "캠퍼스 공원",
    speaker: "캠퍼스 공원",
    title: "잔디와 벤치 사이로 학생들 목소리가 느리게 흘러가는 쉼터다",
    background: DAY01_WORLD_CAMPUS_PARK_BACKGROUND,
    lines: [
      "강의가 끝난 학생들이 벤치에 모여 과제와 아르바이트 이야기를 가볍게 주고받고 있다.",
      "앉아서 숨을 고르다 보면 다음 루트를 알려줄 만한 사람을 만날 수도 있어 보인다.",
    ],
    tags: ["공원", "휴식", "인맥"],
    actors: [DAY01_WORLD_PLAYER_ACTOR],
    exits: ["university-district", "study-hub"],
    options: [
      {
        title: "벤치에 앉아 사람들을 살핀다",
        action: "study-campus-network",
      },
      {
        title: "대학가로 돌아간다",
        action: "move",
        targetLocation: "university-district",
      },
      {
        title: "학습 구역 입구로 돌아간다",
        action: "move",
        targetLocation: "study-hub",
      },
    ],
  },
};

const DAY01_WORLD = {
  homeLocationId: "apt-alley",
  defaultLocationId: "apt-alley",
  locations: DAY01_WORLD_LOCATIONS,
  boardHeadline: {
    phone: "밖에서도 스마트폰으로 오늘 공고를 확인한다.",
    board: "골목 게시판과 역 앞 전단지에서 오늘 공고를 확인한다.",
  },
};
const DAY01_WORLD_DISTRICTS = {
  residential: {
    id: "residential",
    label: "주거 구역",
    note: "집과 골목",
    entryLocationId: "bus-stop",
  },
  study: {
    id: "study",
    label: "학습 구역",
    note: "도서관과 시험장",
    entryLocationId: "study-hub",
  },
  commercial: {
    id: "commercial",
    label: "상업 구역",
    note: "역 앞과 번화가",
    entryLocationId: "city-crossroads",
  },
  industrial: {
    id: "industrial",
    label: "산업 구역",
    note: "현장과 물류",
    entryLocationId: "",
  },
  underworld: {
    id: "underworld",
    label: "유흥 구역",
    note: "카지노와 수상한 인맥",
    entryLocationId: "",
  },
  finance: {
    id: "finance",
    label: "금융 구역",
    note: "은행과 투자",
    entryLocationId: "",
  },
};

const DAY01_WORLD_DISTRICT_MAP = {
  mode: "district",
  title: "도시 구역 노선도",
  subtitle: "먼저 갈 구역을 고른 뒤, 그 안에서 세부 장소를 걸어 들어간다.",
  nodes: ["residential", "study", "commercial"].map((districtId) => {
    const district = DAY01_WORLD_DISTRICTS[districtId];
    return {
      id: district.id,
      emoji: districtId === "residential" ? "🏠" : districtId === "study" ? "📚" : "🌆",
      label: district.label,
      note: district.note,
    };
  }),
};

DAY01_WORLD_LOCATIONS["apt-alley"].districtId = "residential";
DAY01_WORLD_LOCATIONS["bus-stop"].districtId = "residential";
DAY01_WORLD_LOCATIONS["bus-stop-map"].districtId = "residential";
DAY01_WORLD_LOCATIONS["city-crossroads"].districtId = "commercial";
DAY01_WORLD_LOCATIONS["station-front"].districtId = "commercial";
DAY01_WORLD_LOCATIONS["station-interior"].districtId = "commercial";
DAY01_WORLD_LOCATIONS["station-seoul-route"].districtId = "commercial";
DAY01_WORLD_LOCATIONS.downtown.districtId = "commercial";
DAY01_WORLD_LOCATIONS["baegeum-hospital"].districtId = "commercial";
DAY01_WORLD_LOCATIONS["convenience-store"].districtId = "commercial";
DAY01_WORLD_LOCATIONS.library.districtId = "study";
DAY01_WORLD_LOCATIONS["exam-center"].districtId = "study";
DAY01_WORLD_LOCATIONS["university-district"].districtId = "study";
DAY01_WORLD_LOCATIONS["campus-park"].districtId = "study";

DAY01_WORLD_LOCATIONS["study-hub"] = {
  label: "학습 구역 입구",
  speaker: "학습 구역 입구",
  title: "열람실과 시험장 안내판이 이어진 골목 입구다",
  background: DAY01_WORLD_LIBRARY_BACKGROUND,
  districtId: "study",
  lines: [
    "도서관과 시험장, 앞으로 열릴 대학가와 공원이 이 구역 안쪽으로 이어진다.",
    "지금은 공부와 자격 준비를 위한 장소부터 먼저 둘러볼 수 있다.",
  ],
  tags: ["학습 구역", "이동 허브", "준비"],
  actors: [DAY01_WORLD_PLAYER_ACTOR],
  exits: ["library", "exam-center", "university-district", "campus-park", "bus-stop-map"],
  options: [
    {
      title: "도서관으로 간다",
      action: "move",
      targetLocation: "library",
    },
    {
      title: "시험장으로 간다",
      action: "move",
      targetLocation: "exam-center",
    },
    {
      title: "대학가로 간다",
      action: "move",
      targetLocation: "university-district",
    },
    {
      title: "캠퍼스 공원으로 간다",
      action: "move",
      targetLocation: "campus-park",
    },
    {
      title: "버스 구역 노선도로 돌아간다",
      action: "move",
      targetLocation: "bus-stop-map",
    },
  ],
};

DAY01_WORLD_LOCATIONS["bus-stop-map"].map = DAY01_WORLD_DISTRICT_MAP;
DAY01_WORLD_LOCATIONS["bus-stop-map"].exits = ["bus-stop", "study-hub", "city-crossroads"];
DAY01_WORLD_LOCATIONS["bus-stop-map"].title = "정류장 앞에서 오늘 이동할 구역을 고른다";
DAY01_WORLD_LOCATIONS["bus-stop-map"].lines = [
  "버스 노선도에는 도시가 몇 개의 큰 구역으로 정리돼 있다.",
  "먼저 갈 구역을 정한 뒤, 도착해서 그 안의 세부 장소를 걸어 들어가면 된다.",
];
DAY01_WORLD_LOCATIONS["bus-stop-map"].options = [
  {
    title: "정류장 자리로 돌아간다",
    action: "move",
    targetLocation: "bus-stop",
  },
  {
    title: "주거 구역으로 간다",
    action: "move",
    targetLocation: "bus-stop",
    travelVia: "bus",
  },
  {
    title: "학습 구역으로 간다",
    action: "move",
    targetLocation: "study-hub",
    travelVia: "bus",
  },
  {
    title: "상업 구역으로 간다",
    action: "move",
    targetLocation: "city-crossroads",
    travelVia: "bus",
  },
];

DAY01_WORLD_LOCATIONS.library.exits = ["study-hub"];
DAY01_WORLD_LOCATIONS.library.options = [
  {
    title: "사무 준비를 한다",
    action: "study-office-prep",
  },
  {
    title: "학업 준비를 한다",
    action: "study-academic-prep",
  },
  {
    title: "학습 구역 입구로 돌아간다",
    action: "move",
    targetLocation: "study-hub",
  },
];

DAY01_WORLD_LOCATIONS["exam-center"].exits = ["study-hub"];
DAY01_WORLD_LOCATIONS["exam-center"].options = [
  {
    title: "컴퓨터 자격을 챙긴다",
    action: "take-computer-cert",
  },
  {
    title: "운전면허를 챙긴다",
    action: "take-driver-license",
  },
  {
    title: "학습 구역 입구로 돌아간다",
    action: "move",
    targetLocation: "study-hub",
  },
];

DAY01_WORLD.districts = DAY01_WORLD_DISTRICTS;
DAY01_WORLD.defaultDistrictId = "residential";
DAY01_WORLD.initialUnlockedDistricts = ["residential", "study", "commercial"];
DAY01_WORLD.initialUnlockedLocations = [
  "apt-alley",
  "bus-stop",
  "bus-stop-map",
  "study-hub",
  "library",
  "exam-center",
  "university-district",
  "campus-park",
  "city-crossroads",
  "station-front",
  "station-interior",
  "station-seoul-route",
  "downtown",
  "baegeum-hospital",
  "convenience-store",
];
