// let initialState = {
//     mart:0

// }

const martReducer =(state=0,action) => {
    switch (action.type) {
        case 'PUT_IN_ITEM' : 
        return state+1
    
        case 'PUT_OUT_ITEM' : 
        return state-1
        
        default: 
        return state
    }
}

export default martReducer