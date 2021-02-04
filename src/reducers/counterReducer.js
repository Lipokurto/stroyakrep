let initialState = {
        calc: 
            {
            price:0,
            woodSize:['100*25*6000','150*25*6000','50*50*6000','50*100*6000','100*100*6000'],
            sizePrice:[0,0,0,0,0],
            countIn:[66,44,66,33,16]
        }
    
}

const counterReducer =(state = initialState,action)=> {
    switch (action.type) {
        case 'UPDATE_PRICE':
            return {
                calc: 
                    {
                    price:action.payload,
                    woodSize:['100*25*6000','150*25*6000','50*50*6000','50*100*6000','100*100*6000'],
                    sizePrice:state.calc.countIn.map(el=> el = state.calc.price/el),
                    countIn:[66,44,66,33,16]
                }
            }
        default:
            return state
    }
}
export default counterReducer