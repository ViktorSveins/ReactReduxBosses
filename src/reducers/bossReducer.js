import { GET_BOSSES, GET_BOSS, ADD_BOSS, DELETE_BOSS, EDIT_BOSS } from '../constants';

const initialState = {
    bossList: [],
    bossDetails: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_BOSSES:
        return { ...state, bossList: payload }
    
    case GET_BOSS:
        return { ...state, bossDetails: payload}
    case ADD_BOSS:
        return { ...state, bossList: [...state.bossList, payload] }
    case DELETE_BOSS:
        return { ...state, bossDetails: {}, bossList: state.bossList.filter(b => b.id != payload) }
    case EDIT_BOSS:
        return { ...state, bossDetails: payload, bosslist: state.bossList.filter(b => b.id != payload.id).push(payload) }
    default:
        return state
    }
}
