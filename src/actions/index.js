export const updatePrice =(num)=> {
    return {
        type: 'UPDATE_PRICE',
        payload: num
    }
}
export const putInMartItem =(cont)=> {
    return {
        type: 'PUT_IN_ITEM',
        payload:cont
    }
}
export const putOutMartItem =(cont)=> {
    return {
        type: 'PUT_OUT_ITEM',
        payload:cont
    }
}
export const saveResultItem =(
    namex,
    countx,
    sumx,

    pice00,
    pice01,
    pice02,
    pice03,
    pice04,

    picecont00,
    picecont01,
    picecont02,
    picecont03,
    picecont04,
    )=> {
    return {
        type:'SAVE_RESULT_ITEM',
        payload:{
            name:namex,
            count:countx,
            sum:sumx,
            pice:[pice00,pice01,pice02,pice03,pice04],
            picecont:[picecont00,picecont01,picecont02,picecont03,picecont04]

        }
    }
}
export const eraseResults =()=> {
    return {
        type:'ERASE_RESULTS'
    }
}
export const removeCount =()=> {
    return {
        type:'REMOVE_COUNT'
    }
}