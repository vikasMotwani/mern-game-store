const mongoose = require('mongoose');
const Distributor = require('../models/distributors')
const Product = require('../models/products');

const seedDistributors = [
    { "distributor_name": "GameGo", "CIF": "X799281116", "address": "462 Blaine Trail" },
    { "distributor_name": "We are 8 bits Inc", "CIF": "R888901972", "address": "28 Elmside Circle" },
    { "distributor_name": "Unlimited walk games", "CIF": "P391325062", "address": "64613 Loeprich Junction" },
    { "distributor_name": "Macrosoft Store", "CIF": "Q777895009", "address": "055 Atwood Road" },
    { "distributor_name": "Rocktendo aShop", "CIF": "J474661816", "address": "030 West Road" },
    { "distributor_name": "BoredStation Store", "CIF": "D768492794", "address": "82 Montana Alley" },
    { "distributor_name": "Broch Media", "CIF": "D214333931", "address": "23 Scott Court" },
    { "distributor_name": "PaperStars Games Inc", "CIF": "T879078274", "address": "2928 Loomis Street" },
    { "distributor_name": "Remidiem Games", "CIF": "S558272514", "address": "71 Dryden Trail" },
    { "distributor_name": "Games to Steam Inc ", "CIF": "P183308657", "address": "0 Scofield Point" }
]


const initialProducts = [{
    "name": "Grand Theft Auto IV",
    "relevance": 92.14,
    "price": 65.91,
    "image": "https://m.media-amazon.com/images/I/51+VmzFNeoL._AC_.jpg",
    "publisher": "Rockstar Games"
  }, {
    "name": "Metal Gear Solid 4: Guns of Patriots",
    "relevance": 88.67,
    "price": 37.51,
    "image": "https://m.media-amazon.com/images/I/510eDGr1W6L._AC_SY600_.jpg",
    "publisher": "Konami"
  }, {
    "name": "Super Mario Galaxy",
    "relevance": 96.07,
    "price": 61.88,
    "image": "https://m.media-amazon.com/images/I/A12iv3r7APL._AC_SY600_.jpg",
    "publisher": "Nintendo"
  }, {
    "name": "Doom Eternal",
    "relevance": 78.72,
    "price": 60.13,
    "image": "https://m.media-amazon.com/images/I/91P7glr0RLL._AC_SY600_.jpg",
    "publisher": "Bethesda"
  }, {
    "name": "Deus Ex: Human Revolution",
    "relevance": 86.04,
    "price": 63.27,
    "image": "https://m.media-amazon.com/images/I/61dHVfcKo7L._AC_AC_SY600_.jpg",
    "publisher": "Eidos"
  }, {
    "name": "Resident Evil 2",
    "relevance": 76.57,
    "price": 56.32,
    "image": "https://m.media-amazon.com/images/I/81Sgdb4-lfL._AC_SX550_.jpg",
    "publisher": "Capcom"
  }, {
    "name": "Star Wars: The Force Unleashed",
    "relevance": 75.61,
    "price": 36.43,
    "image": "https://m.media-amazon.com/images/I/81Tl8Y78CuL._AC_SX550_.jpg",
    "publisher": "LucasArts"
  }, {
    "name": "F.E.A.R.",
    "relevance": 95.33,
    "price": 60.97,
    "image": "https://m.media-amazon.com/images/I/61Ev74vR6aL._AC_600_.jpg",
    "publisher": "Sierra"
  }, {
    "name": "Diablo Eternal Collection",
    "relevance": 77.84,
    "price": 55.66,
    "image": "https://m.media-amazon.com/images/I/91a18rDbilL._AC_SY550_.jpg",
    "publisher": "Blizzard"
  }, {
    "name": "Crysis 2",
    "relevance": 93.15,
    "price": 60.58,
    "image": "https://m.media-amazon.com/images/I/51xVEgXM1pL._AC_600_.jpg",
    "publisher": "EA"
  }, {
    "name": "Resistance: Fall of Man",
    "relevance": 76.92,
    "price": 45.73,
    "image": "https://m.media-amazon.com/images/I/617WF07qTeL._AC_SX600_.jpg",
    "publisher": "Insomniac"
  }, {
    "name": "Killzone 2",
    "relevance": 97.03,
    "price": 38.61,
    "image": "https://m.media-amazon.com/images/I/81CrBJknecL._AC_SX550_.jpg",
    "publisher": "Sony"
  }, {
    "name": "Fallout 3",
    "relevance": 88.45,
    "price": 40.18,
    "image": "https://m.media-amazon.com/images/I/51h3dU6-mwL._AC_600_.jpg",
    "publisher": "Bethesda"
  }, {
    "name": "Metal Gear Solid VV",
    "relevance": 81.28,
    "price": 55.35,
    "image": "https://m.media-amazon.com/images/I/91ExPCyNcaL._AC_SX550_.jpg",
    "publisher": "Konami"
  }, {
    "name": "Super Mario 3d all-stars",
    "relevance": 78.55,
    "price": 47.15,
    "image": "https://m.media-amazon.com/images/I/81Xi9uVRf4L._AC_SL600_.jpg",
    "publisher": "Nintendo"
  }, {
    "name": "Gears of War",
    "relevance": 82.02,
    "price": 52.78,
    "image": "https://m.media-amazon.com/images/I/51sh9Yh4S5L._AC_600_.jpg",
    "publisher": "Microsoft"
  }, {
    "name": "Elder Scrolls IV: Oblivion",
    "relevance": 87.05,
    "price": 52.48,
    "image": "https://m.media-amazon.com/images/I/811MdeJVSCL._AC_SY600_.jpg",
    "publisher": "Bethesda"
  }, {
    "name": "Limbo + Inside Pack",
    "relevance": 98.11,
    "price": 59.67,
    "image": "https://m.media-amazon.com/images/I/517urU+VqlS._AC_SX550_.jpg",
    "publisher": "Montecristo"
  }, {
    "name": "Half-Life 2",
    "relevance": 83.55,
    "price": 36.08,
    "image": "https://m.media-amazon.com/images/I/51V8ZRK340L._AC_600_.jpg",
    "publisher": "Valve"
  }, {
    "name": "BioShock",
    "relevance": 89.72,
    "price": 53.88,
    "image": "https://m.media-amazon.com/images/I/712XT-gVH6L._AC_SX550_.jpg",
    "publisher": "2K Games"
  }, {
    "name": "Little Nightmares",
    "relevance": 88.72,
    "price": 38.17,
    "image": "https://m.media-amazon.com/images/I/81AwKFHDXEL._AC_SL600_.jpg",
    "publisher": "Bandai Namco"
  }, {
    "name": "The Legend of Zelda: Breath of the Wild",
    "relevance": 98.55,
    "price": 48.78,
    "image": "https://m.media-amazon.com/images/I/81yCdxV54SL._AC_SY741_.jpg",
    "publisher": "Nintendo"
  }, {
    "name": "Grim Fandango",
    "relevance": 88.4,
    "price": 43.84,
    "image": "https://m.media-amazon.com/images/I/51NQ-taKHfL._AC_600.jpg",
    "publisher": "LucasArts"
  }, {
    "name": "Shadow of the Colossus",
    "relevance": 92.19,
    "price": 63.27,
    "image": "https://m.media-amazon.com/images/I/81OOdX1-x3L._AC_SX550_.jpg",
    "publisher": "Sony"
  }, {
    "name": "Resident Evil 4",
    "relevance": 91.46,
    "price": 68.65,
    "image": "https://m.media-amazon.com/images/I/51DE99R8SWL._AC_.jpg",
    "publisher": "Capcom"
  }, {
    "name": "Grand Theft Auto VI",
    "relevance": 94.24,
     "price": 59.99,
    "publisher": "Rockstar Games"
  }, {
    "name": "The Last of Us: Remastered",
    "relevance": 92.47,
    "price": 42.58,
    "image": "https://m.media-amazon.com/images/I/61x6HWx0Q2L._AC_SX550_.jpg",
    "publisher": "Naughty Dogs"
  },  {
    "name": "Celeste",
    "relevance": 84.11,
    "price": 50.82,
    "image": "https://m.media-amazon.com/images/I/81juULyaaPL._AC_SY600_.jpg",
    "publisher": "Matt Makes Games"
  }, {
    "name": "Grand Theft Auto: San Andreas",
    "relevance": 78.59,
    "price": 48.94,
    "image": "https://m.media-amazon.com/images/I/51lFTDlb2EL._AC_600_.jpg",
    "publisher": "Rockstar Games"
  }, {
    "name": "Death Stranding: Director´s Cut",
    "relevance": 93.17,
    "price": 36.58,
    "image": "https://m.media-amazon.com/images/I/81TC6LCxGmL._AC_SX550_.jpg",
    "publisher": "Kojima Productions"
  }, {
    "name": "Halo 3",
    "relevance": 96.95,
    "price": 57.97,
    "image": "https://m.media-amazon.com/images/I/51Ue+FFAm5L._AC_600_.jpg",
    "publisher": "Microsoft"
  }, {
    "name": "Sifu",
    "relevance": 99.52,
    "price": 49.96,
    "image": "https://m.media-amazon.com/images/I/61ShaapLY6L._AC_SX550_.jpg",
    "publisher": "Sloclap"
  }, {
    "name": "Bloodborne",
    "relevance": 79.48,
    "price": 63.39,
    "image": "https://m.media-amazon.com/images/I/71QCDEEwSgL._AC_SX550_.jpg",
    "publisher": "From Software"
  }, {
    "name": "The Last of Us Part II",
    "relevance": 77.94,
    "price": 51.43,
    "image": "https://m.media-amazon.com/images/I/81OFTUvFX4L._AC_SX550_.jpg",
    "publisher": "Naughty Dogs"
  }, {
    "name": "Carrion",
    "relevance": 79.69,
    "price": 68.62,
    "image": "https://m.media-amazon.com/images/I/71N-B3TPOcS._AC_SL600_.jpg",
    "publisher": "Devolver"
  }, {
    "name": "Blasphemous",
    "relevance": 92.12,
    "price": 69.07,
    "image": "https://m.media-amazon.com/images/I/81yOiCncQmS._AC_SX550_.jpg",
    "publisher": "The Game Kitchen"
  }, {
    "name": "Death´s Door",
    "relevance": 97.32,
    "price": 43.34,
    "image": "https://m.media-amazon.com/images/I/71l7Sq0F3vL._AC_SY600_.jpg",
    "publisher": "Devolver"
  }, {
    "name": "God of War: Ragnarok",
    "relevance": 86.4,
    "price": 46.63,
    "image": "https://m.media-amazon.com/images/I/51uDMdbzPQL._AC_600_.jpg",
    "publisher": "Santa Monica Studio"
  }, {
    "name": "Far Cry 3",
    "relevance": 77.83,
    "price": 33.41,
    "image": "https://m.media-amazon.com/images/I/81kgYL8AgPL._AC_SX500_.jpg",
    "publisher": "Ubisoft"
  }, {
    "name": "God of War",
    "relevance": 84.21,
    "price": 49.7,
    "image": "https://m.media-amazon.com/images/I/81emBOJxExL._AC_SX550_.jpg",
    "publisher": "Santa Monica Studio"
  }, {
    "name": "Lost Judgment",
    "relevance": 93.94,
    "price": 43.34,
    "image": "https://m.media-amazon.com/images/I/81FseNz9kqS._AC_SX550_.jpg",
    "publisher": "Sega"
  }, {
    "name": "Hogwarts Legacy",
    "relevance": 89.44,
    "price": 39.45,
    "image": "https://m.media-amazon.com/images/I/81iDj0vKyGL._AC_SX550_.jpg",
    "publisher": "Avalanche"
  }, {
    "name": "Little Big Planet",
    "relevance": 86.14,
    "price": 50.15,
    "image": "https://m.media-amazon.com/images/I/61S0mFDv5fL._AC_600_.jpg",
    "publisher": "Sony"
  }, {
    "name": "Mass Effect: Legendary Edition",
    "relevance": 85.64,
    "price": 67.75,
    "image": "https://m.media-amazon.com/images/I/81ld7ta9+RL._AC_SL600_.jpg",
    "publisher": "BioWare"
  }, {
    "name": "Batman Arkham Collection",
    "relevance": 78.63,
    "price": 56.05,
    "image": "https://m.media-amazon.com/images/I/81XTYl6HpRL._AC_SX550_.jpg",
    "publisher": "Rocksteady"
  }, {
    "name": "Alone in the Dark",
    "relevance": 81.09,
    "price": 61.23,
    "image": "https://m.media-amazon.com/images/I/714Loy9FWPL._AC_SY600_.jpg",
    "publisher": "Eden Games"
  }, {
    "name": "Resident Evil 3",
    "relevance": 85.64,
    "price": 49.93,
    "image": "https://m.media-amazon.com/images/I/81zPtVj06kL._AC_SX550_.jpg",
    "publisher": "Capcom"
  }, {
    "name": "Cuphead",
    "relevance": 90.34,
    "price": 40.75,
    "image": "https://m.media-amazon.com/images/I/71-3hGapiVL._AC_SY550_.jpg",
    "publisher": "Studio MDHR"
  }, {
    "name": "Elden Ring",
    "relevance": 90.34,
     "price": 40.75,
    "image": "https://m.media-amazon.com/images/I/81pF8NzKtzS._AC_SX550_.jpg",
    "publisher": "Bandai Namco"
  },{
  "name": "The Last of Us Factions",
  "relevance": 85.34,
   "price": 34.35,
  "publisher": "Naughty Dogs"
}]
 
const loadData = async () => {
  try {
    await Distributor.deleteMany({});
    const loadedDistributors = await Distributor.insertMany(seedDistributors);
    console.log('Distributors loaded')
    const distributorsIds = loadedDistributors.map(distributor => distributor._id);

    const seedProducts = initialProducts.map((product, i) => ({ ...product, id: i+1,  distributor: distributorsIds[Math.floor(Math.random() * distributorsIds.length)] }));

    await Product.deleteMany({});
    await Product.insertMany(seedProducts);

    console.log('Products loaded')

  }catch (err) {
    console.log(err)
  }
};

loadData().then(() => {
    console.log('seeds closed connection');
    mongoose.connection.close();
});