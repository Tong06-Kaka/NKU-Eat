const structure = {
  八里台: {
    校内食堂: ["一食堂 1F", "一食堂 2F", "二食堂 1F", "二食堂 2F", "二食堂 3F", "三食堂 1F", "三食堂 2F", "三食堂 3F", "清真食堂 1F"],
    校内商业: ["90咖啡馆", "麦当劳", "瑞幸咖啡"],
    校外外卖: ["八里台周边"]
  },
  津南: {
    理科组团: ["理科食堂 1F", "理科食堂 2F", "理科食堂 3F", "KFC", "瑞幸咖啡", "711便利店", "独立店铺"],
    文科组团: ["文科食堂 1F", "文科食堂 2F", "元和西饼", "蜜雪冰城", "KFC"],
    校外外卖: ["津南周边"]
  }
};

const foods = [
  {
    id: "placeholder-yishi-rice",
    source: "canteen",
    name: "一食堂示例盖饭",
    campus: "八里台",
    area: "校内食堂",
    place: "一食堂 1F",
    window: "待补充窗口",
    price: 14,
    effort: 1,
    effortLabel: "排队压力低",
    rating: 4.2,
    tags: ["米饭", "饱腹", "不辣"],
    reason: "这是占位菜品，用来验证推荐流程。真实菜名、窗口和价格需要后续补充。"
  },
  {
    id: "placeholder-ershi-noodle",
    source: "canteen",
    name: "二食堂示例面食",
    campus: "八里台",
    area: "校内食堂",
    place: "二食堂 2F",
    window: "待补充窗口",
    price: 15,
    effort: 2,
    effortLabel: "排队压力中",
    rating: 4.3,
    tags: ["面食", "饱腹", "换口味"],
    reason: "适合想换掉米饭的一餐。当前为菜单结构占位，不代表真实供应。"
  },
  {
    id: "placeholder-sanshi-spicy",
    source: "canteen",
    name: "三食堂示例风味餐",
    campus: "八里台",
    area: "校内食堂",
    place: "三食堂 3F",
    window: "待补充窗口",
    price: 18,
    effort: 2,
    effortLabel: "排队压力中",
    rating: 4.4,
    tags: ["辣", "米饭", "换口味"],
    reason: "用于占位风味窗口。等你给具体窗口后，可以替换成真实菜品。"
  },
  {
    id: "placeholder-halal",
    source: "canteen",
    name: "清真食堂示例牛肉饭",
    campus: "八里台",
    area: "校内食堂",
    place: "清真食堂 1F",
    window: "待补充窗口",
    price: 18,
    effort: 2,
    effortLabel: "排队压力中",
    rating: 4.5,
    tags: ["米饭", "高蛋白", "饱腹"],
    reason: "清真食堂条目已预留，具体窗口和菜品可以按你的资料继续录入。"
  },
  {
    id: "store-90-coffee",
    source: "store",
    name: "90咖啡馆简餐",
    campus: "八里台",
    area: "校内商业",
    place: "90咖啡馆",
    window: "简餐/饮品",
    price: 26,
    effort: 1,
    effortLabel: "到店较快",
    rating: 4.1,
    tags: ["咖啡", "小吃", "换口味"],
    reason: "适合不想正经吃食堂、只想找个地方坐一会儿的饭点。"
  },
  {
    id: "store-luckin-balitai",
    source: "store",
    name: "瑞幸咖啡轻食",
    campus: "八里台",
    area: "校内商业",
    place: "瑞幸咖啡",
    window: "饮品/轻食",
    price: 22,
    effort: 1,
    effortLabel: "到店较快",
    rating: 4.0,
    tags: ["咖啡", "小吃", "甜口"],
    reason: "适合赶课、赶组会时买一份饮品和轻食。"
  },
  {
    id: "placeholder-science-rice",
    source: "canteen",
    name: "理科食堂示例套餐",
    campus: "津南",
    area: "理科组团",
    place: "理科食堂 1F",
    window: "待补充窗口",
    price: 15,
    effort: 1,
    effortLabel: "排队压力低",
    rating: 4.2,
    tags: ["米饭", "饱腹", "不辣"],
    reason: "理科组团食堂占位项，后续可细分到三层每个窗口。"
  },
  {
    id: "placeholder-science-third",
    source: "canteen",
    name: "理科食堂三层示例餐",
    campus: "津南",
    area: "理科组团",
    place: "理科食堂 3F",
    window: "待补充窗口",
    price: 20,
    effort: 2,
    effortLabel: "排队压力中",
    rating: 4.3,
    tags: ["换口味", "饱腹", "辣"],
    reason: "用于承接理科食堂三层窗口，真实菜单待补充。"
  },
  {
    id: "placeholder-arts-light",
    source: "canteen",
    name: "文科食堂示例清淡餐",
    campus: "津南",
    area: "文科组团",
    place: "文科食堂 2F",
    window: "待补充窗口",
    price: 13,
    effort: 1,
    effortLabel: "排队压力低",
    rating: 4.2,
    tags: ["清淡", "不辣", "米饭"],
    reason: "文科食堂两层结构已预留，后续可补窗口、菜名、价格和供应时段。"
  },
  {
    id: "store-kfc-jinnan",
    source: "store",
    name: "KFC 校内套餐",
    campus: "津南",
    area: "理科组团",
    place: "KFC",
    window: "快餐",
    price: 32,
    effort: 2,
    effortLabel: "饭点可能排队",
    rating: 4.1,
    tags: ["安慰", "小吃", "高蛋白"],
    reason: "适合想稳定吃快餐，或者和同学统一选择的时候。"
  },
  {
    id: "store-mixue",
    source: "store",
    name: "蜜雪冰城饮品",
    campus: "津南",
    area: "文科组团",
    place: "蜜雪冰城",
    window: "饮品",
    price: 8,
    effort: 1,
    effortLabel: "到店较快",
    rating: 4.0,
    tags: ["甜口", "小吃"],
    reason: "不是正餐，但适合饭后或下午犯困时补一口甜。"
  },
  {
    id: "delivery-balitai-bowl",
    source: "delivery",
    name: "八里台周边轻食碗",
    campus: "八里台",
    area: "校外外卖",
    place: "八里台周边",
    window: "配送约 28 分钟",
    price: 27,
    effort: 3,
    effortLabel: "配送约 28 分钟",
    rating: 4.3,
    tags: ["清淡", "高蛋白", "不辣"],
    reason: "外卖示例项，适合不想出门但想吃轻一点的时候。"
  },
  {
    id: "delivery-jinnan-noodle",
    source: "delivery",
    name: "津南周边牛肉面",
    campus: "津南",
    area: "校外外卖",
    place: "津南周边",
    window: "配送约 25 分钟",
    price: 21,
    effort: 3,
    effortLabel: "配送约 25 分钟",
    rating: 4.4,
    tags: ["面食", "饱腹", "安慰"],
    reason: "外卖示例项，真实店铺和平台信息后续需要单独采集。"
  }
];

const avatars = ["南", "开", "饭", "🍚", "☕", "🥢"];
const aiNames = ["南开干饭研究员", "八里台选择终结者", "津南饭点观察员", "碳水快乐学者", "不纠结同学"];

const state = {
  source: "all",
  campus: "all",
  area: "all",
  place: "all",
  budget: 18,
  effort: 2,
  mood: "饱腹",
  tastes: new Set(),
  tab: "all",
  search: "",
  current: null,
  profile: JSON.parse(localStorage.getItem("nkuProfile") || "null"),
  favorites: new Set(JSON.parse(localStorage.getItem("nkuFavorites") || "[]")),
  history: JSON.parse(localStorage.getItem("nkuHistory") || "[]")
};

const $ = (selector) => document.querySelector(selector);
const mainResult = $("#mainResult");
const backupResults = $("#backupResults");
const foodGrid = $("#foodGrid");
const saveBtn = $("#saveBtn");
const dialog = $("#decisionDialog");
const dialogContent = $("#dialogContent");

function sourceLabel(source) {
  return { canteen: "食堂", store: "校内商业", delivery: "外卖" }[source] || "不限";
}

function money(price) {
  return `${price} 元`;
}

function updateAreaOptions() {
  const campus = $("#campus").value;
  const areaSelect = $("#area");
  const areas = campus === "all" ? [...new Set(Object.values(structure).flatMap((item) => Object.keys(item)))] : Object.keys(structure[campus]);
  areaSelect.innerHTML = `<option value="all">不限区域</option>${areas.map((area) => `<option value="${area}">${area}</option>`).join("")}`;
  state.area = "all";
  updatePlaceOptions();
}

function updatePlaceOptions() {
  const campus = $("#campus").value;
  const area = $("#area").value;
  const placeSelect = $("#place");
  let places = [];
  Object.entries(structure).forEach(([campusName, areaMap]) => {
    if (campus !== "all" && campus !== campusName) return;
    Object.entries(areaMap).forEach(([areaName, list]) => {
      if (area !== "all" && area !== areaName) return;
      places.push(...list);
    });
  });
  places = [...new Set(places)];
  placeSelect.innerHTML = `<option value="all">不限食堂/店铺</option>${places.map((place) => `<option value="${place}">${place}</option>`).join("")}`;
  state.place = "all";
}

function initSelectors() {
  $("#campus").innerHTML = `<option value="all">不限校区</option>${Object.keys(structure)
    .map((campus) => `<option value="${campus}">${campus}</option>`)
    .join("")}`;
  updateAreaOptions();
}

function scoreFood(food) {
  let score = food.rating * 12;
  if (state.source === food.source) score += 22;
  if (state.campus === "all" || state.campus === food.campus) score += 16;
  if (state.area === "all" || state.area === food.area) score += 14;
  if (state.place === "all" || state.place === food.place) score += 18;
  if (food.price <= state.budget) score += 18;
  else score -= Math.min((food.price - state.budget) * 2, 20);
  if (food.effort <= state.effort) score += 14;
  else score -= 10;
  if (food.tags.includes(state.mood)) score += 16;
  state.tastes.forEach((taste) => {
    if (food.tags.includes(taste)) score += 9;
  });
  if (state.favorites.has(food.id)) score += 4;
  return score;
}

function getRankedFoods() {
  return foods
    .filter((food) => state.source === "all" || food.source === state.source)
    .filter((food) => state.campus === "all" || food.campus === state.campus)
    .filter((food) => state.area === "all" || food.area === state.area)
    .filter((food) => state.place === "all" || food.place === state.place)
    .map((food) => ({ ...food, score: scoreFood(food) }))
    .sort((a, b) => b.score - a.score);
}

function cardMeta(food) {
  return `${sourceLabel(food.source)} · ${food.campus} · ${food.area} · ${food.place} · ${money(food.price)} · ${food.effortLabel}`;
}

function renderCurrent(food) {
  mainResult.innerHTML = `
    <h3>${food.name}</h3>
    <div class="meta-line">
      <span>${sourceLabel(food.source)}</span>
      <span>${food.campus}</span>
      <span>${food.area}</span>
      <span>${food.place}</span>
      <span>${money(food.price)}</span>
      <span>${food.effortLabel}</span>
      <span class="score-pill">${Math.round(food.score)} 分</span>
    </div>
    <p class="reason">${food.reason}</p>
    <div class="tag-row">${food.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
  saveBtn.classList.toggle("active", state.favorites.has(food.id));
  saveBtn.textContent = state.favorites.has(food.id) ? "已收藏" : "收藏";
}

function renderDialog(food) {
  dialogContent.innerHTML = `
    <div class="dialog-food">${food.name}</div>
    <p>${cardMeta(food)}</p>
    <p>${food.reason}</p>
    <div class="tag-row">${food.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
  if (dialog.open) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function renderResult({ random = false, record = true, popup = false } = {}) {
  const ranked = getRankedFoods();
  const pool = ranked.length ? ranked : foods.map((food) => ({ ...food, score: scoreFood(food) })).sort((a, b) => b.score - a.score);
  const primary = random ? pool[Math.floor(Math.random() * pool.length)] : pool[0];
  const backups = pool.filter((food) => food.id !== primary.id).slice(0, 3);
  state.current = primary;
  if (record) addHistory(primary);
  renderCurrent(primary);
  backupResults.innerHTML = backups
    .map(
      (food) => `
        <button class="mini-card" type="button" data-pick="${food.id}">
          <strong>${food.name}</strong>
          <span>${cardMeta(food)}</span>
        </button>
      `
    )
    .join("");
  renderStats();
  if (popup) renderDialog(primary);
}

function renderGrid() {
  const query = state.search.trim().toLowerCase();
  const visible = foods.filter((food) => {
    if (state.tab === "favorite" && !state.favorites.has(food.id)) return false;
    if (state.tab !== "all" && state.tab !== "favorite" && food.source !== state.tab) return false;
    if (!query) return true;
    return [food.name, food.campus, food.area, food.place, food.window, ...food.tags].some((item) => item.toLowerCase().includes(query));
  });

  if (!visible.length) {
    foodGrid.innerHTML = `<div class="empty">暂时没有匹配结果。真实菜单补充后，这里会更有用。</div>`;
    return;
  }

  foodGrid.innerHTML = visible
    .map(
      (food) => `
        <article class="food-card">
          <div class="meta-line"><span>${sourceLabel(food.source)}</span><span>${food.campus}</span><span>${food.area}</span></div>
          <h3>${food.name}</h3>
          <p>${food.place} · ${food.window}</p>
          <div class="tag-row">${food.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-footer">
            <strong>${money(food.price)} · ${food.effortLabel}</strong>
            <button class="save-small ${state.favorites.has(food.id) ? "active" : ""}" type="button" data-save="${food.id}" aria-label="收藏 ${food.name}" title="收藏">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 21-1.4-1.3C5.4 15 2 11.9 2 8.1 2 5 4.4 3 7.2 3c1.6 0 3.1.7 4.1 1.8C12.3 3.7 13.8 3 15.4 3 18.2 3 20.6 5 20.6 8.1c0 3.8-3.4 6.9-8.6 11.6L12 21Z"/></svg>
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCampusMap() {
  $("#campusMap").innerHTML = Object.entries(structure)
    .map(
      ([campus, areas]) => `
        <article class="map-card">
          <h3>${campus}</h3>
          ${Object.entries(areas)
            .map(([area, places]) => `<p><strong>${area}</strong><span>${places.join(" / ")}</span></p>`)
            .join("")}
        </article>
      `
    )
    .join("");
}

function renderStats() {
  $("#favoriteCount").textContent = state.favorites.size;
  $("#historyCount").textContent = state.history.length;
  $("#historyList").innerHTML = state.history.length
    ? state.history
        .slice(0, 6)
        .map((item) => `<div class="history-item"><strong>${item.name}</strong><span>${item.time}</span></div>`)
        .join("")
    : `<div class="empty">还没有推荐历史，点一次“帮我决定”就会出现。</div>`;
}

function addHistory(food) {
  const now = new Date();
  const label = `${now.getMonth() + 1}月${now.getDate()}日 ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  state.history = [{ id: food.id, name: food.name, time: label }, ...state.history.filter((item) => item.id !== food.id)].slice(0, 20);
  localStorage.setItem("nkuHistory", JSON.stringify(state.history));
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  localStorage.setItem("nkuFavorites", JSON.stringify([...state.favorites]));
  renderGrid();
  renderStats();
  if (state.current) {
    saveBtn.classList.toggle("active", state.favorites.has(state.current.id));
    saveBtn.textContent = state.favorites.has(state.current.id) ? "已收藏" : "收藏";
  }
}

function syncFilters() {
  state.campus = $("#campus").value;
  state.area = $("#area").value;
  state.place = $("#place").value;
  state.budget = Number($("#budget").value);
  state.effort = Number($("#effort").value);
  state.mood = $("#mood").value;
}

function pickAiProfile() {
  const name = aiNames[Math.floor(Math.random() * aiNames.length)];
  const avatar = avatars[Math.floor(Math.random() * avatars.length)];
  $("#nicknameInput").value = name;
  selectAvatar(avatar);
}

function selectAvatar(avatar) {
  $("#avatarPreview").textContent = avatar;
  document.querySelectorAll("[data-avatar]").forEach((button) => button.classList.toggle("active", button.dataset.avatar === avatar));
}

function saveProfile() {
  const name = $("#nicknameInput").value.trim() || "南开同学";
  const avatar = $("#avatarPreview").textContent || "南";
  state.profile = { name, avatar };
  localStorage.setItem("nkuProfile", JSON.stringify(state.profile));
  applyProfile();
  $("#onboarding").hidden = true;
}

function applyProfile() {
  const profile = state.profile || { name: "南开同学", avatar: "南" };
  $("#userGreeting").textContent = `${profile.name}，今天吃点什么`;
  $("#profileName").textContent = profile.name;
  $("#profileAvatar").textContent = profile.avatar;
}

function initProfile() {
  $("#avatarGrid").innerHTML = avatars.map((avatar) => `<button type="button" data-avatar="${avatar}">${avatar}</button>`).join("");
  selectAvatar("南");
  $("#avatarGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-avatar]");
    if (button) selectAvatar(button.dataset.avatar);
  });
  $("#aiProfileBtn").addEventListener("click", pickAiProfile);
  $("#enterBtn").addEventListener("click", saveProfile);
  if (!state.profile) $("#onboarding").hidden = false;
  applyProfile();
}

document.querySelectorAll("[data-filter='source'] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter='source'] button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.source = button.dataset.value;
    renderResult({ record: false });
  });
});

$("#campus").addEventListener("change", () => {
  updateAreaOptions();
  syncFilters();
  renderResult({ record: false });
});

$("#area").addEventListener("change", () => {
  updatePlaceOptions();
  syncFilters();
  renderResult({ record: false });
});

["place", "budget", "effort", "mood"].forEach((id) => {
  $(`#${id}`).addEventListener("change", () => {
    syncFilters();
    renderResult({ record: false });
  });
});

$("#filters").addEventListener("submit", (event) => {
  event.preventDefault();
  syncFilters();
  renderResult({ popup: true });
});

document.querySelectorAll("#tasteChips button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    if (state.tastes.has(button.dataset.value)) state.tastes.delete(button.dataset.value);
    else state.tastes.add(button.dataset.value);
    renderResult({ record: false });
  });
});

$("#randomBtn").addEventListener("click", () => renderResult({ random: true, popup: true }));
$("#dialogShuffle").addEventListener("click", () => renderResult({ random: true, popup: true }));
$("#dialogOk").addEventListener("click", () => dialog.close());
$("#closeDialog").addEventListener("click", () => dialog.close());

backupResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pick]");
  if (!button) return;
  const food = foods.find((item) => item.id === button.dataset.pick);
  if (!food) return;
  state.current = { ...food, score: scoreFood(food) };
  addHistory(state.current);
  renderCurrent(state.current);
  renderDialog(state.current);
  renderStats();
});

saveBtn.addEventListener("click", () => {
  if (state.current) toggleFavorite(state.current.id);
});

$("#libraryTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  document.querySelectorAll("#libraryTabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.tab = button.dataset.tab;
  renderGrid();
});

$("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderGrid();
});

foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (button) toggleFavorite(button.dataset.save);
});

initSelectors();
initProfile();
renderCampusMap();
renderResult({ record: false });
renderGrid();
renderStats();
