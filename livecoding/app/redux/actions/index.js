import * as actionType from './constant'

export const start = (userName, treeName) => {
    const maxAge = Math.floor(Math.random() * 6) + 12;
    const produceAge = Math.floor(Math.random() * 3) + 6;
    return {
        type: actionType.START_LIFE,
        payload: {
            userName,
            treeName,
            maxAge,
            produceAge,
        }
    }
}

export const produceFruit = (actualAge) => {
    let fruits = 0;
    if (actualAge >= store.getState().produceAge) {
        fruits = Math.floor(Math.random() * 15) + 10;
    }
    return {
        type: actionType.PRODUCE_FRUIT,
        payload: fruits,
    }
}

export const harvestFruit = () => {
    return {
        type: actionType.HARVEST_FRUIT,
    }
}

export const addAge = () => {
    let images = store.getState().images;
    let selectedImage = images[4];
    if (store.getState().actualAge < store.getState().produceAge) {
        if (store.getState().actualAge < 3) {
            selectedImage = images[0];
        } else if (store.getState().actualAge < 5) {
            selectedImage = images[1];
        } else {
            selectedImage = images[2];
        }
    } else if (store.getState().actualAge >= store.getState().produceAge) {
        selectedImage = images[3];
    } else {
        selectedImage = images[4];
    }

    return {
        type: actionType.ADD_AGE,
        payload: selectedImage
    }
}