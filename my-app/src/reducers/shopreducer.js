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
        user: action.user
      };

    case 'REVENUE_COUNT':

      const ownedShops = state.shops.shops.filter((item) => {
        return state.user.ownedShopIds.includes(item.id);
      });

      const income = ownedShops.map(i => i.income).reduce((accumulator, currentValue) => accumulator + currentValue);

      return {
        ...state,
        bank: state.bank + income,
        income: income
      }

    default:
      return state;
  }
}

export default Shops;
