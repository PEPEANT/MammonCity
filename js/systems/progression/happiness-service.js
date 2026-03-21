const HAPPINESS_MIN = 0;
const HAPPINESS_MAX = 100;
const HAPPINESS_DEPRESSED_THRESHOLD = 29;
const HAPPINESS_STEADY_THRESHOLD = 70;

function clampHappinessValue(value = 0) {
  const normalized = Math.round(Number(value) || 0);
  return Math.max(HAPPINESS_MIN, Math.min(HAPPINESS_MAX, normalized));
}

function getHappinessStatusForValue(value = 0) {
  const safeValue = clampHappinessValue(value);
  if (safeValue <= HAPPINESS_DEPRESSED_THRESHOLD) {
    return "depressed";
  }
  if (safeValue >= HAPPINESS_STEADY_THRESHOLD) {
    return "steady";
  }
  return "low";
}

function getHappinessStatusLabel(status = "low") {
  switch (status) {
    case "steady":
      return "안정";
    case "depressed":
      return "우울한 상태";
    case "low":
    default:
      return "낮음";
  }
}

function createDefaultHappinessState() {
  return {
    value: 45,
    status: "low",
    dailyDecay: 5,
    lastModifiedDay: 1,
  };
}

function syncHappinessState(targetState = state) {
  if (!targetState || typeof targetState !== "object") {
    return createDefaultHappinessState();
  }

  const defaults = createDefaultHappinessState();
  const happinessState = targetState.happiness && typeof targetState.happiness === "object"
    ? targetState.happiness
    : {};
  const resolvedValue = clampHappinessValue(happinessState.value ?? defaults.value);
  const resolvedDailyDecay = Math.max(0, Math.round(Number(happinessState.dailyDecay) || defaults.dailyDecay));
  const resolvedDay = Math.max(
    1,
    Math.round(Number(happinessState.lastModifiedDay) || Number(targetState.day) || defaults.lastModifiedDay)
  );

  targetState.happiness = {
    ...defaults,
    ...happinessState,
    value: resolvedValue,
    status: getHappinessStatusForValue(resolvedValue),
    dailyDecay: resolvedDailyDecay,
    lastModifiedDay: resolvedDay,
  };

  return targetState.happiness;
}

function getHappinessSnapshotForState(targetState = state) {
  const happinessState = syncHappinessState(targetState);
  return {
    ...happinessState,
  };
}

function isDepressedForState(targetState = state) {
  return syncHappinessState(targetState).status === "depressed";
}

function setHappinessValue(nextValue, targetState = state) {
  const happinessState = syncHappinessState(targetState);
  happinessState.value = clampHappinessValue(nextValue);
  happinessState.status = getHappinessStatusForValue(happinessState.value);
  happinessState.lastModifiedDay = Math.max(
    1,
    Math.round(Number(targetState?.day) || happinessState.lastModifiedDay || 1)
  );
  return happinessState;
}

function adjustHappiness(delta = 0, targetState = state) {
  const happinessState = syncHappinessState(targetState);
  return setHappinessValue(happinessState.value + (Number(delta) || 0), targetState);
}

function applyDailyHappinessDecay(targetState = state) {
  const happinessState = syncHappinessState(targetState);
  const currentDay = Math.max(1, Math.round(Number(targetState?.day) || 1));
  if (happinessState.lastModifiedDay >= currentDay) {
    return false;
  }

  const elapsedDays = currentDay - happinessState.lastModifiedDay;
  happinessState.value = clampHappinessValue(happinessState.value - (happinessState.dailyDecay * elapsedDays));
  happinessState.status = getHappinessStatusForValue(happinessState.value);
  happinessState.lastModifiedDay = currentDay;
  return true;
}
