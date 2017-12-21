export const testAction = () => {
  return {
    type: "TEST",
    shops: {
      "shops": [
        {"id": 1,"name":"Drury Lane", "income":10, "purchaseCost":33900},
        {"id": 2, "name":"Liverpool Street", "income":20, "purchaseCost":33900},
        {"id": 3, "name":"Coventry Way", "income":30, "purchaseCost":33900},
      ]
    },
    user: {
      ownedShopIds:[1,2]
    }

  }
}

  export const revenueCount = () => {
    return {
      type: "REVENUE_COUNT"
    }
  }
