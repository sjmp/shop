const initialState = {
  shops: [],
  bank: 0,
  income: 0,
  user: {
    ownedShopIds: []
  }
}

const Shops = (state = initialState, action) => {
  switch(action.type){
    case 'TEST':
      return {
        ...state,
        shops: action.shops,
        user: action.user,
        bank: action.bank
      };

    case 'REVENUE_COUNT':

      const ownedShops = state.shops.shops.filter((item) => {
        return state.user.ownedShopIds.includes(item.id);
      });

      const income = !!ownedShops.length ? ownedShops.map(i => i.income).reduce((accumulator, currentValue) => accumulator + currentValue) : 0;

      return {
        ...state,
        bank: state.bank + income,
        income: income
      }

    case 'PURCHASE_PLOT':

      const newBank = state.bank - action.boughtShop.purchaseCost;
      const newShops = [...state.user.ownedShopIds, action.boughtShop.id];

      const newOwnedShops = state.shops.shops.filter((item) => {
        return newShops.includes(item.id);
      });
      const newIncome = !!newOwnedShops.length ? newOwnedShops.map(i => i.income).reduce((accumulator, currentValue) => accumulator + currentValue) : 0;

      return {
        ...state,
        bank : newBank,
        user: {
          ...state.user,
          ownedShopIds: newShops
        },
        income: newIncome
      }

    default:
      return state;
  }
}

export default Shops;
