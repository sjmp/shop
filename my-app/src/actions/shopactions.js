export const testAction = () => {
  return {
    type: "TEST",
    shops: {
      "shops": [
        {"id": 1,"name":"Drury Lane", "income": 2500, "purchaseCost":7000},
        {"id": 2, "name":"Liverpool Street", "income": 5000, "purchaseCost":12000},
        {"id": 3, "name":"Coventry Way", "income": 10000, "purchaseCost":33900},
        {"id": 4,"name":"Jamaica Road", "income":2500, "purchaseCost":7500},
        {"id": 5, "name":"London Walk", "income": 2800, "purchaseCost":33900},
        {"id": 6, "name":"Kingsway", "income": 1000, "purchaseCost":19000},
      ]
    },
    user: {
      ownedShopIds:[]
    },
    bank: 15000

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
