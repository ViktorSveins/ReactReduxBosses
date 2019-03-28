const ENDPOINT = 'http://localhost:4500/api';

const getBosses = () => {
    return fetch(ENDPOINT + '/bosses').then(resp => {
        if(resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    })
};

const addBoss = boss => {
    return fetch(ENDPOINT + '/bosses', {
        method: 'POST',
        body: JSON.stringify(boss),
        headers: { 'Content-Type': 'application/json' }
    }).then(resp => {
        if(resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return ''; }
        return data;
    })
};

const getBoss = id => {
    return fetch(ENDPOINT + '/bosses/' + id).then(resp => {
        if(resp.ok) { return resp.json(); }
    }).then(data => {
        if(!data) { return []; }
        return data;
    })
};

const deleteBoss = id => {
    return fetch(ENDPOINT + '/bosses/' + id, {
        method: 'DELETE'
    }).then(resp => {
        if(resp.ok) { return resp }
    }).then(data => {
        if(!data) { return ''; }
        return data; 
    })
};

const editBoss = boss => {
    return fetch(ENDPOINT + '/bosses/' + boss.id, {
        method: 'PATCH',
        body: JSON.stringify(boss),
        headers: { 'Content-Type': 'application/json' }
    }).then(resp => {
        if(resp.ok) { return resp }
    }).then(data => {
        if(!data) { return ''; }
        return data;
    })
};

export default {
    getBosses,
    addBoss,
    getBoss,
    deleteBoss,
    editBoss
}