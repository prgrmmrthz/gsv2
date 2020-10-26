Vue.filter("capitalize", function(v) {
  if (!v) return "";
  v = v.toString();
  return v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
});

Vue.filter("upper", function(v) {
  if (!v) return "";
  v = v.toString();
  return v.toUpperCase();
});

var app = new Vue({
  el: "#products",
  data: {
    products: [
      {
        name: "Mangosteen Guyabano Coffee",
        sub: "",
        ing: "",
        benefits: [
          "Stabilize blood sugar",
          "Anti - Inflammatory",
          "Promotes a healthy immune system",
          "Helps maintain healthy skin",
          "Increase fat burn",
          "Help stop the growth of",
          "harmful bacteria"
        ],
        pic: "guyabano.HEIC"
      },
      {
        name: "Mangosteen Moringa Coffee",
        sub: "",
        ing: "",
        benefits: [
          "Rich in Antioxidant",
          "Lower blood sugar level",
          "Anti-inflammatory",
          "Help prevent diabetes and cancer",
          "Help treating asthma",
          "Improve good eyesight",
          "Making bones Healthier",
          "Fighting against bacterial disease",
          "Rich in Proteins, Vitamins and minerals",
          "Treating mood disorder"
        ],
        pic: "moringa.HEIC"
      },
      {
        name: "Green Coffee",
        sub: "Herbal drink supplement",
        ing:
          "•Green Coffee •L- Carnitine •Aloe Vera •Barley Grass •Wheat Grass •Spirulina •Buah Merah",
        benefits: [
          "Promotes weight loss",
          "High in antioxidant",
          "Helps to lower blood sugar level",
          "Anti-cancer potential",
          "Boost immunity",
          "Reduce constipation & detoxification",
          "Prevent gallstone & digestive health",
          "Reduce anemia"
        ],
        pic: "green.jpg"
      },
      {
        name: "Chia Seed Coffee",
        sub: "Natural Appetite Suppressant",
        ing: "•Chia Seed, •Grapeseed, •Moringa, •Barley Grass, •Spirulina",
        benefits: [
          "Decrease cholesterol level",
          "Decrease blood sugar",
          "Boost exercise performance",
          "Improve  stronger bones",
          "Help weight loss",
          "Decrease developing heart disease",
          "Improve dental health",
          "Improve good mood",
          "Your sleep schedule will become ",
          "consistent"
        ],
        pic: "chia.HEIC"
      },
      {
        name: "Choco Healthy Drink",
        sub: "",
        ing:
          "•Choco Powder •Nuts •Chlorella •Gotu Kola •Goji Berry •Mangosteen •Stevia",
        benefits: [
          " Enhance your immune system",
          " Improve sleep quality",
          " Vision improvement ",
          " Protect brain cells & boost brain function",
          " Anti-Gastric-Stomach ulcer",
          " Improve blood sugar level"
        ],
        pic: "choco.HEIC"
      },
      {
        name: "Advance Coffee",
        sub: "",
        ing:
          "•Gingko Biloba •Gotu Kola •Ginseng •Blue berry •Spirulina •Ganoderma •Aloe Vera •Moringa •Mangosteen",
        benefits: [
          " Improve brain function and well being",
          " Improve vision and good eyesight",
          " May help treat alzheimers disease",
          " May act as an anti-depressant ",
          " May help relieve joint pain",
          " May boost the immune system",
          " May fight tiredness and increase energy levels"
        ],
        pic: "advance.HEIC"
      },
      {
        name: "10 in 1 Premium Coffee Drink Mix",
        sub: "",
        ing:
          "• Buah Merah •Acai Berry •Mangosteen •Turmeric •Tongkat Ali •Ginseng •Moringa",
        benefits: [
          " Rich in Antioxidant",
          " May improve cholesterol Levels",
          " Regulates blood levels",
          " Improve detoxification",
          " Prevent constipation",
          "Prevent hypertension",
          " May prevent thyroid problems"
        ],
        pic: "premium coffee.HEIC"
      },
      {
        name: "Slimming Coffee w/ Collagen",
        sub: "",
        ing:
          "•Garcinia Cambogia •Collagen •Graviola •Moringa •Barley  •Spirulina  •Aloe Vera •Ganoderma •Ginseng",
        benefits: [
          " Suppresses appetite",
          " Promotes weight loss",
          " Improve metabolism",
          " Increase energy",
          " Reduce stress",
          " Regulates blood sugar",
          " Lower cholesterol",
          " Promotes healthy skin complexion"
        ],
        pic: "slimming.HEIC"
      },
      {
        name: "Collagen Coffee",
        sub: "Improves Skin Complexion",
        ing: "",
        benefits: [
          "	Improves the appearance of hair, Healthy skin and nails",
          " Helps prevent signs of aging",
          " Immune function",
          " Detox and prevent liver function",
          " Improve good eyesight",
          " Support healthy brain function"
        ],
        pic: "collagen.jpg"
      },
      {
        name: "Soya Coffee",
        sub: "Improves Skin Complexion",
        ing:
          "•Soya Beans •Gotu Kola •Chlorella •Spirulina •Moringa •Graviola •Hazel Nuts •Mangosteen •Grapeseed • Stevia",
        benefits: [
          " Helps in gaining weight",
          " Improves bone development",
          " Reduce the risk of osteoporosis",
          " May help to prevent breast and prostate cancer",
          " Suppress thyroid function",
          " Decrease the risk of diabetes"
        ],
        pic: "soya.HEIC"
      },
      {
        name: "Tongkat Ali Booster Coffee",
        sub: "",
        ing:
          "•Tongkat Ali •Agaricus Mushroom •Ginseng •Saw Palmeto •Barley Grass •Moringa •Guarana •Acai Berry •Grapeseed",
        benefits: [
          " Boost energy level",
          " May relieve stress",
          " RImprove body composition",
          " Improve Male & Female sexual health",
          " Improve infertility problems",
          " Immune system strengthening",
          "May decrease symptoms of enlarged prostate",
          "May aid chronic pelvic pain syndrome",
          "Weak bones prevention"
        ],
        pic: "booster.HEIC"
      },
      {
        name: "Purple Corn Coffee",
        sub: "",
        ing:
          "•Purple Corn •Mangosteen •Moringa •Agaricus Mushroom •Tongkat Ali •Spirulina •Ginseng •Grapeseed •Goji Berry •Barley Grass •Stevia",
        benefits: [
          "Rich in Anthocyanin",
          "Antioxidant",
          "Anti-cancer",
          "Prevent obesity and diabetes",
          "Lower blood pressure",
          "Anti-Aging"
        ],
        pic: "purple.HEIC"
      },
      {
        name: "Rice Coffee",
        sub: "",
        ing:
          "•Brown Rice •Mangosteen •Moringa •Agaricus Mushroom •Gotukola •Spirulina •Chlorella •Grapeseed •Goji Berry •Guarana",
        benefits: [
          "Improves blood circulation",
          "Boosts immune system",
          "Increases metabolism",
          "Provides a calming effects",
          "Reduce sign of aging",
          "Easy digest and provides phytic acid",
          "Maintaining bone mineral density"
        ],
        pic: "rice.HEIC"
      }
    ]
  }
});

var bannerApp = new Vue({
  el: "#banner",
  data: {
    pics: [{ p: "" }]
  }
});
