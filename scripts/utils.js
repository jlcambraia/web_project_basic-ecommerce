// Base de produtos do site
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

// Variáveis
const gridContainer = document.querySelector(".grid__container");
const paginationContainer = document.querySelector(
  ".pagination__button-type-number-container"
);

// Calcula o total de páginas que o site vai ter
const totalPages = Math.ceil(baseProducts.length / 12);

// Com base no total de páginas, cria a paginação (futuramente, trabalhar melhoria para mais de 5 páginas, ocultando algumas)
for (index = 0; index < totalPages; index++) {
  // Copia o template
  const paginationButtonsTemplate = document
    .querySelector("#pagination__buttons")
    .content.querySelector(".pagination__button")
    .cloneNode(true);

  // Adiciona página ao container
  paginationContainer.append(paginationButtonsTemplate);

  // Adiciona o número ao botão
  paginationButtonsTemplate.textContent = index + 1;
}

// Coloca foco na primeira página, que sempre é a que estará selecionada na abertura do site
paginationContainer.firstChild.classList.add("pagination__button_focus");

// Renderiza os 12 produtos iniciais sempre que abrir a página
function renderInitialCards() {
  for (index = 0; index < 12; index++) {
    // Cada produto está dentro de baseProducts, na posição index
    const product = baseProducts[index];

    // Faz cópia da marcação
    const cardTemplate = document
      .querySelector("#grid__card")
      .content.querySelector(".grid__card")
      .cloneNode(true);

    // Seleciona imagem, nome e preço dentro da marcação
    const cardImage = cardTemplate.querySelector(".grid__card-image");
    const cardName = cardTemplate.querySelector(".grid__card-name");
    const cardPrice = cardTemplate.querySelector(".grid__card-price");

    // Define os atributos, conforme produto dentro de baseProducts
    cardImage.setAttribute("src", product.image_src);
    cardName.textContent = product.name;
    cardPrice.textContent = product.price;

    // Inclui o card dentro do container
    gridContainer.append(cardTemplate);
  }
}

// Chama a função para renderizar os cards iniciais na abertura da página
renderInitialCards();

// Ouvinte para renderizar produtos na página conforme página selecionada
paginationContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("pagination__button")) {
    const paginationButton = evt.target;
    renderProductsBasedOnPaginationButton(paginationButton);
    changeButtonFocus(paginationButton);
  }
});

// Função que altera o foco do pagination conforme clique no botão
function changeButtonFocus(paginationButton) {
  // Limpa o foco de todos os botões
  const allButtons = paginationContainer.querySelectorAll(
    ".pagination__button"
  );
  allButtons.forEach((button) => {
    button.classList.remove("pagination__button_focus");
  });
  // Adiciona foco ao botão clicado
  paginationButton.classList.add("pagination__button_focus");
}

// Função para renderizar produtos na página, conforme página clicada
function renderProductsBasedOnPaginationButton(paginationButton) {
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
    index < rangeIndex && index < baseProducts.length;
    index++
  ) {
    // Cada produto está dentro de baseProducts, na posição index
    const product = baseProducts[index];

    // Faz cópia da marcação
    const cardTemplate = document
      .querySelector("#grid__card")
      .content.querySelector(".grid__card")
      .cloneNode(true);

    // Seleciona imagem, nome e preço dentro da marcação
    const cardImage = cardTemplate.querySelector(".grid__card-image");
    const cardName = cardTemplate.querySelector(".grid__card-name");
    const cardPrice = cardTemplate.querySelector(".grid__card-price");

    // Define os atributos, conforme produto dentro de baseProducts
    cardImage.setAttribute("src", product.image_src);
    cardName.textContent = product.name;
    cardPrice.textContent = product.price;

    // Inclui o card dentro do container
    gridContainer.append(cardTemplate);
  }
}
