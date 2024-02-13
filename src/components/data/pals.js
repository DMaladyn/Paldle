const allPals = {
  Lamball: {
    index: "1",
    type: ["neutral"],
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false,
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2,
  },
  Cattiva: {
    index: "2",
    type: ["neutral"],
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false,
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2,
  },
  Chikipi: {
    index: "3", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Lifmunk: {
    index: "4", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 1,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Foxparks: {
    index: "5", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Fuack: {
    index: "6", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Sparkit: {
    index: "7", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 1, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Tanzee: {
    index: "8", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Rooby: {
    index: "9", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Pengullet: {
    index: "10", //in paldeck
    type: ["water", "ice"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Penking: {
    index: "11", //in paldeck
    type: ["water", "ice"], //element
    work: {
      kindling: 0,
      watering: 2,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Jolthog: {
    index: "12", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 1, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Jolthog_Cryst: {
    index: "12B", //in paldeck B must be big
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Gumoss: {
    index: "13", //in paldeck
    type: ["grass", "ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: true, //true if has alpha version
    food: 1, // 1- 8
  },
  Vixy: {
    index: "14", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Hoocrates: {
    index: "15", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Teafant: {
    index: "16", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Depresso: {
    index: "17", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Cremis: {
    index: "18", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Daedream: {
    index: "19", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Rushoar: {
    index: "20", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Nox: {
    index: "21", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Fuddler: {
    index: "22", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Killamari: {
    index: "23", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Glider", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Mau: {
    index: "24", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Mau_Cryst: {
    index: "24B", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Celaray: {
    index: "25", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Glider", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Direhowl: {
    index: "26", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Tocotoco: {
    index: "27", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Flopie: {
    index: "28", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Mozzarina: {
    index: "29", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Bristla: {
    index: "30", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 2, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Gobfin: {
    index: "31", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 2,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Gobfin_Ignis: {
    index: "31B", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Hangyu: {
    index: "32", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Glider", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Hangyu_Cryst: {
    index: "32B", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Glider", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Mossanda: {
    index: "33", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Mossanda_Lux: {
    index: "33B", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 2, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 5, // 1- 8
  },
  Woolipop: {
    index: "34", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Caprity: {
    index: "35", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 4, // 1- 8
  },
  Melpaca: {
    index: "36", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Eikthyrdeer: {
    index: "37", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Eikthyrdeer_Terra: {
    index: "37B", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Nitewing: {
    index: "38", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Ribbuny: {
    index: "39", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Incineram: {
    index: "40", //in paldeck
    type: ["fire", "dark"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 4, // 1- 8
  },
  Incineram_Noct: {
    index: "40B", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 4, // 1- 8
  },
  Cinnamoth: {
    index: "41", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Arsox: {
    index: "42", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Dumud: {
    index: "43", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 4, // 1- 8
  },
  Cawgnito: {
    index: "44", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Leezpunk: {
    index: "45", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Leezpunk_Ignis: {
    index: "45B", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Loupmoon: {
    index: "46", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Galeclaw: {
    index: "47", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Glider", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 4, // 1- 8
  },
  Robinquill: {
    index: "48", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 2,
      lumbering: 1,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Robinquill_Terra: {
    index: "48B", //in paldeck
    type: ["grass", "ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 2,
      lumbering: 1,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Gorirat: {
    index: "49", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Beegarde: {
    index: "50", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 1,
      mining: 0,
      medicine: 1, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Elizabee: {
    index: "51", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 2,
      lumbering: 1,
      mining: 0,
      medicine: 2, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Grintale: {
    index: "52", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 4, // 1- 8
  },
  Swee: {
    index: "53", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Sweepa: {
    index: "54", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Chillet: {
    index: "55", //in paldeck
    type: ["ice", "dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 1,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Univolt: {
    index: "56", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 2, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 5, // 1- 8
  },
  Foxcicle: {
    index: "57", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Pyrin: {
    index: "58", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Pyrin_Noct: {
    index: "58B", //in paldeck
    type: ["fire", "dark"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 1,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Reindrix: {
    index: "59", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Rayhound: {
    index: "60", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 2, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Kitsun: {
    index: "61", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 4, // 1- 8
  },
  Dazzi: {
    index: "62", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 1, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Lunaris: {
    index: "63", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 3,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 2, // 1- 8
  },
  Dinossom: {
    index: "64", //in paldeck
    type: ["grass", "dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Dinossom_Lux: {
    index: "64B", //in paldeck
    type: ["electric", "dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 2, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Surfent: {
    index: "65", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 2,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Surfent_Terra: {
    index: "65B", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Maraith: {
    index: "66", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 1,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, mount
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 3, // 1- 8
  },
  Digtoise: {
    index: "67", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 3,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: true, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Tombat: {
    index: "68", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 2,
      lumbering: 0,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Lovander: {
    index: "69", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 1,
      medicine: 2, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Flambelle: {
    index: "70", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 1,
    },
    partner: "Utility", //Fighting, Utility, mount
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 2, // 1- 8
  },
  Vanwyrm: {
    index: "71", //in paldeck
    type: ["fire", "dark"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Vanwyrm_Cryst: {
    index: "71B", //in paldeck
    type: ["ice", "dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Bushi: {
    index: "72", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 1,
      lumbering: 3,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 4, // 1- 8
  },
  Beakon: {
    index: "73", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 2, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Ragnahawk: {
    index: "74", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Katress: {
    index: "75", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 2, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 5, // 1- 8
  },
  Wixen: {
    index: "76", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 2,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 3,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Verdash: {
    index: "77", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 3,
      gathering: 3,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Vaelet: {
    index: "78", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 3, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Sibelyx: {
    index: "79", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 2, //Medicine production
      cooling: 2,
      transporting: 0,
      farming: 1,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 5, // 1- 8
  },
  Elphidran: {
    index: "80", //in paldeck
    type: ["dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Elphidran_Aqua: {
    index: "80B", //in paldeck
    type: ["dragon", "water"], //element
    work: {
      kindling: 0,
      watering: 3,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Kelpsea: {
    index: "81", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 1,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Kelpsea_Ignis: {
    index: "81B", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 1,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 1, // 1- 8
  },
  Azurobe: {
    index: "82", //in paldeck
    type: ["water", "dragon"], //element
    work: {
      kindling: 0,
      watering: 3,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false    water ?????
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Cryolinx: {
    index: "83", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 3,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Blazehowl: {
    index: "84", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Blazehowl_Noct: {
    index: "84B", //in paldeck
    type: ["fire", "dark"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Relaxaurus: {
    index: "85", //in paldeck
    type: ["dragon", "water"], //element
    work: {
      kindling: 0,
      watering: 2,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Relaxaurus_Lux: {
    index: "85B", //in paldeck
    type: ["dragon", "electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 3, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Broncherry: {
    index: "86", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 3,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Broncherry_Aqua: {
    index: "86B", //in paldeck
    type: ["grass", "water"], //element
    work: {
      kindling: 0,
      watering: 3,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Petallia: {
    index: "87", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 3,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 2, //Medicine production
      cooling: 0,
      transporting: 1,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 3, // 1- 8
  },
  Reptyro: {
    index: "88", //in paldeck
    type: ["fire", "ground"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 3,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Reptyro_Cryst: {
    index: "88B", //in paldeck
    type: ["ice", "ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 3,
      medicine: 0, //Medicine production
      cooling: 3,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 5, // 1- 8
  },
  Kingpaca: {
    index: "89", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Kingpaca_Cryst: {
    index: "89B", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 3,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Mammorest: {
    index: "90", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 2,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Mammorest_Cryst: {
    index: "90B", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 8, // 1- 8
  },
  Wumpo: {
    index: "91", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 3,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 2,
      transporting: 4,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 8, // 1- 8
  },
  Wumpo_Botan: {
    index: "91B", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 3,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 4,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Warsect: {
    index: "92", //in paldeck
    type: ["grass", "ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 1,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 3,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Fenglope: {
    index: "93", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Felbat: {
    index: "94", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 3, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 5, // 1- 8
  },
  Quivern: {
    index: "95", //in paldeck
    type: ["dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 2,
      lumbering: 0,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 4, // 1- 8
  },
  Blazamut: {
    index: "96", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 4,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 9, // 1- 8
  },
  Helzephyr: {
    index: "97", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 8, // 1- 8
  },
  Astegon: {
    index: "98", //in paldeck
    type: ["dragon", "dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 1,
      gathering: 0,
      lumbering: 0,
      mining: 4,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //Fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 9, // 1- 8
  },
  Menasting: {
    index: "99", //in paldeck
    type: ["dark", "ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 3,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //Fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Anubis: {
    index: "100", //in paldeck
    type: ["ground"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 4,
      gathering: 0,
      lumbering: 0,
      mining: 3,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 2,
      farming: 0,
    },
    partner: "Fighting", //fighting, Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Jormuntide: {
    index: "101", //in paldeck
    type: ["dragon", "water"], //element
    work: {
      kindling: 0,
      watering: 4,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Jormuntide_Ignis: {
    index: "101B", //in paldeck
    type: ["dragon", "fire"], //element
    work: {
      kindling: 4,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Suzaku: {
    index: "102", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Suzaku_Aqua: {
    index: "102B", //in paldeck
    type: ["water"], //element
    work: {
      kindling: 0,
      watering: 3,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting, Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 8, // 1- 8
  },
  Grizzbolt: {
    index: "103", //in paldeck
    type: ["electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 3, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 2,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Flexible", //fighting, Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Lyleen: {
    index: "104", //in paldeck
    type: ["grass"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 4,
      electricity: 0, //Generating Electricity
      handiwork: 3,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 3, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //fighting (Fighting), Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 6, // 1- 8
  },
  Lyleen_Noct: {
    index: "104B", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 3,
      gathering: 2,
      lumbering: 0,
      mining: 0,
      medicine: 3, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Fighting", //fighting (Fighting), Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 6, // 1- 8
  },
  Faleris: {
    index: "105", //in paldeck
    type: ["fire"], //element
    work: {
      kindling: 3,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Utility", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Orserk: {
    index: "106", //in paldeck
    type: ["dragon", "electric"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 4, //Generating Electricity
      handiwork: 2,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 3,
      farming: 0,
    },
    partner: "Utility", //fighting (Fighting), Utility, Flexible
    gear: false, //true false
    mount: false, //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Shadowbeak: {
    index: "107", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 1,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 8, // 1- 8
  },
  Paladius: {
    index: "108", //in paldeck
    type: ["neutral"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 9, // 1- 8
  },
  Necromus: {
    index: "109", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 2,
      mining: 2,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Utility", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Ground", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 9, // 1- 8
  },
  Frostallion: {
    index: "110", //in paldeck
    type: ["ice"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 0,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 4,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 7, // 1- 8
  },
  Frostallion_Noct: {
    index: "110B", //in paldeck
    type: ["dark"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 4,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: false, //true if has alpha version
    food: 7, // 1- 8
  },
  Jetragon: {
    index: "111", //in paldeck
    type: ["dragon"], //element
    work: {
      kindling: 0,
      watering: 0,
      planting: 0,
      electricity: 0, //Generating Electricity
      handiwork: 0,
      gathering: 3,
      lumbering: 0,
      mining: 0,
      medicine: 0, //Medicine production
      cooling: 0,
      transporting: 0,
      farming: 0,
    },
    partner: "Flexible", //fighting (Fighting), Utility, Flexible
    gear: true, //true false
    mount: "Flying", //Flying, ground, Glider false
    boss: true, //true if has alpha version
    food: 9, // 1- 8
  },
};

export default allPals;

//tests to check if pals stats are inserted correctly
/* let names = Object.keys(allPals);

  let errors = [];

  let types = [
    "water",
    "ice",
    "fire",
    "dark",
    "grass",
    "dragon",
    "electric",
    "neutral",
    "ground",
  ];

  let partner = ["Utility", "Fighting", "Flexible"];

  let mounts = ["ground", "Flying", "Glider", false];

  for (let i = 0; i < names.length; i++) {
    if (allPals[names[i]].index == "") errors.push(names[i]);

    for (let j = 0; j < allPals[names[i]].type.length; j++) {
      if (!types.includes(allPals[names[i]].type[j])) errors.push(names[i]);
    }

    if (!partner.includes(allPals[names[i]].partner)) errors.push(names[i]);

    if (!mounts.includes(allPals[names[i]].mount)) errors.push(names[i]);

    if (typeof allPals[names[i]].boss != "boolean") errors.push(names[i]);
    if (typeof allPals[names[i]].food != "number") errors.push(names[i]);
    if (typeof allPals[names[i]].gear != "boolean") errors.push(names[i]);
  } */
