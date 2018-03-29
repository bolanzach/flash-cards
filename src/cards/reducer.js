
const defaultState = {

};


function cardsReducer (state = defaultState, action) {
  if (action.type === 'loadMathCards') {
    console.log('loading math cards');
    return { ...state, loading: true };
  }
}


export {cardsReducer};