import * as actionType from '../actions/constant'

const initialState = {
    userName: '',
    treeName: '',
    maxAge: 0,
    isHealthy: true,
    actualAge: 0,
    produceAge: 0,
    currentHarvest: 0,
    countHarvest: 0,
    images: {
        0: require('../../assets/0.png'),
        1: require('../../assets/1.png'),
        2: require('../../assets/2.png'),
        3: require('../../assets/3.png'),
        4: require('../../assets/4.png'),
    },
    selectedImage: require('../../assets/0.png')
};

const getStartLife = (state, data) => {
    let newState = {
        ...state,
        userName: data.userName,
        treeName: data.treeName,
        actualAge: 0,
        maxAge: data.maxAge,
        produceAge: data.bearingAge
    }
    return newState
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case actionType.START_LIFE: 
            return getStartLife(state, payload);
        
        default:
            return state;
    }
}