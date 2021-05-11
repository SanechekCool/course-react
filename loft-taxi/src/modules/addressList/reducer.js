import { GET_ADDRESSES } from "./actions";

const initialState = {
    addresses: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload
            }
        default:
            return state
    }
}

export const adressesSelector = (store) => store.adressList.adresses;