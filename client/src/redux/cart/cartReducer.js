import { ADD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_CART } from './cartTypes'

const INITIAL_STATE = {
    numberItems: 0,
    cartItems: []
}

function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_CART:
            if (state.numberItems === 0) {
                let newProduct = {
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    relevance: action.payload.relevance,
                    image: action.payload.image,
                    price: action.payload.price,
                }
                state.cartItems.push(newProduct);
            } else {
                let check = false;
                state.cartItems.forEach((item, i) => {
                    if (item.id === action.payload.id) {
                        state.cartItems[i].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _newProduct = {
                        id: action.payload.id,
                        name: action.payload.name,
                        quantity: 1,
                        relevance: action.payload.relevance,
                        image: action.payload.image,
                        price: action.payload.price,
                    }
                    state.cartItems.push(_newProduct);
                }
            }
            return {
                ...state,
                numberItems: state.numberItems + 1
            }

        case INCREASE_QUANTITY:
            state.cartItems[action.payload].quantity++;
            return {
                ...state,
                cartItems: state.cartItems,
                numberItems: state.numberItems + 1
            }

        case DECREASE_QUANTITY:
            let qty = state.cartItems[action.payload].quantity;
            if (qty > 1) {
                state.cartItems[action.payload].quantity--;
                return {
                    ...state,
                    cartItems: state.cartItems,
                    numberItems: state.numberItems - 1

                }
            } else {
                state.cartItems[action.payload].quantity = 0;
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== state.cartItems[action.payload].id),
                    numberItems: state.numberItems - 1

                }
            }

        case DELETE_CART:
            let quantity_ = state.cartItems[action.payload].quantity;
            return {
                ...state,
                numberItems: state.numberItems - quantity_,
                cartItems: state.cartItems.filter(item => item.id !== state.cartItems[action.payload].id)
            }

        default:
            return state;
    }
}

export default cartReducer;