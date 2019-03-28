import bossService from '../services/bossService';
import { GET_BOSSES, ADD_BOSS, GET_BOSS, DELETE_BOSS, EDIT_BOSS } from '../constants';


export const getBosses = () => {
    return dispatch => {
        return bossService.getBosses().then(d => {
            dispatch(getBossessSuccess(d));
        });
    };
};

const getBossessSuccess = bosses => {
    return {
        type: GET_BOSSES,
        payload: bosses
    };
};

export const addBoss = boss => {
    return dispatch => {
        return bossService.addBoss(boss).then(d => {
            dispatch(addBossSuccess(Object.assign({id: d.id}, boss)));
        });
    };
};

const addBossSuccess = boss => {
    return {
        type: ADD_BOSS,
        payload: boss
    };
};

export const getBoss = id => {
    return dispatch => {
        return bossService.getBoss(id).then(d => {
            dispatch(getBossSuccess(d));
        });
    };
};

const getBossSuccess = boss => {
    return {
        type: GET_BOSS,
        payload: boss
    }
}

export const deleteBoss = id => {
    return dispatch => {
        return bossService.deleteBoss(id).then(() => {
            dispatch(deleteBossSuccess(id));
        })
    }
}

const deleteBossSuccess = id => {
    return {
        type: DELETE_BOSS,
        payload: id
    }
}

export const editBoss = boss => {
    return dispatch => {
        return bossService.editBoss(boss).then(() => {
            dispatch(editBossSuccess(boss));
        })
    }
}

const editBossSuccess = boss => {
    return {
        type: EDIT_BOSS,
        payload: boss
    }
}