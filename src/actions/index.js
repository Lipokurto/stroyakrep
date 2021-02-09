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
export const saveResultItem =(namex,countx,sumx)=> {
    return {
        type:'SAVE_RESULT_ITEM',
        payload:{name:namex,count:countx,sum:sumx}
    }
}
