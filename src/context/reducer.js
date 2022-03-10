export const initialState = {
    number: 0,
  };
  
  export const AppReducer = (state, action) => {
    switch (action.type) {
      case "add_number": {
        return {
          ...state,
          number: action.value + state.number,
        };
      }
    }
  };