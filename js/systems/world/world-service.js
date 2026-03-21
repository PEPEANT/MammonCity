function getWorldDataForDay(day = 1) {
  const fallback = typeof DAY01_DATA === "object" ? DAY01_DATA.world : null;
  if (typeof DAY_DATA !== "object" || !DAY_DATA) {
    return fallback;
  }

  return DAY_DATA[day]?.world || fallback;
}

function getDayWorldDistrictMap(day = 1) {
  return getWorldDataForDay(day)?.districts || null;
}

function getWorldLocationDistrictId(locationId, day = 1) {
  if (!locationId) {
    return "";
  }

  const locations = getWorldDataForDay(day)?.locations || null;
  return locations?.[locationId]?.districtId || "";
}

function getWorldDistrictEntryLocationId(districtId, day = 1) {
  if (!districtId) {
    return "";
  }

  return getDayWorldDistrictMap(day)?.[districtId]?.entryLocationId || "";
}

function getWorldDistrictLabel(districtId, day = 1) {
  if (!districtId) {
    return "";
  }

  return getDayWorldDistrictMap(day)?.[districtId]?.label || districtId;
}

function normalizeWorldIdList(list, allowedIds = [], fallbackIds = []) {
  const allowed = new Set((Array.isArray(allowedIds) ? allowedIds : []).filter(Boolean));
  const source = Array.isArray(list) ? list : fallbackIds;
  const normalized = [];

  source.forEach((id) => {
    if (!id || (allowed.size && !allowed.has(id)) || normalized.includes(id)) {
      return;
    }
    normalized.push(id);
  });

  return normalized;
}

function getWorldInitialUnlockedDistrictIds(day = 1) {
  const worldData = getWorldDataForDay(day);
  const districts = getDayWorldDistrictMap(day) || {};
  const allowedIds = Object.keys(districts);
  const initial = Array.isArray(worldData?.initialUnlockedDistricts)
    ? worldData.initialUnlockedDistricts
    : [];

  return normalizeWorldIdList(initial, allowedIds, []);
}

function getWorldInitialUnlockedLocationIds(day = 1) {
  const worldData = getWorldDataForDay(day);
  const locations = worldData?.locations || {};
  const allowedIds = Object.keys(locations);
  const initial = Array.isArray(worldData?.initialUnlockedLocations)
    ? worldData.initialUnlockedLocations
    : [];

  return normalizeWorldIdList(initial, allowedIds, []);
}
