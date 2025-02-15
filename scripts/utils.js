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

// Lista de produtos que vai alterar conforme clique nos botões do filtro
let productsThatCanChange = baseProducts;

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
  for (let index = 0; index < 12; index++) {
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
  // Filtrando pela categoria canecas
  productsThatCanChange = baseProducts.filter(
    (product) => product.category === "mugs"
  );
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Ouvinte para o botão de filtro de Camisetas
tshirtsButton.addEventListener("click", (evt) => {
  // Filtrando pela categoria canecas
  productsThatCanChange = baseProducts.filter(
    (product) => product.category === "t-shirts"
  );
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Ouvinte para o botão de filtro para Todos os Produtos
allProductsButton.addEventListener("click", (evt) => {
  // Os produtos agora não serão filtrados e voltarão a ser os iniciais
  productsThatCanChange = baseProducts;
  const clickedButton = evt.target;

  renderFilteredProducts(productsThatCanChange);
  changeFilterFocus(clickedButton);
});

// Função que será executada toda vez que clicar em um filtro
function renderFilteredProducts(productsThatCanChange) {
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

// Função para mostrar popup quando clica em Organizar por

const classifyButton = document.querySelector(".filter__classify-button");
const classifyPopup = document.querySelector(".filter__classify-popup");

// Função para abrir o Popup
function openPopup() {
  classifyPopup.classList.remove("filter__classify-popup_hidden");
}

// Função para fechar o Popup
function closePopup() {
  classifyPopup.classList.add("filter__classify-popup_hidden");
}

// Ouvinte
classifyButton.addEventListener("click", openPopup);

document.addEventListener("click", (evt) => {
  if (!evt.target.classList.contains("filter__classify-button")) {
    closePopup();
  }
});

document.addEventListener("keydown", (evt) => {
  if (
    evt.key === "Escape" &&
    !classifyPopup.classList.contains("filter__classify-popup_hidden")
  ) {
    closePopup();
    classifyButton.blur();
  }
});
