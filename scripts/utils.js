// Lista de todos os produtos
const baseProducts = [
  {
    name: "Caneca de cerâmica rústica",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca1.jpg",
    price: 40,
    category: "mugs",
  },
  {
    name: "Camiseta not today.",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa1.jpg",
    price: 78,
    category: "t-shirts",
  },
  {
    name: "Caneca Black Ring",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca2.jpg",
    price: 32,
    category: "mugs",
  },
  {
    name: "Camiseta Broken Saints",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa2.jpg",
    price: 58,
    category: "t-shirts",
  },
  {
    name: "Camiseta Outcast",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa3.jpg",
    price: 89,
    category: "t-shirts",
  },
  {
    name: "Caneca The Grounds",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca3.jpg",
    price: 85,
    category: "mugs",
  },
  {
    name: "Camiseta evening",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa4.jpg",
    price: 69,
    category: "t-shirts",
  },
  {
    name: "Caneca preto fosco",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca4.jpg",
    price: 28,
    category: "mugs",
  },
  {
    name: "Caneca Never settle",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca5.jpg",
    price: 43,
    category: "mugs",
  },
  {
    name: "Camiseta DREAMER",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa5.jpg",
    price: 55,
    category: "t-shirts",
  },
  {
    name: "Caneca Decaf! P&Co",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca6.jpg",
    price: 32,
    category: "mugs",
  },
  {
    name: "Camiseta Ramones",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa6.jpg",
    price: 92,
    category: "t-shirts",
  },

  // Até aqui, é a lista original

  {
    name: "Caneca Decaf! P&Co",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca6.jpg",
    price: 32,
    category: "mugs",
  },

  {
    name: "Caneca Never settle",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca5.jpg",
    price: 43,
    category: "mugs",
  },
  {
    name: "Caneca preto fosco",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca4.jpg",
    price: 28,
    category: "mugs",
  },
  {
    name: "Camiseta Ramones",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa6.jpg",
    price: 92,
    category: "t-shirts",
  },
  {
    name: "Camiseta evening",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa4.jpg",
    price: 69,
    category: "t-shirts",
  },
  {
    name: "Caneca The Grounds",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca3.jpg",
    price: 85,
    category: "mugs",
  },
  {
    name: "Camiseta Outcast",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa3.jpg",
    price: 89,
    category: "t-shirts",
  },
  {
    name: "Camiseta DREAMER",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa5.jpg",
    price: 55,
    category: "t-shirts",
  },
  {
    name: "Camiseta Broken Saints",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa2.jpg",
    price: 58,
    category: "t-shirts",
  },
  {
    name: "Caneca Black Ring",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca2.jpg",
    price: 32,
    category: "mugs",
  },
  {
    name: "Camiseta not today.",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa1.jpg",
    price: 78,
    category: "t-shirts",
  },

  {
    name: "Caneca de cerâmica rústica",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca1.jpg",
    price: 40,
    category: "mugs",
  },

  // Até aqui, é a lista de produtos de trás para frente

  {
    name: "Camiseta evening",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa4.jpg",
    price: 69,
    category: "t-shirts",
  },

  {
    name: "Caneca Black Ring",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca2.jpg",
    price: 32,
    category: "mugs",
  },

  {
    name: "Caneca The Grounds",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca3.jpg",
    price: 85,
    category: "mugs",
  },

  {
    name: "Camiseta Broken Saints",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa2.jpg",
    price: 58,
    category: "t-shirts",
  },

  {
    name: "Caneca preto fosco",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca4.jpg",
    price: 28,
    category: "mugs",
  },

  {
    name: "Caneca de cerâmica rústica",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca1.jpg",
    price: 40,
    category: "mugs",
  },
  {
    name: "Caneca Never settle",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca5.jpg",
    price: 43,
    category: "mugs",
  },
  {
    name: "Camiseta Ramones",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa6.jpg",
    price: 92,
    category: "t-shirts",
  },
  {
    name: "Camiseta DREAMER",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa5.jpg",
    price: 55,
    category: "t-shirts",
  },
  {
    name: "Camiseta Outcast",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa3.jpg",
    price: 89,
    category: "t-shirts",
  },

  {
    name: "Caneca Decaf! P&Co",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca6.jpg",
    price: 32,
    category: "mugs",
  },

  {
    name: "Camiseta not today.",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa1.jpg",
    price: 78,
    category: "t-shirts",
  },

  // Até aqui, é a lista de produtos ordenada de forma random

  {
    name: "Caneca The Grounds",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca3.jpg",
    price: 85,
    category: "mugs",
  },

  {
    name: "Camiseta Broken Saints",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/camisa2.jpg",
    price: 58,
    category: "t-shirts",
  },
  {
    name: "Caneca Never settle",
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    image_src: "./images/caneca5.jpg",
    price: 43,
    category: "mugs",
  },

  // Até aqui coloquei 3 produtos totalmente aleatórios, para criar mais uma página com menos produtos
];

// Cria cópia produnda de lista de produtos que vai alterar conforme clique nos botões do filtro
let productsThatCanChange = [...baseProducts];

// Variáveis
const gridContainer = document.querySelector(".grid__container");
const paginationTypeNumberContainer = document.querySelector(
  ".pagination__button-type-number-container"
);
const lefArrow = document.querySelector(".pagination__button_left_arrow");
const rightArrow = document.querySelector(".pagination__button_right_arrow");
const allProductsButton = document.querySelector("#all-products");
const tshirtsButton = document.querySelector("#tshirts");
const mugsButton = document.querySelector("#mugs");
const classifyContainer = document.querySelector(".filter__classify");
const classifyPopup = document.querySelector(".filter__classify-popup");
const classifyDecreasingName = document.querySelector(
  "#classify-name-decreasing"
);
const classifyIncreasingName = document.querySelector(
  "#classify-name-increasing"
);
const classifyDecreasingPrice = document.querySelector(
  "#classify-price-decreasing"
);
const classifyIncreasingPrice = document.querySelector(
  "#classify-price-increasing"
);
const form = document.querySelector(".header__form");
const searchInput = document.querySelector(".header__search");
const gridMessageContainer = document.querySelector(".grid__message-container");
const gridMessage = document.querySelector(".grid__message");
const searchIcon = document.querySelector(".header__search-icon");
const productPageContainer = document.querySelector(".product-info__container");
const mainPage = document.querySelector(".content__main-page");
const productPage = document.querySelector(".content__product-page");
const cartPage = document.querySelector(".content__cart-page");
const returnButtons = document.querySelectorAll(".return__button");
const cartProductContainer = document.querySelector(
  ".cart__products-container"
);
const cartButton = document.querySelector(".header__cart-container");
const totalProductsNumber = document.querySelector(
  ".cart__total-products-info-number"
);
const cartContainerMessage = document.querySelector(
  ".cart__products-container-message"
);
const cartTotalProductsNumber = document.querySelector(
  ".header__cart-quantity"
);
const totalProductsValue = document.querySelector(
  ".cart__total-products-info-price"
);
const totalPurchaseValueOnSummary =
  document.querySelector("#subtotal-products");

const totalPurchaseValueWithFreightCosts =
  document.querySelector("#subtotal-purchase");

const totalFreightCosts = document.querySelector("#subtotal-freight");
const logo = document.querySelector(".header__logo");

// Voltar à página inicial clicando na logo
function returnToMainPage() {
  productPage.classList.add("content__product-page_hidden");
  cartPage.classList.add("content__cart-page_hidden");
  mainPage.classList.remove("content__main-page_hidden");
}

logo.addEventListener("click", returnToMainPage);

// Calcula o total de páginas que o site vai ter
function calculateTotalPages(productsList) {
  return (totalPages = Math.ceil(productsList.length / 12));
}

// Chama a função para calcular o número de páginas inicial
calculateTotalPages(productsThatCanChange);

const pagesTotal = calculateTotalPages(productsThatCanChange);

// Função que, com base no total de páginas, cria a paginação (futuramente, trabalhar melhoria para mais de 5 páginas, ocultando algumas)
function renderPagination(numberOfPages) {
  const rendedPagination = paginationTypeNumberContainer.querySelectorAll(
    ".pagination__button"
  );
  rendedPagination.forEach((pagination) => {
    pagination.remove();
  });

  for (index = 0; index < numberOfPages; index++) {
    // Copia o template
    const paginationButtonsTemplate = document
      .querySelector("#pagination__buttons")
      .content.querySelector(".pagination__button")
      .cloneNode(true);

    // Adiciona página ao container
    paginationTypeNumberContainer.append(paginationButtonsTemplate);

    // Adiciona o número ao botão
    paginationButtonsTemplate.textContent = index + 1;
  }
}

// Chama a função para renderizar a paginação
renderPagination(pagesTotal);

// Coloca foco na primeira página, que sempre é a que estará selecionada na abertura do site
function focusOnFirstChild() {
  paginationTypeNumberContainer.firstElementChild.classList.add(
    "pagination__button_focus"
  );
}

// Chama a função para colocar foco no primeiro elemento da página
focusOnFirstChild();

// Renderiza os 12 produtos iniciais sempre que abrir a página
function renderInitialCards(productsList) {
  // Limita o loop ao tamanho da lista ou a 12, o que for menor
  const limit = Math.min(12, productsList.length);

  for (let index = 0; index < limit; index++) {
    // Cada produto está dentro de productsList, na posição index
    const product = productsList[index];

    // Faz cópia da marcação
    const cardTemplate = document
      .querySelector("#grid__card")
      .content.querySelector(".grid__card")
      .cloneNode(true);

    // Seleciona imagem, nome e preço dentro da marcação
    const cardImage = cardTemplate.querySelector(".grid__card-image");
    const cardName = cardTemplate.querySelector(".grid__card-name");
    const cardPrice = cardTemplate.querySelector(".grid__card-price");

    // Define os atributos, conforme produto dentro de productsList
    cardImage.setAttribute("src", product.image_src);
    cardName.textContent = product.name;
    cardPrice.textContent = product.price;

    // Inclui o card dentro do container
    gridContainer.append(cardTemplate);
  }
}

// Chama a função para renderizar os cards iniciais na abertura da página
renderInitialCards(productsThatCanChange);

// Ouvinte para renderizar produtos na página conforme página selecionada
paginationTypeNumberContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("pagination__button")) {
    const paginationButton = evt.target;
    renderProductsBasedOnNumberButton(paginationButton, productsThatCanChange);
    changeButtonFocus(paginationButton);
  }
});

// Função que altera o foco do pagination conforme clique no botão
function changeButtonFocus(paginationButton) {
  // Limpa o foco de todos os botões
  const allButtons = paginationTypeNumberContainer.querySelectorAll(
    ".pagination__button"
  );
  allButtons.forEach((button) => {
    button.classList.remove("pagination__button_focus");
  });

  // Adiciona foco ao botão clicado
  paginationButton.classList.add("pagination__button_focus");
}

// Função para renderizar produtos na página, conforme página clicada
// O atributo precisa ser do tipo Number
function renderProductsBasedOnNumberButton(paginationButton, productsList) {
  // Adicionar organização da página conforme filtro
  if (currentSortOrder) {
    productsList.sort(currentSortOrder);
  }

  // Seleciona todos os cards do container e remove eles, para nova renderização
  const rendedCards = gridContainer.querySelectorAll(".grid__card");
  rendedCards.forEach((card) => {
    card.remove();
  });

  // Define o índex que vai começar a renderização
  const initialIndex = (paginationButton.textContent - 1) * 12;
  // Define o índex que vai finalizar a renderização
  const rangeIndex = initialIndex + 12;

  for (
    let index = initialIndex;
    index < rangeIndex && index < productsList.length;
    index++
  ) {
    // Cada produto está dentro de productsList, na posição index
    const product = productsList[index];

    // Faz cópia da marcação
    const cardTemplate = document
      .querySelector("#grid__card")
      .content.querySelector(".grid__card")
      .cloneNode(true);

    // Seleciona imagem, nome e preço dentro da marcação
    const cardImage = cardTemplate.querySelector(".grid__card-image");
    const cardName = cardTemplate.querySelector(".grid__card-name");
    const cardPrice = cardTemplate.querySelector(".grid__card-price");

    // Define os atributos, conforme produto dentro de productsList
    cardImage.setAttribute("src", product.image_src);
    cardName.textContent = product.name;
    cardPrice.textContent = product.price;

    // Inclui o card dentro do container
    gridContainer.append(cardTemplate);
  }
}

// Ouvinte para botões arrow left
lefArrow.addEventListener("click", renderProductsBasedOnLeftArrowButton);

// Ouvinte para botões arrow right
rightArrow.addEventListener("click", renderProductsBasedOnRightArrowButton);

// Função para mover os botões do pagination para esquerda conforme clique no botão arrow para esquerda
function renderProductsBasedOnLeftArrowButton() {
  // Seleciona todos os botões
  const allButtons = Array.from(
    paginationTypeNumberContainer.querySelectorAll(".pagination__button")
  );

  // Encontra o index do botão selecionado classe
  const selectedButtonIndex = allButtons.findIndex((button) =>
    button.classList.contains("pagination__button_focus")
  );

  // Seleciona o botão anterior
  let nextButton = null;
  if (selectedButtonIndex === 0) {
    // Se for o primeiro botão, não faz nada
    return;
  } else {
    // Para todos os outros, seleciona corretamente o próximo botão
    nextButton = allButtons[selectedButtonIndex - 1];
  }

  // Chama a função para renderizar os produtos
  renderProductsBasedOnNumberButton(nextButton, productsThatCanChange);
  // Chama a função para alterar o foco do botão
  changeButtonFocus(nextButton);
}

// Função para mover os botões do pagination para direita conforme clique no botão arrow para direita
function renderProductsBasedOnRightArrowButton() {
  // Seleciona todos os botões
  const allButtons = Array.from(
    paginationTypeNumberContainer.querySelectorAll(".pagination__button")
  );

  // Encontra o index do botão selecionado classe
  const selectedButtonIndex = allButtons.findIndex((button) =>
    button.classList.contains("pagination__button_focus")
  );

  // Seleciona o próximo botão
  let nextButton = null;
  if (selectedButtonIndex === allButtons.length - 1) {
    // Se for o primeiro botão, não faz nada
    return;
  } else {
    // Para todos os outros, seleciona corretamente o próximo botão
    nextButton = allButtons[selectedButtonIndex + 1];
  }

  // Chama a função para renderizar os produtos
  renderProductsBasedOnNumberButton(nextButton, productsThatCanChange);
  // Chama a função para alterar o foco do botão
  changeButtonFocus(nextButton);
}

// Ouvinte para o botão de filtro de Canecas
mugsButton.addEventListener("click", (evt) => {
  if (gridMessage.textContent.includes("busca")) {
    // Retira qualquer filtro que existir
    clearFilter();
    // Retira a mensagem de pesquisa
    gridMessageContainer.classList.add("grid__message-container_hidden");
    gridMessage.textContent = "";
  }

  // Filtrando pela categoria canecas, criando cópia produnda deles
  productsThatCanChange = [...baseProducts].filter(
    (product) => product.category === "mugs"
  );
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Ouvinte para o botão de filtro de Camisetas
tshirtsButton.addEventListener("click", (evt) => {
  if (gridMessage.textContent.includes("busca")) {
    // Retira qualquer filtro que existir
    clearFilter();
    // Retira a mensagem de pesquisa
    gridMessageContainer.classList.add("grid__message-container_hidden");
    gridMessage.textContent = "";
  }

  // Filtrando pela categoria canecas, criando cópia profunda deles
  productsThatCanChange = [...baseProducts].filter(
    (product) => product.category === "t-shirts"
  );
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Ouvinte para o botão de filtro para Todos os Produtos
allProductsButton.addEventListener("click", (evt) => {
  if (gridMessage.textContent.includes("busca")) {
    // Retira qualquer filtro que existir
    clearFilter();
    // Retira a mensagem de pesquisa
    gridMessageContainer.classList.add("grid__message-container_hidden");
    gridMessage.textContent = "";
  }

  // Os produtos agora não serão filtrados e voltarão a ser os iniciais, criando cópia profunda deles
  productsThatCanChange = [...baseProducts];
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Função que será executada toda vez que clicar em um filtro
function renderFilteredProducts(productsThatCanChange) {
  // Aplica a ordenação atual (se houver)
  if (currentSortOrder) {
    productsThatCanChange.sort(currentSortOrder);
  }

  // Renderiza os produtos
  renderInitialCards(productsThatCanChange);
}

// Alterar o foco do filtro do produto clicado
function changeFilterFocus(clickedFilter) {
  // Limpa o foco de todos os botões
  const allFilters = document.querySelectorAll(".filter__products");
  allFilters.forEach((filter) => {
    filter.classList.remove("filter__products_focus");
  });

  // Adiciona foco ao botão clicado
  clickedFilter.classList.add("filter__products_focus");
}

// Função para abrir o Popup do Classify
function openPopup() {
  classifyPopup.classList.remove("filter__classify-popup_hidden");
}

// Função para fechar o Popup do Classify
function closePopup() {
  classifyPopup.classList.add("filter__classify-popup_hidden");
}

// Ouvinte para abrir o Popup do Classify
classifyContainer.addEventListener("click", openPopup);

// Ouvinte para fechar o Popup clicando fora dele
document.addEventListener("click", (evt) => {
  if (
    !evt.target.classList.contains("filter__classify-button") &&
    !evt.target.classList.contains("filter__classify-icon") &&
    !evt.target.classList.contains("filter__classify-popup")
  ) {
    closePopup();
  }
});

// Ouvinte para fechar o Popup clicando na tecla em Escape
mainPage.addEventListener("keydown", (evt) => {
  if (
    evt.key === "Escape" &&
    !classifyPopup.classList.contains("filter__classify-popup_hidden")
  ) {
    closePopup();
    const classifyButton = document.querySelector(".filter__classify-button");
    classifyButton.blur();
  }
});

// Cria uma variável para armazenar a ordenação, que não tem até então
let currentSortOrder = null;

// Função que vai ordernar as páginas corretamente
function renderFilteredProducts(productsThatCanChange) {
  if (currentSortOrder) {
    productsThatCanChange.sort(currentSortOrder);
  }

  calculateTotalPages(productsThatCanChange);
  const pagesTotal = calculateTotalPages(productsThatCanChange);
  renderPagination(pagesTotal);
  focusOnFirstChild();

  const rendedCards = gridContainer.querySelectorAll(".grid__card");
  rendedCards.forEach((card) => {
    card.remove();
  });

  renderInitialCards(productsThatCanChange);
}

// Ouvinte no botão que define a ordenação dos produtos em ordem decrescente
classifyDecreasingName.addEventListener("click", () => {
  // Mostra mensagem de organização dos componentes
  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Organizado por: "${classifyDecreasingName.textContent.trim()}"`;

  const selectedFilter = document.querySelector(".filter__products_focus");

  // Define a ordenação atual
  currentSortOrder = (a, b) => b.name.localeCompare(a.name);

  // Aplica a ordenação
  productsThatCanChange.sort(currentSortOrder);

  // Renderiza e mantém o filtro selecionado
  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(selectedFilter);
});

// Ouvinte no botão que define a ordenação dos produtos em ordem crescente
classifyIncreasingName.addEventListener("click", () => {
  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Organizado por: "${classifyIncreasingName.textContent.trim()}"`;
  const selectedFilter = document.querySelector(".filter__products_focus");

  // Define a ordenação atual
  currentSortOrder = (a, b) => a.name.localeCompare(b.name);

  // Aplica a ordenação
  productsThatCanChange.sort(currentSortOrder);

  // Renderiza e mantém o filtro selecionado
  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(selectedFilter);
});

// Ouvinte no botão que define a ordenação dos produtos do mais barato para mais caro
classifyDecreasingPrice.addEventListener("click", () => {
  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Organizado por: "${classifyDecreasingPrice.textContent.trim()}"`;
  const selectedFilter = document.querySelector(".filter__products_focus");

  // Define a ordenação atual
  currentSortOrder = (a, b) => b.price - a.price;

  // Aplica a ordenação
  productsThatCanChange.sort(currentSortOrder);

  // Renderiza e mantém o filtro selecionado
  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(selectedFilter);
});

// Ouvinte no botão que define a ordenação dos produtos do mais barato para mais caro
classifyIncreasingPrice.addEventListener("click", () => {
  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Organizado por: "${classifyIncreasingPrice.textContent.trim()}"`;

  const selectedFilter = document.querySelector(".filter__products_focus");

  // Define a ordenação atual
  currentSortOrder = (a, b) => a.price - b.price;

  // Aplica a ordenação
  productsThatCanChange.sort(currentSortOrder);

  // Renderiza e mantém o filtro selecionado
  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(selectedFilter);
});

// Ouvinte para o input de busca
form.addEventListener("submit", (evt) => {
  // Previne de recarregar a página
  evt.preventDefault();

  // Mostra a Main Page
  productPage.classList.add("content__product-page_hidden");
  cartPage.classList.add("content__cart-page_hidden");
  mainPage.classList.remove("content__main-page_hidden");

  // Obtém o valor do input de busca
  const searchInputValue = searchInput.value.trim().toLowerCase();

  // Limpa o campo de busca
  form.reset();

  // Cria cópia profunda da lista de produtos
  productsThatCanChange = [...baseProducts];

  // Filtra os produtos com base no valor do input
  const filteredProducts = productsThatCanChange.filter((product) =>
    product.name.toLowerCase().includes(searchInputValue)
  );

  if (!searchInputValue) {
    return;
  }

  // Verifica se há produtos filtrados
  if (filteredProducts.length === 0) {
    gridMessageContainer.classList.remove("grid__message-container_hidden");
    gridMessage.textContent = `Não encontramos resultados para: "${searchInputValue}"`;
    const allCards = gridContainer.querySelectorAll(".grid__card");
    allCards.forEach((card) => {
      card.remove();
    });
    return; // Caso não haja produtos, sai sem renderizar produtos
  }

  // Aplica a ordenação atual (se houver)
  if (currentSortOrder) {
    filteredProducts.sort(currentSortOrder);
  }

  // Atualiza a lista de produtos que podem ser alterados
  productsThatCanChange = filteredProducts;

  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Resultados de busca para: "${searchInputValue}"`;

  // Renderiza os produtos filtrados
  renderFilteredProducts(productsThatCanChange);

  // Muda o foco para o botão
  changeFilterFocus(allProductsButton);
});

searchIcon.addEventListener("click", () => {
  // Mostra a Main Page
  productPage.classList.add("content__product-page_hidden");
  cartPage.classList.add("content__cart-page_hidden");
  mainPage.classList.remove("content__main-page_hidden");

  // Obtém o valor do input de busca
  const searchInputValue = searchInput.value.trim().toLowerCase();

  // Limpa o campo de busca
  form.reset();

  // Cria cópia profunda da lista de produtos
  productsThatCanChange = [...baseProducts];

  // Filtra os produtos com base no valor do input
  const filteredProducts = productsThatCanChange.filter((product) =>
    product.name.toLowerCase().includes(searchInputValue)
  );

  // Verifica se há produtos filtrados
  if (filteredProducts.length === 0) {
    gridMessageContainer.classList.remove("grid__message-container_hidden");
    gridMessage.textContent = `Não encontramos resultados para: "${searchInputValue}"`;
    const allCards = gridContainer.querySelectorAll(".grid__card");
    allCards.forEach((card) => {
      card.remove();
    });
    return; // Caso não haja produtos, sai sem renderizar produtos
  }

  // Aplica a ordenação atual (se houver)
  if (currentSortOrder) {
    filteredProducts.sort(currentSortOrder);
  }

  // Atualiza a lista de produtos que podem ser alterados
  productsThatCanChange = filteredProducts;

  gridMessageContainer.classList.remove("grid__message-container_hidden");
  gridMessage.textContent = `Resultados de busca para: "${searchInputValue}"`;

  // Renderiza os produtos filtrados
  renderFilteredProducts(productsThatCanChange);

  // Muda o foco para o botão
  changeFilterFocus(allProductsButton);
});

// Variável para limpar os filtros
const clearFilterButton = document.querySelector(".grid__message-button");

// Função para limpar os filtros
function clearFilter() {
  const focusedFilter = document.querySelector(".filter__products_focus");

  // Verifica se há um filtro selecionado
  if (!focusedFilter) {
    return;
  }

  // Retira a mensagem de pesquisa
  gridMessageContainer.classList.add("grid__message-container_hidden");
  gridMessage.textContent = "";

  // Remove todos os cards
  const allCards = gridContainer.querySelectorAll(".grid__card");
  allCards.forEach((card) => {
    card.remove();
  });

  // Limpa a ordenação atual
  currentSortOrder = null;

  // Define a lista de produtos com base no filtro selecionado, criando cópia profunda deles
  if (focusedFilter.textContent.trim().includes("Camisetas")) {
    productsThatCanChange = [...baseProducts].filter(
      (product) => product.category === "t-shirts"
    );
  } else if (focusedFilter.textContent.trim().includes("Canecas")) {
    productsThatCanChange = [...baseProducts].filter(
      (product) => product.category === "mugs"
    );
  } else if (focusedFilter.textContent.trim().includes("Todos os produtos")) {
    productsThatCanChange = [...baseProducts];
  }

  // Renderiza os produtos e mantém o foco no filtro selecionado
  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(focusedFilter);
}

// Adiciona o evento de clique ao botão de limpar filtro
clearFilterButton.addEventListener("click", clearFilter);

// Renderizar produto clicado na Página de produtos
function renderClickedProductOnProductPage(evt) {
  const allRenderedProducts =
    productPageContainer.querySelectorAll(".product-info");
  allRenderedProducts.forEach((product) => {
    product.remove();
  });

  const clickedProduct = evt.target.closest(".grid__card");
  const clickedProductName =
    clickedProduct.querySelector(".grid__card-name").textContent;

  // Faz cópia da marcação
  const productTemplate = document
    .querySelector("#product-info")
    .content.querySelector(".product-info")
    .cloneNode(true);

  // Seleciona imagem, tag, nome, preço e descrição dentro da marcação
  const productImage = productTemplate.querySelector(".product-info__image");
  const productTag = productTemplate.querySelector(".product-info__tag");
  const productName = productTemplate.querySelector(".product-info__name");
  const productPrice = productTemplate.querySelector(".product-info__price");
  const productDescription = productTemplate.querySelector(
    ".product-info__description"
  );

  // Seleciona o produto correto no baseProducts
  baseProducts.forEach((product) => {
    if (product.name === clickedProductName) {
      // Define os atributos, conforme produto dentro de productsList
      productImage.setAttribute("src", product.image_src);
      productTag.textContent = product.category;
      productName.textContent = product.name;
      productPrice.textContent = product.price;
      productDescription.textContent = product.description;

      // Alterar o nome da Tag do produto para português
      if (productTag.textContent.trim() === "mugs") {
        productTag.textContent = "Canecas";
      } else {
        productTag.textContent = "Camisetas";
      }
    }
  });

  // Inclui o card dentro do container
  productPageContainer.append(productTemplate);
}

// Ouvinte para clicar nos produtos e abrir a Product Page do produto
gridContainer.addEventListener("click", (evt) => {
  // Verifica se o clique foi em um produto (ou em um elemento dentro dele)
  const clickedProduct = evt.target.closest(".grid__card");
  if (clickedProduct) {
    mainPage.classList.add("content__main-page_hidden");
    productPage.classList.remove("content__product-page_hidden");
    renderClickedProductOnProductPage(evt);
    hideProductAdded();
  }
});

// Ouvinte para os botões de voltar das páginas Product Page e Cart Page
returnButtons.forEach((returnButton) => {
  returnButton.addEventListener("click", () => {
    // Mostra a Main Page
    productPage.classList.add("content__product-page_hidden");
    cartPage.classList.add("content__cart-page_hidden");
    mainPage.classList.remove("content__main-page_hidden");
  });
});

// Ouvinte para abrir página do carrinho clicando no botão do carrinho
cartButton.addEventListener("click", () => {
  mainPage.classList.add("content__main-page_hidden");
  productPage.classList.add("content__product-page_hidden");
  cartPage.classList.remove("content__cart-page_hidden");
});

// Adicionar ao carrinho
function addProductToCart() {
  // Seleciona nome do produto da página
  const productName = productPageContainer
    .querySelector(".product-info__name")
    .textContent.trim();

  // Verifica se o produto já está no carrinho
  const alreadyInCart = Array.from(
    cartProductContainer.querySelectorAll(".cart__product-container")
  ).some(
    (product) =>
      product.querySelector(".cart__product-name").textContent.trim() ===
      productName
  );

  if (alreadyInCart) {
    return;
  }

  // Faz cópia da marcação
  const cartProductTemplate = document
    .querySelector("#cart__product-container")
    .content.querySelector(".cart__product-container")
    .cloneNode(true);

  // Preenche os dados do produto
  cartProductTemplate
    .querySelector(".cart__product-image")
    .setAttribute(
      "src",
      productPageContainer
        .querySelector(".product-info__image")
        .getAttribute("src")
    );
  cartProductTemplate.querySelector(".cart__product-name").textContent =
    productName;
  cartProductTemplate.querySelector("#cart__unit-price").textContent =
    productPageContainer.querySelector(".product-info__price").textContent;
  cartProductTemplate.querySelector(".cart__product-description").textContent =
    productPageContainer.querySelector(
      ".product-info__description"
    ).textContent;

  // Adiciona ao carrinho
  cartProductContainer.prepend(cartProductTemplate);

  showAddedProductMessage();
  deleteButtonOpenPopup();
}

// Mostrar mensagem de produto adicionado ao carrinho
function showAddedProductMessage() {
  const addedProductContainer = document.querySelector(
    ".product-info__add-to-cart-message-container"
  );
  addedProductContainer.classList.remove(
    "product-info__add-to-cart-message-container_hidden"
  );
}

// Esconde mensagem de produto adicionado ao carrinho
function hideProductAdded() {
  const addedProductContainer = document.querySelector(
    ".product-info__add-to-cart-message-container"
  );
  addedProductContainer.classList.add(
    "product-info__add-to-cart-message-container_hidden"
  );
}

// Ouvinte para abrir o popup de quantidade
cartProductContainer.addEventListener("click", (evt) => {
  if (evt.target.closest(".cart__select-quantity")) {
    const allQuantityPopups = document.querySelectorAll(
      ".cart__select-quantity-popup"
    );
    allQuantityPopups.forEach((popup) => {
      popup.classList.add("cart__select-quantity-popup_hidden");
    });

    const cartQuantityButton = evt.target;
    const cartQuantityPopup = cartQuantityButton
      .closest(".cart__select-quantity")
      .querySelector(".cart__select-quantity-popup");
    cartQuantityPopup.classList.remove("cart__select-quantity-popup_hidden");
  }
  updateQuantityBasedOnPopup();
});

// Ouvinte para fechar popup de quantidade clicando fora dele
cartPage.addEventListener("click", (evt) => {
  if (!evt.target.closest(".cart__select-quantity")) {
    const cartQuantityPopups = document.querySelectorAll(
      ".cart__select-quantity-popup"
    );

    cartQuantityPopups.forEach((popup) => {
      popup.classList.add("cart__select-quantity-popup_hidden");
    });
  }
});

// Ouvinte para fechar popup de quantidade clicando Escape
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const cartQuantityPopups = document.querySelectorAll(
      ".cart__select-quantity-popup"
    );

    cartQuantityPopups.forEach((popup) => {
      popup.classList.add("cart__select-quantity-popup_hidden");
    });

    const quantityPopupButtons = cartPage.querySelectorAll(
      ".cart__select-quantity-button"
    );
    quantityPopupButtons.forEach((button) => {
      button.blur();
    });
  }
});

// Alterar quantidade de produtos na página do carrinho
function alreadyHaveProductOnCart() {
  const productName = productPageContainer
    .querySelector(".product-info__name")
    .textContent.trim();

  // Encontra o produto correto no carrinho
  const productOnCart = Array.from(
    cartProductContainer.querySelectorAll(".cart__product-container")
  ).find(
    (product) =>
      product.querySelector(".cart__product-name").textContent.trim() ===
      productName
  );

  // Se não encontrar, não faz nada
  if (!productOnCart) return;

  const productQuantity = productOnCart.querySelector("#quantity-number");

  // Verifica limite máximo (defini aleatoriamente 5 produtos)
  if (Number(productQuantity.textContent) < 5) {
    productQuantity.textContent = Number(productQuantity.textContent) + 1;
  } else {
    const addedProductMessage = document.querySelector(
      ".product-info__add-to-cart-message"
    );
    addedProductMessage.textContent =
      "Você só pode adicionar até 5 deste produto no carrinho";
    const addedProductIcon = document.querySelector(
      ".product-info__add-to-cart-icon"
    );
    addedProductIcon.setAttribute("src", "./images/product-info-not-ok.png");
  }
}

// Verifica se tem algum produto no carrinho
function checkIfThereIsAnyProductOnContainer() {
  const productsOnContainer = document.querySelectorAll(
    ".cart__product-container"
  );
  if (productsOnContainer.length > 0) {
    cartContainerMessage.classList.add(
      "cart__products-container-message_hidden"
    );
  } else {
    cartContainerMessage.classList.remove(
      "cart__products-container-message_hidden"
    );
  }
}

// Checar total de produtos no carrinho
function checkNumberOfProductsOnCart() {
  // Seleciona todos os elementos que contêm a quantidade de produtos
  const quantityElements = document.querySelectorAll("#quantity-number");

  // Inicializa a variável para armazenar o total
  let totalQuantity = 0;

  // Itera sobre os elementos e soma as quantidades
  quantityElements.forEach((element) => {
    totalQuantity += Number(element.textContent);
  });

  totalProductsNumber.textContent = totalQuantity;
}

// Alterar quantidade de produtos no ícone do carrinho
function changeNumberOfProductsOnCartHeaderIcon() {
  cartTotalProductsNumber.textContent = totalProductsNumber.textContent;
}

// Alterar valor total de cada produto no carrinho
function changeTotalValueOfProductOnCart() {
  const cartTotalValue = document.querySelectorAll("#cart__total-price");
  let totalCartValue = 0; // Variável para armazenar o valor total do carrinho

  cartTotalValue.forEach((element) => {
    const unitPriceContainer = element.closest(".cart__prices-container");
    const quantityContainer = element.closest(
      ".cart__select-quantity-and-total-container"
    );

    if (unitPriceContainer && quantityContainer) {
      const unitPrice = unitPriceContainer.querySelector("#cart__unit-price");
      const quantity = quantityContainer.querySelector("#quantity-number");

      if (unitPrice && quantity) {
        const productTotalValue =
          Number(unitPrice.textContent) * Number(quantity.textContent);

        element.textContent = productTotalValue; // Atualiza o valor individual
        totalCartValue += productTotalValue; // Acumula o valor total do carrinho
      }
    }
  });
}

// Alterar valor total da compra na página
function changeTotalOfPurchaseOnCartPage() {
  // Seleciona todos os elementos que contêm a quantidade de produtos
  const totalProductPurchaseValue =
    document.querySelectorAll("#cart__total-price");

  // Inicializa a variável para armazenar o total
  let totalValue = 0;

  // Itera sobre os elementos e soma as quantidades
  totalProductPurchaseValue.forEach((element) => {
    totalValue += Number(element.textContent);
  });

  totalProductsValue.textContent = totalValue;
}

// Alterar valor total da compra no resumo do pedido
function updatePurchaseValueOnSummary() {
  totalPurchaseValueOnSummary.textContent = totalProductsValue.textContent;
}

// Alterar valor total da compra, incluindo frete, no resumo do pedido
function updateTotalWithFreightCosts() {
  totalPurchaseValueWithFreightCosts.textContent =
    Number(totalPurchaseValueOnSummary.textContent) +
    Number(totalFreightCosts.textContent);
}

// Chama a função de atualizar o total do carrinho na abertura do site
updateTotalWithFreightCosts();

// Altera a quantidade de produtos selecionados conforme número escolhido no popup
function updateQuantityBasedOnPopup() {
  const popupNumberButtons = document.querySelectorAll(
    ".cart__select-quantity-popup-button"
  );

  popupNumberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Coloquei pois não estava deixando o popup fechar corretamente
      event.stopPropagation();

      // Encontra o container de quantidade
      const quantityContainer = button.closest(".cart__select-quantity");

      // Atualiza a quantidade no botão principal
      const quantityButtonToChange =
        quantityContainer.querySelector("#quantity-number");
      if (quantityButtonToChange) {
        quantityButtonToChange.textContent = button.textContent;
      }

      // Fecha o popup
      const popup = quantityContainer.querySelector(
        ".cart__select-quantity-popup"
      );

      popup.classList.add("cart__select-quantity-popup_hidden");

      // Chama todas as funções para atualizar os dados do carrinho
      checkNumberOfProductsOnCart();
      changeNumberOfProductsOnCartHeaderIcon();
      changeTotalValueOfProductOnCart();
      changeTotalOfPurchaseOnCartPage();
      updatePurchaseValueOnSummary();
      updateTotalWithFreightCosts();
    });
  });
}

const deletePopup = document.querySelector(".content__popup");
const popupCloseButton = document.querySelector(".content__popup-close-button");
const popupSubmitButton = document.querySelector(".content__popup-button");

// Função para abrir o popup de excluir produto
function openDeletePopup() {
  deletePopup.classList.remove("content__popup_hidden");
}

// Função para fechar o popuup de excluir produto
function closeDeletePopup() {
  deletePopup.classList.add("content__popup_hidden");
}

// Função para abrir popup de confirmação de exclusão de produto clicando no botão de excluir produto
function deleteButtonOpenPopup() {
  // Seleciona todos os botões que existem no container do carrinho
  const allDeleteButtons = document.querySelectorAll(
    ".cart__product-remove-button"
  );

  // Para cada botão:
  allDeleteButtons.forEach((button) => {
    // 1. Passa ouvinte para abrir o popup quando clicado
    button.addEventListener("click", () => {
      openDeletePopup();

      // 2. Passa o ouvinte do que fazer se clicar no botão de confirmação de exclusão do card
      popupSubmitButton.addEventListener("click", () => {
        // 3. Seleciona o card que teve o botão de exclusão clicado
        const card = button.closest(".cart__product-container");
        // 4. Remove o card
        card.remove();
        // 5. Atualiza o carrinho
        checkNumberOfProductsOnCart();
        changeNumberOfProductsOnCartHeaderIcon();
        changeTotalValueOfProductOnCart();
        changeTotalOfPurchaseOnCartPage();
        updatePurchaseValueOnSummary();
        updateTotalWithFreightCosts();
        checkIfThereIsAnyProductOnContainer();
        closeDeletePopup();
      });
    });
  });
}

// Ouvinte para fechar popup de confirmação de exclusão de produto clicando no botão de fechar do popup
popupCloseButton.addEventListener("click", closeDeletePopup);

// Ouvinte do botão de adicionar ao carrinho
productPageContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("product-info__add-to-cart-button")) {
    alreadyHaveProductOnCart();
    addProductToCart();
    checkIfThereIsAnyProductOnContainer();
    checkNumberOfProductsOnCart();
    changeNumberOfProductsOnCartHeaderIcon();
    changeTotalValueOfProductOnCart();
    changeTotalOfPurchaseOnCartPage();
    updatePurchaseValueOnSummary();
    updateTotalWithFreightCosts();
  }
});
