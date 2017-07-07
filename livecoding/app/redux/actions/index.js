import * as actionType from './constant'

export const start = (userName, treeName) => {
    const maxAge = Math.floor(Math.random()*5) + 15;
    const produceAge = Math.floor(Math.random()*3) + 8;
    return {
        type: actionType.ADD_AGE,
        payload: {
            userName,
            treeName,
            maxAge,
            produceAge
        }
    }
}
