const initialState = {
  shops: []
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
