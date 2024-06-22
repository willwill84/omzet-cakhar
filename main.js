const menuDiv = document.querySelector(".js-menu-holder");

const menuElement = document.querySelector(".menu");

menuDiv.addEventListener("click", (e) => {
  handleMenu(e);
});

function handleMenu(e) {
  if (e.target.tagName === "BUTTON") {
    if (e.target.classList.contains(e.target.classList[0])) {
      const classMenu = e.target.classList[0];
      itemsMenu = classMenu.split("-");
      item = "." + itemsMenu[1];
      console.log(item);

      const element = document.querySelector(item);

      if (element.classList.contains("d-none")) {
        menuElement.classList.add("d-none");
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
}

const backBtnList = document.querySelectorAll(".js-btn-back");

backBtnList.forEach((backBtn) => {
  backBtn.addEventListener("click", (e) => {
    backToMenu(e);
  });
});

function backToMenu(e) {
  const btn = e.target;
  const section = btn.parentNode;
  section.classList.add("d-none");
  menuElement.classList.remove("d-none");
}

// result

let semuaResult = {
  omzet: 0,
  plusmin: 0,
  total: 0,
  gofood: 0,
  shopeefood: 0,
  gopay: 0,
  shopeepay: 0,
  pettycash: 0,
  transfer: 0,
  cash: 0,
};

//bon

divUiBon = document.querySelector(".js-bon-ui");
divUiBon.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputBon(e);
  }
});
divUiBon.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputBon(e);
    }
  }
});

let semuaBon = JSON.parse(localStorage.getItem("cakhar-semuaBon")) || [];

function handleInputBon(e) {
  const divUi = e.currentTarget;
  const input = divUi.querySelector("input");

  if (!input.value) {
    return;
  }

  semuaBon.push(input.value + "000");

  localStorage.setItem("cakhar-semuaBon", JSON.stringify(semuaBon));

  input.value = "";

  showBonList();

  showResultList();
}

function showBonList() {
  const divListBon = document.querySelector(".js-list-bon-holder");
  const ul = divListBon.querySelector("ul");
  ul.innerHTML = "";
  document.querySelector(".js-sum-bon").innerHTML = "";
  divListBon.querySelector(".js-clear-bon").classList.add("d-none");

  for (let i = 0; i < semuaBon.length; i++) {
    const li = document.createElement("li");
    li.classList = "list-group-item me-2";
    li.dataset.index = i;
    li.innerHTML = `
      <span class="me-2">${semuaBon[i]}</span>
      `;
    createBtn(li, "bon");
    ul.appendChild(li);
  }

  if (semuaBon.length !== 0) {
    divListBon.querySelector(".js-clear-bon").classList.remove("d-none");
    document.querySelector(".js-sum-bon").innerHTML = `Total Bon = ${sum(
      "bon"
    ).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })}`;
  }
  console.log(semuaBon);
}

const clearBon = document.querySelector(".js-clear-bon");
clearBon.addEventListener("click", () => {
  clearAllBon();
  showBonList();
  showResultList();
});

function clearAllBon() {
  semuaBon = [];
  localStorage.setItem("cakhar-semuaBon", JSON.stringify(semuaBon));
  console.log("clicked");
}

// gofood, shopeefood, gopay, shopeepay

divUiGofood = document.querySelector(".gofood");
divUiGofood.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputElement(e, "gofood");
    showResultList();
  }
});
divUiGofood.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputElement(e, "gofood");
      showResultList();
    }
  }
});

divUiShopeefood = document.querySelector(".shopeefood");
divUiShopeefood.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputElement(e, "shopeefood");
    showResultList();
  }
});
divUiShopeefood.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputElement(e, "shopeefood");
      showResultList();
    }
  }
});

divUiGopay = document.querySelector(".gopay");
divUiGopay.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputElement(e, "gopay");
    showResultList();
  }
});
divUiGopay.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputElement(e, "gopay");
      showResultList();
    }
  }
});

divUiShopeepay = document.querySelector(".shopeepay");
divUiShopeepay.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputElement(e, "shopeepay");
    showResultList();
  }
});
divUiShopeepay.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputElement(e, "shopeepay");
      showResultList();
    }
  }
});

//handle input gofood, shopeefood, gopay, shopeepay
function handleInputElement(e, tag) {
  divUi = e.currentTarget;
  input = divUi.querySelectorAll("input");
  if (input.length === 1) {
    if (tag === "shopeefood") {
      if (!input[0].value) {
        return;
      }
      const potongan = 15 / 100;
      let hitung = input[0].value - input[0].value * potongan;

      document.querySelector(
        ".js-hitung-shopeefood"
      ).innerHTML = `Total Shopeefood = ${hitung.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;
      semuaResult.shopeefood = Number(hitung);
      console.log(semuaResult);
    }
    if (tag === "gopay") {
      if (!input[0].value) {
        return;
      }
      const potongan = 0.7 / 100;
      let hitung = input[0].value - input[0].value * potongan;

      document.querySelector(
        ".js-hitung-gopay"
      ).innerHTML = `Total Gopay = ${hitung.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;

      semuaResult.gopay = Number(hitung);
      console.log(semuaResult);
    }
    if (tag === "shopeepay") {
      if (!input[0].value) {
        return;
      }
      const potongan = 0;
      let hitung = input[0].value - input[0].value * potongan;

      document.querySelector(
        ".js-hitung-shopeepay"
      ).innerHTML = `Total Shopeepay = ${hitung.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;

      semuaResult.shopeepay = Number(hitung);
      console.log(semuaResult);
    }
  } else if (input.length === 2) {
    if (tag === "gofood") {
      if (!input[0].value || !input[1].value) {
        return;
      }

      const potongan = 12 / 100;
      const biaya_kemas = 5000; //per transaksi

      let total_potongan =
        input[0].value * potongan + input[1].value * biaya_kemas;
      let hitung = input[0].value - total_potongan;

      document.querySelector(
        ".js-hitung-gofood"
      ).innerHTML = `Total Gofood = ${hitung.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;

      semuaResult.gofood = Number(hitung);
      console.log(semuaResult);
    }
  }
}

// petty cash
const divUiPettycash = document.querySelector(".js-pettycash-ui");

divUiPettycash.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputPettycash();
  }
});

divUiPettycash.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputPettycash();
    }
  }
});

const semuaPC = JSON.parse(localStorage.getItem("cakhar-semuaPC")) || [];

function handleInputPettycash() {
  const inputList = divUiPettycash.querySelectorAll("input");

  if (inputList[0].value && inputList[1].value) {
    const obj = {
      nama: inputList[0].value,
      harga: inputList[1].value,
    };
    semuaPC.push(obj);
    console.log(semuaPC);

    localStorage.setItem("cakhar-semuaPC", JSON.stringify(semuaPC));

    inputList[0].value = "";
    inputList[1].value = "";

    inputList[0].focus();

    showPettycashList();
    showResultList();
  }
}

function showPettycashList() {
  const divListPettycash = document.querySelector(".js-list-pettycash-holder");
  const ul = divListPettycash.querySelector(".js-list-pettycash");
  ul.innerHTML = "";
  document.querySelector(".js-sum-pettycash").innerHTML = "";
  for (let i = 0; i < semuaPC.length; i++) {
    const li = document.createElement("li");
    li.classList = "d-flex justify-content-between list-group-item";
    li.dataset.index = i;
    li.innerHTML = `
      <span class="me-4">${semuaPC[i].nama}</span>
      <span class="me-4">${semuaPC[i].harga}</span>
      `;
    createBtn(li, "pc");
    ul.appendChild(li);
  }
  if (semuaPC.length !== 0) {
    document.querySelector(
      ".js-sum-pettycash"
    ).innerHTML = `Total Pettycash = ${sum("pettycash").toLocaleString(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
      }
    )}`;
  }
  semuaResult.pettycash = Number(sum("pettycash"));
  console.log(semuaResult);
}

// transfer

const divUiTransfer = document.querySelector(".js-transfer-ui");

divUiTransfer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    handleInputTransfer();
  }
});

divUiTransfer.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.which === 13) {
      handleInputTransfer();
    }
  }
});

const semuaTF = JSON.parse(localStorage.getItem("cakhar-semuaTF")) || [];

function handleInputTransfer() {
  const inputList = divUiTransfer.querySelectorAll("input");

  if (inputList[0].value && inputList[1].value) {
    const obj = {
      nama: inputList[0].value,
      jumlah: inputList[1].value,
    };
    semuaTF.push(obj);

    localStorage.setItem("cakhar-semuaTF", JSON.stringify(semuaTF));

    inputList[0].value = "";
    inputList[1].value = "";

    inputList[0].focus();

    showTransferList();
  }
}

function showTransferList() {
  const divListTransfer = document.querySelector(".js-list-transfer-holder");
  const ul = divListTransfer.querySelector(".js-list-transfer");
  ul.innerHTML = "";
  document.querySelector(".js-sum-transfer").innerHTML = "";
  for (let i = 0; i < semuaTF.length; i++) {
    const li = document.createElement("li");
    li.classList = "d-flex justify-content-between list-group-item";
    li.dataset.index = i;
    li.innerHTML = `
      <span class="me-4">${semuaTF[i].nama}</span>
      <span class="me-4">${semuaTF[i].jumlah}</span>
      `;
    createBtn(li, "tf");
    ul.appendChild(li);
  }
  if (semuaTF.length !== 0) {
    document.querySelector(
      ".js-sum-transfer"
    ).innerHTML = `Total transfer = ${sum("transfer").toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })}`;
  }
  semuaResult.transfer = Number(sum("transfer"));
  showResultList();
}

// create button untuk item tranfer list, bon list dan item pettycash list
function createBtn(li, classOpt) {
  const btn = document.createElement("button");
  if (classOpt === "tf") {
    btn.classList = "btn btn-sm btn-danger transfer js-remove";
  }
  if (classOpt === "pc") {
    btn.classList = "btn btn-sm btn-danger pettycash js-remove";
  }
  if (classOpt === "bon") {
    btn.classList = "btn btn-sm btn-danger bon js-remove";
  }
  btn.innerHTML = `<i class="bi bi-trash3"></i>`;
  btn.addEventListener("click", (e) => {
    removeItem(e);
  });

  li.appendChild(btn);
  return li;
}

// hapus item untuk tranfer list bon, item dan pettycash list
function removeItem(e) {
  const btn = e.currentTarget;
  const li = btn.parentNode;
  const index = li.dataset.index;
  const ul = li.parentNode;

  ul.removeChild(li);
  if (btn.classList.contains("transfer")) {
    semuaTF.splice(index, 1);
    localStorage.setItem("cakhar-semuaTF", JSON.stringify(semuaTF));
    showTransferList();
    showResultList();
  } else if (btn.classList.contains("pettycash")) {
    semuaPC.splice(index, 1);
    localStorage.setItem("cakhar-semuaPC", JSON.stringify(semuaPC));
    showPettycashList();
    showResultList();
  } else if (btn.classList.contains("bon")) {
    semuaBon.splice(index, 1);
    localStorage.setItem("cakhar-semuaBon", JSON.stringify(semuaBon));
    showBonList();
    showResultList();
  }
}

// hitung sum untuk total list transfer, list bon dan list pettycash
function sum(tag) {
  let sum = 0;
  if (tag === "transfer") {
    semuaTF.forEach((tf) => {
      sum += Number(tf.jumlah);
    });
  } else if (tag === "pettycash") {
    semuaPC.forEach((pc) => {
      sum += Number(pc.harga);
    });
  } else if (tag === "bon") {
    semuaBon.forEach((bon) => {
      sum += Number(bon);
    });
  }
  return Number(sum);
}

//cash

const divListPecahan = document.querySelector(".js-pecahan-holder");

divListPecahan.addEventListener("click", (e) => {
  handleMinPlus(e);
});

divListPecahan.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    input = e.target;
    updateCash(input);
  }
});

//objek semua pecahan dan jumlahnya
let semuaPecahan =
  JSON.parse(localStorage.getItem("cakhar-semuaPecahan")) || {};

//menampilkan input value dari local storage saat load awal
function showInputValue() {
  divListPecahan.querySelectorAll("input").forEach((input) => {
    const key = input.getAttribute("name");
    input.value = semuaPecahan[key];
    const mainInput = document.querySelector(".cash-main-input");
    mainInput.value = sumCash();
  });
}

//update input setiap event listener triggered
function updateCash(inputEl) {
  const input = inputEl;
  const nilai = input.getAttribute("name");
  const jumlah = input.value;
  semuaPecahan[nilai] = jumlah;
  localStorage.setItem("cakhar-semuaPecahan", JSON.stringify(semuaPecahan));
  const mainInput = document.querySelector(".cash-main-input");
  mainInput.value = sumCash();
  semuaResult.cash = Number(sumCash());
  showResultList();
  console.log(semuaResult);
}

//hitung total cash dari semua pecahan
function sumCash() {
  let sum = 0;
  Object.keys(semuaPecahan).forEach((key) => {
    let number = key * semuaPecahan[key];
    sum += number;
  });
  return sum;
}

// tombol  plus minus di setiap pecahan
function handleMinPlus(e) {
  if (e.target.tagName === "I" || e.target.tagName === "SPAN") {
    const btn = e.target;
    const span = btn.parentNode;
    const div = span.parentNode;
    const input = div.querySelector("input");
    if (
      e.target.classList.contains("bi-dash") ||
      e.target.classList.contains("js-min-btn")
    ) {
      let i = Number(input.value);
      i--;
      if (i < 0) {
        i = 0;
      }
      input.value = i;
    } else if (
      e.target.classList.contains("bi-plus") ||
      e.target.classList.contains("js-plus-btn")
    ) {
      let i = Number(input.value);
      i++;
      input.value = i;
    } else if (e.target.classList.contains("js-amount")) {
      e.target.parentNode.querySelector("input").value = "";
      input.focus();
    }
    updateCash(input);
  }
}

// hapus semua input
const clearBtn = document.querySelector(".js-clear-cash");

clearBtn.addEventListener("click", () => {
  semuaPecahan = {};
  localStorage.removeItem("cakhar-semuaPecahan");
  divListPecahan.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  const mainInput = document.querySelector(".cash-main-input");
  mainInput.value = "";

  semuaResult.cash = 0;
  showResultList();
});

const divResult = document.querySelector(".js-result-holder");

function showResultList() {
  console.log(semuaResult);
  hitungPlusMin();
  hitungTotal();
  hitungOmzet();
  let divElement = "";
  Object.keys(semuaResult).forEach((key) => {
    let card = `<div class="card result-${key}" style="width: 9rem; height:6rem;">
        <div class="card-body">
          <h5 class="card-title">${key}</h5>
          <p class="card-text">${semuaResult[key]}</p>
        </div>
      </div>`;
    divElement += card;
  });
  divResult.innerHTML = divElement;
}

function handleMenuCard() {
  divResult.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("card-title") ||
      e.target.classList.contains("card-text")
    ) {
      const clicked = e.target;
      const body = clicked.parentNode;
      const parent = body.parentNode;
      const classMenu = parent.classList[1];
      itemsMenu = classMenu.split("-");
      item = "." + itemsMenu[1];

      openMenuElement(item);
    } else if (e.target.classList.contains("card-body")) {
      const body = e.target;
      const parent = body.parentNode;
      const classMenu = parent.classList[1];
      itemsMenu = classMenu.split("-");
      item = "." + itemsMenu[1];

      openMenuElement(item);
    }
  });
}

function openMenuElement(item) {
  if (item !== ".omzet" && item !== ".plusmin" && item !== ".total") {
    console.log(item);
    const element = document.querySelector(item);

    if (element.classList.contains("d-none")) {
      menuElement.classList.add("d-none");
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  }
}

function hitungTotal() {
  semuaResult.total =
    Number(semuaResult.cash) +
    Number(semuaResult.pettycash) +
    Number(semuaResult.transfer) +
    Number(semuaResult.gofood) +
    Number(semuaResult.gopay) +
    Number(semuaResult.shopeefood) +
    Number(semuaResult.shopeepay);

  console.log(semuaResult);
}

function hitungPlusMin() {
  semuaResult.plusmin =
    Number(semuaResult.cash) +
    Number(semuaResult.pettycash) -
    Number(sum("bon"));
}

function hitungOmzet() {
  semuaResult.omzet = Number(semuaResult.total) - Number(semuaResult.plusmin);
}

// load window function
document.addEventListener(
  "DOMContentLoaded",
  () => {
    semuaResult.cash = Number(sumCash());
    showResultList();
    handleMenuCard();
    showBonList();
    showPettycashList();
    showTransferList();
    showInputValue();
  },
  false
);
