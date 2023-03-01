const products = [
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      name: "JBL FLIP 4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
    {
      name: "Adidas T-Shirt",
      imageUrl:
        "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
      description:
        "MEN’S ELITE O-SHIRT is made for those who spend a lot of time training around forests. This orienteering shirt has a perfect ergonomic shape and it’s specially designed for orienteers",
      price: 220,
      countInStock: 24,
    },
    {
      name: "Swing Dress",
      imageUrl:
        "https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/761x1000.jpg?1505296014",
      description:
        "Our stunning new Liana is a dream of a dress! Created from rich luxury stretch cotton fabric with amazing stretch. Cute off the shoulder style for a seriously sassy look",
      price: 220,
      countInStock: 24,
    },
    {
      name: "Fit Trousers",
      imageUrl:
        "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-cargo-de-trek-voyage-travel-100-gris-homme.jpg?&f=800x800",
      description:
        "THE CREAM CASUAL SLIM-FIT TROUSERS WITH CHAIN IS PART OF THE MARTIN VALEN TROUSER COLLECTION.",
      price: 200,
      countInStock: 18,
    },
    {
      name: "Navy Blue Suit",
      imageUrl:
        "https://www.alsformalwear.com/wp-content/uploads/2020/05/Colin-Navy-Blue-Suit.jpg",
      description:
        "the fashion-forward, trim man that wants a tuxedo or suit that will truly form to his body, the Slim Fit Collection is an excellent choice",
      price: 460,
      countInStock:31,
    },
    {
      name: "Ara-Shose",
      imageUrl:
        "https://www.ara-shoes.com/wp-content/uploads/2021/01/maya.png",
      description:
        "The most comfortable shoes I have ever worn. Very high quality and the arch support is great. I highly recommend these sandals.",
      price: 330,
      countInStock: 16,
    },
    {
      name: "Apple iPhone 12",
      imageUrl:
        "https://cairosales.com/46967-thickbox_default/apple-iphone-12-pro-max-128gb-pacific-blue-mgda3aaa.webp",
      description:
        "6.7-inch Super Retina XDR display2 Ceramic Shield, tougher than any smartphone glass 5G for superfast downloads and high-quality streaming",
      price: 1200,
      countInStock: 42,
    },
    {
      name: "HP Laptop",
      imageUrl:
        "https://product-images.www8-hp.com/digmedialib/prodimg/lowres/c06606471.png",
      description:
        "Security features from HP work together to create an always-on, always-acting, resilient defense. From the BIOS to the browser, above and below the OS, these constantly evolving solutions help protect your PC from threats",
      price: 2100,
      countInStock: 22,
    }
  ];
  
  module.exports = products;