export const testAction = () => {
  return {
    type: "TEST",
    shops: {
      "shops": [
        {"id": 1,"name":"North Street", "income": 1750, "purchaseCost": 7000, "description":"A little shop on a busy high street. Perfect for starting out."}, //25%
        {"id": 2, "name":"Wigston", "income": 1200, "purchaseCost": 8000, "description":"Another small shop in the middle of town, perfect for expanding."}, //15%
        {"id": 3, "name":"Cannon Park", "income": 1425, "purchaseCost": 9500, "description":"A big shop just outside of the town. A likely earner."}, //15%
        // {"id": 4,"name":"Leamington Spa", "income": 3000, "purchaseCost": 12000, "description":"It's actually called ROYAL Leamington Spa, I'll have you know."}, //25%
        // {"id": 5, "name":"Northampton Road", "income": 1200, "purchaseCost": 12000, "description":"Little out of the way, but maybe that doesn't matter as much?"}, //10%
        // {"id": 6, "name":"Chaddesden", "income": 1800, "purchaseCost": 15000, "description":"Pricey, but a better class of customer alltogether."}, //12%
        // {"id": 7, "name":"Kiddlington", "income": 2850, "purchaseCost": 19000, "description":"The biggest store yet, but just as expensive."}, //15%
        // {"id": 8, "name":"Swadlincote", "income": 200, "purchaseCost": 40000, "description":"A Grocer's nightmare."}, //5%
        // {"id": 9, "name":"Fosse Park", "income": 15750, "purchaseCost": 45000, "description":"A Grocer's dream."}, //35%
      ]
    },
    user: {
      ownedShopIds:[]
    },
    bank: 9000

  }
}

  export const revenueCount = () => {
    return {
      type: "REVENUE_COUNT"
    }
  }

  export const purchasePlot = (shopData) => {
    return {
      type: "PURCHASE_PLOT",
      boughtShop: shopData
    }
  }

  export const restartGame = () => {
    return {
      type: "RESTART_GAME"
    }
  }
