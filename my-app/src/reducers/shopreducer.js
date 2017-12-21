const initialState = {
  shops: "NO"
}

const Shops = (state = initialState, action) => {
  switch(action.type){
    case 'TEST':
      return {
        ...state,
        shops: action.shops
      };

    default:
      return state;
  }
}

export default Shops;
