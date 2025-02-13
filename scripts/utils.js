const baseProducts = [
  {
    name: "Caneca de cerâmica rústica",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca1.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta not today.",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa1.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca Black Ring",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca2.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta Broken Saints",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa2.jpg",
    category: "t-shirts",
  },
  {
    name: "Camiseta Outcast",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa3.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca The Grounds",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca3.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta evening",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa4.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca preto fosco",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca4.jpg",
    category: "mugs",
  },
  {
    name: "Caneca Never settle",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca5.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta DREAMER",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa5.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca Decaf! P&Co",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca6.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta Ramones",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa6.jpg",
    category: "t-shirts",
  },

  // Até aqui, é a lista original

  {
    name: "Camiseta Ramones",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa6.jpg",
    category: "t-shirts",
  },

  {
    name: "Caneca Decaf! P&Co",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca6.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta DREAMER",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa5.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca Never settle",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca5.jpg",
    category: "mugs",
  },
  {
    name: "Caneca preto fosco",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca4.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta evening",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa4.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca The Grounds",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca3.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta Outcast",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa3.jpg",
    category: "t-shirts",
  },
  {
    name: "Camiseta Broken Saints",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa2.jpg",
    category: "t-shirts",
  },
  {
    name: "Caneca Black Ring",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca2.jpg",
    category: "mugs",
  },
  {
    name: "Camiseta not today.",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa1.jpg",
    category: "t-shirts",
  },

  {
    name: "Caneca de cerâmica rústica",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca1.jpg",
    category: "mugs",
  },

  // Até aqui, é a lista de produtos de trás para frente

  {
    name: "Camiseta evening",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa4.jpg",
    category: "t-shirts",
  },

  {
    name: "Caneca Never settle",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca5.jpg",
    category: "mugs",
  },

  {
    name: "Caneca Black Ring",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca2.jpg",
    category: "mugs",
  },

  {
    name: "Caneca The Grounds",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca3.jpg",
    category: "mugs",
  },

  {
    name: "Camiseta Broken Saints",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa2.jpg",
    category: "t-shirts",
  },

  {
    name: "Camiseta DREAMER",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa5.jpg",
    category: "t-shirts",
  },

  {
    name: "Caneca preto fosco",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca4.jpg",
    category: "mugs",
  },

  {
    name: "Caneca de cerâmica rústica",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca1.jpg",
    category: "mugs",
  },

  {
    name: "Camiseta Ramones",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa6.jpg",
    category: "t-shirts",
  },

  {
    name: "Camiseta Outcast",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa3.jpg",
    category: "t-shirts",
  },

  {
    name: "Caneca Decaf! P&Co",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca6.jpg",
    category: "mugs",
  },

  {
    name: "Camiseta not today.",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa1.jpg",
    category: "t-shirts",
  },

  // Até aqui, é a lista de produtos ordenada de forma random

  {
    name: "Caneca The Grounds",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca3.jpg",
    category: "mugs",
  },

  {
    name: "Caneca Never settle",
    description: faker.lorem.paragraph(),
    image_src: "./image/caneca5.jpg",
    category: "mugs",
  },

  {
    name: "Camiseta Broken Saints",
    description: faker.lorem.paragraph(),
    image_src: "./image/camisa2.jpg",
    category: "t-shirts",
  },

  // Até aqui coloquei 3 produtos totalmente aleatórios, para criar mais uma página com menos produtos
];
