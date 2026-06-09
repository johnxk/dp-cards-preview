const products = [
  {
    id: "jp-pokemon-mega-brave-box",
    title: "Pokemon JP Mega Brave Booster Box",
    category: "Japanese Pokemon",
    badge: "Japanese sealed box",
    price: 118,
    stock: "Preorder check",
    image: "assets/product-chronicle-box.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-MB-BOX",
    copy: "Japanese Pokemon booster box listing. Buyer can request allocation, box photos, and sealed-case quote.",
    market: "steady"
  },
  {
    id: "jp-pokemon-mega-symphonia-box",
    title: "Pokemon JP Mega Symphonia Booster Box",
    category: "Japanese Pokemon",
    badge: "Japanese sealed box",
    price: 118,
    stock: "Preorder check",
    image: "assets/product-chronicle-box.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-MS-BOX",
    copy: "Japanese Pokemon sealed box draft listing for pre-release and allocation requests.",
    market: "steady"
  },
  {
    id: "jp-pokemon-black-bolt-box",
    title: "Pokemon JP Black Bolt Booster Box",
    category: "Japanese Pokemon",
    badge: "Japanese sealed box",
    price: 92,
    stock: "In stock check",
    image: "assets/product-arena-set.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-BB-BOX",
    copy: "Japanese Pokemon sealed box listing with visible draft price and manual stock confirmation.",
    market: "up"
  },
  {
    id: "jp-pokemon-white-flare-box",
    title: "Pokemon JP White Flare Booster Box",
    category: "Japanese Pokemon",
    badge: "Japanese sealed box",
    price: 92,
    stock: "In stock check",
    image: "assets/product-prism-case.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-WF-BOX",
    copy: "Japanese Pokemon sealed box listing. Shipping and quantity are confirmed by contact before payment.",
    market: "up"
  },
  {
    id: "jp-pokemon-battle-partners-box",
    title: "Pokemon JP Battle Partners Booster Box",
    category: "Japanese Pokemon",
    badge: "Japanese sealed box",
    price: 78,
    stock: "Low stock",
    image: "assets/product-chronicle-box.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-BP-BOX",
    copy: "Japanese Pokemon sealed box for collectors and sealed inventory buyers.",
    market: "steady"
  },
  {
    id: "jp-pokemon-terastal-festival-box",
    title: "Pokemon JP Terastal Festival ex Box",
    category: "Japanese Pokemon",
    badge: "Japanese high-class box",
    price: 84,
    stock: "In stock check",
    image: "assets/product-eclipse-pack.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-PKM-TFEX-BOX",
    copy: "Japanese Pokemon high-class box draft listing for visible pricing and manual availability confirmation.",
    market: "up"
  },
  {
    id: "jp-onepiece-op12-box",
    title: "One Piece JP OP-12 Booster Box",
    category: "Japanese One Piece",
    badge: "Japanese sealed box",
    price: 72,
    stock: "Preorder check",
    image: "assets/product-arena-set.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-OP-OP12-BOX",
    copy: "Japanese One Piece Card Game booster box listing. Buyer can request case price and sealed photos.",
    market: "up"
  },
  {
    id: "jp-onepiece-op11-box",
    title: "One Piece JP OP-11 Booster Box",
    category: "Japanese One Piece",
    badge: "Japanese sealed box",
    price: 68,
    stock: "In stock check",
    image: "assets/product-arena-set.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-OP-OP11-BOX",
    copy: "Japanese One Piece sealed box with visible draft price and contact-based purchase confirmation.",
    market: "up"
  },
  {
    id: "jp-onepiece-op10-box",
    title: "One Piece JP OP-10 Booster Box",
    category: "Japanese One Piece",
    badge: "Japanese sealed box",
    price: 64,
    stock: "In stock check",
    image: "assets/product-slabs.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-OP-OP10-BOX",
    copy: "Japanese One Piece sealed booster box for collectors and shop buyers.",
    market: "steady"
  },
  {
    id: "jp-onepiece-eb02-box",
    title: "One Piece JP EB-02 Booster Box",
    category: "Japanese One Piece",
    badge: "Japanese extra booster",
    price: 58,
    stock: "In stock check",
    image: "assets/product-chronicle-pack.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-OP-EB02-BOX",
    copy: "Japanese One Piece extra booster listing. Request quantity and shipping before payment.",
    market: "flat"
  },
  {
    id: "jp-onepiece-starter-deck-set",
    title: "One Piece JP Starter Deck Set",
    category: "Japanese One Piece",
    badge: "Japanese starter deck",
    price: 24,
    stock: "Bundle check",
    image: "assets/product-eclipse-pack.png",
    condition: "Japanese edition | factory sealed",
    code: "JP-OP-ST-SET",
    copy: "Japanese One Piece starter deck bundle draft listing for beginners, sealed buyers, and bundle orders.",
    market: "steady"
  },
  {
    id: "jp-onepiece-case-request",
    title: "One Piece JP Sealed Case Request",
    category: "Japanese One Piece",
    badge: "Japanese case quote",
    price: 720,
    stock: "Quote only",
    image: "assets/product-prism-case.png",
    condition: "Japanese edition | sealed case request",
    code: "JP-OP-CASE",
    copy: "Japanese One Piece sealed case request. Final price, allocation, and shipping are confirmed manually.",
    market: "steady"
  }
];

const categories = ["All Japanese", "Japanese Pokemon", "Japanese One Piece"];
const storageKeys = {
  user: "dpCardsJapaneseUserV2",
  requests: "dpCardsJapaneseRequestsV2",
  watched: "dpCardsJapaneseWatchedV2"
};

let activeCategory = "All Japanese";
let activeProduct = products[0];

const productGrid = document.querySelector("[data-product-grid]");
const filterWrap = document.querySelector("[data-filters]");
const searchInput = document.querySelector("[data-search]");
const marketBody = document.querySelector("[data-market-body]");
const contactProduct = document.querySelector("[data-contact-product]");
const contactForm = document.querySelector("[data-contact-form]");
const formResult = document.querySelector("[data-form-result]");
const loginModal = document.querySelector("[data-login-modal]");
const productModal = document.querySelector("[data-product-modal]");
const loginForm = document.querySelector("[data-login-form]");
const accountPanel = document.querySelector("[data-account-panel]");
const accountLink = document.querySelector("[data-account-link]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2
  }).format(value);
}

function getStored(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUser() {
  return getStored(storageKeys.user, null);
}

function getRequests() {
  return getStored(storageKeys.requests, []);
}

function getWatched() {
  return getStored(storageKeys.watched, ["jp-pokemon-mega-brave-box", "jp-onepiece-op12-box"]);
}

function productFromTitle(title) {
  return products.find((product) => product.title === title);
}

function orderNumber(index) {
  return `DP-${String(index + 1001).padStart(5, "0")}`;
}

function setActiveCategory(category) {
  activeCategory = category;
  renderFilters();
  renderProducts();
}

function matchesProduct(product, query) {
  const haystack = `${product.title} ${product.category} ${product.badge} ${product.code}`.toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

function filteredProducts() {
  const query = searchInput.value || "";
  return products.filter((product) => {
    const categoryOk = activeCategory === "All Japanese" || product.category === activeCategory;
    return categoryOk && matchesProduct(product, query);
  });
}

function renderFilters() {
  filterWrap.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-pill${category === activeCategory ? " is-active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", category === activeCategory ? "true" : "false");
    button.addEventListener("click", () => setActiveCategory(category));
    filterWrap.append(button);
  });
}

function renderProducts() {
  const visible = filteredProducts();
  productGrid.innerHTML = "";

  if (!visible.length) {
    productGrid.innerHTML = '<p class="product-meta">No products match this search yet.</p>';
    return;
  }

  visible.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-top">
          <h3>${product.title}</h3>
          <span class="badge">${product.badge}</span>
        </div>
        <p class="product-meta">${product.category} | ${product.condition} | ${product.code}</p>
        <div class="price-line">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="stock">${product.stock}</span>
        </div>
        <div class="product-actions">
          <button class="card-button" type="button" data-view="${product.id}">Details</button>
          <button class="card-button primary" type="button" data-request="${product.id}">Request</button>
        </div>
      </div>
    `;
    productGrid.append(card);
  });
}

function renderMarket() {
  marketBody.innerHTML = products
    .map((product) => {
      const trendLabel = product.market === "up" ? "Rising" : product.market === "flat" ? "Flat" : "Stable";
      const trendClass = product.market === "up" ? "trend-up" : product.market === "flat" ? "trend-flat" : "";
      return `
        <tr>
          <td>${product.title}</td>
          <td>${product.category}</td>
          <td>${formatPrice(product.price)}</td>
          <td class="${trendClass}">${trendLabel}</td>
          <td>${product.stock}</td>
        </tr>
      `;
    })
    .join("");
}

function renderContactOptions() {
  const options = [
    '<option value="General request">General request</option>',
    ...products.map((product) => `<option value="${product.title}">${product.title} - ${formatPrice(product.price)}</option>`)
  ];
  contactProduct.innerHTML = options.join("");
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
    document.body.classList.add("modal-open");
  }
}

function closeDialog(dialog) {
  if (dialog.open) {
    dialog.close();
  }
  if (!loginModal.open && !productModal.open) {
    document.body.classList.remove("modal-open");
  }
}

function openProduct(productId) {
  activeProduct = products.find((product) => product.id === productId) || products[0];
  document.querySelector("[data-product-kicker]").textContent = activeProduct.category;
  document.querySelector("[data-product-title]").textContent = activeProduct.title;
  document.querySelector("[data-product-image]").src = activeProduct.image;
  document.querySelector("[data-product-image]").alt = activeProduct.title;
  document.querySelector("[data-product-price]").textContent = formatPrice(activeProduct.price);
  document.querySelector("[data-product-copy]").textContent = activeProduct.copy;
  document.querySelector("[data-product-condition]").textContent = activeProduct.condition;
  document.querySelector("[data-product-stock]").textContent = activeProduct.stock;
  document.querySelector("[data-product-code]").textContent = activeProduct.code;
  openDialog(productModal);
}

function chooseProductForContact(productId) {
  const product = products.find((item) => item.id === productId) || activeProduct;
  activeProduct = product;
  contactProduct.value = product.title;
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => contactForm.querySelector("textarea").focus(), 400);
}

function initialsFromEmail(email) {
  return email
    .split("@")[0]
    .split(/[._-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "DP";
}

function renderAccount() {
  const user = getUser();
  const requests = getRequests();
  const watched = getWatched()
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  accountLink.textContent = "Account";

  if (!user) {
    accountPanel.innerHTML = `
      <div class="empty-account">
        <div>
          <p class="eyebrow">No user signed in</p>
          <h3>Login to see request history and watched items.</h3>
        </div>
        <p>Use the demo login or submit an order request to preview the user page. A real account system can be connected through WooCommerce later.</p>
        <button class="primary-button" type="button" data-login-open>Login</button>
      </div>
    `;
    return;
  }

  const requestRows = requests.length
    ? requests
        .slice()
        .reverse()
        .map(
          (request) => `
            <article class="request-item">
              <div>
                <strong>${request.orderId} | ${request.product}</strong>
                <p>${request.createdAt} | Qty ${request.quantity} | ${request.replyTo}</p>
                <p class="request-next">${request.nextStep}</p>
              </div>
              <div class="order-side">
                <span class="price">${request.total}</span>
                <span class="badge">${request.status}</span>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="product-meta">No order requests yet.</p>';

  const watchedRows = watched
    .map(
      (product) => `
        <article class="watch-item">
          <div>
            <strong>${product.title}</strong>
            <p>${product.stock}</p>
          </div>
          <span class="price">${formatPrice(product.price)}</span>
        </article>
      `
    )
    .join("");

  accountPanel.innerHTML = `
    <div class="account-grid">
      <aside class="profile-box">
        <div class="account-avatar">${initialsFromEmail(user.email)}</div>
        <h3>${user.email}</h3>
        <p>Demo buyer profile</p>
        <button class="ghost-button full" type="button" data-logout>Logout</button>
      </aside>
      <div class="account-content">
        <section class="request-box" aria-label="Purchase requests">
          <h3>Order requests</h3>
          <div class="account-summary">
            <span>${requests.length} order requests</span>
            <span>Status: awaiting manual confirmation</span>
          </div>
          ${requestRows}
        </section>
        <section class="watch-box" aria-label="Watched products">
          <h3>Watched products</h3>
          ${watchedRows}
        </section>
      </div>
    </div>
  `;
}

function prepareContactLink(data) {
  const message = [
    "Hi dp.cards,",
    "",
    `Name: ${data.name}`,
    `Reply contact: ${data.replyTo}`,
    `Product: ${data.product}`,
    `Quantity: ${data.quantity}`,
    `Message: ${data.message || "Please confirm stock, shipping, and payment details."}`,
    "",
    "Thanks."
  ].join("\n");
  return `https://wa.me/6581194552?text=${encodeURIComponent(message)}`;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm).entries());
  const requests = getRequests();
  const product = productFromTitle(data.product);
  const quantity = Math.max(1, Number(data.quantity || 1));
  const total = product ? formatPrice(product.price * quantity) : "Quote";
  const createdAt = new Date().toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  if (!getUser()) {
    setStored(storageKeys.user, {
      email: data.replyTo,
      signedInAt: new Date().toISOString()
    });
  }
  requests.push({
    ...data,
    quantity,
    total,
    orderId: orderNumber(requests.length),
    status: "Awaiting quote",
    nextStep: "dp.cards confirms stock, shipping, and payment instructions before payment.",
    createdAt
  });
  setStored(storageKeys.requests, requests);
  renderAccount();

  const contactLink = prepareContactLink(data);
  formResult.textContent = "Order request saved in the user page. ";
  const link = document.createElement("a");
  link.href = contactLink;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Open WhatsApp message";
  link.className = "form-mail-link";
  formResult.append(link);
  document.querySelector("#account").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleLogin(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm).entries());
  setStored(storageKeys.user, {
    email: data.email,
    signedInAt: new Date().toISOString()
  });
  closeDialog(loginModal);
  renderAccount();
  document.querySelector("#account").scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindEvents() {
  searchInput.addEventListener("input", renderProducts);
  contactForm.addEventListener("submit", handleContactSubmit);
  loginForm.addEventListener("submit", handleLogin);

  productGrid.addEventListener("click", (event) => {
    const viewId = event.target.closest("[data-view]")?.dataset.view;
    const requestId = event.target.closest("[data-request]")?.dataset.request;
    if (viewId) openProduct(viewId);
    if (requestId) chooseProductForContact(requestId);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-login-open]")) {
      openDialog(loginModal);
    }
    if (event.target.closest("[data-logout]")) {
      localStorage.removeItem(storageKeys.user);
      renderAccount();
    }
    if (event.target.closest("[data-modal-close]")) {
      closeDialog(loginModal);
    }
    if (event.target.closest("[data-product-close]")) {
      closeDialog(productModal);
    }
  });

  document.querySelector("[data-modal-request]").addEventListener("click", () => {
    closeDialog(productModal);
    chooseProductForContact(activeProduct.id);
  });

  document.querySelectorAll("[data-category-shortcut]").forEach((link) => {
    link.addEventListener("click", () => {
      setActiveCategory(link.dataset.categoryShortcut);
    });
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  accountLink.addEventListener("click", (event) => {
    if (!getUser()) {
      event.preventDefault();
      openDialog(loginModal);
    }
  });

  [loginModal, productModal].forEach((dialog) => {
    dialog.addEventListener("close", () => {
      if (!loginModal.open && !productModal.open) {
        document.body.classList.remove("modal-open");
      }
    });
  });
}

renderFilters();
renderProducts();
renderMarket();
renderContactOptions();
renderAccount();
bindEvents();
