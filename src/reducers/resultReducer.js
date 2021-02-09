let initinalState = {
    result: [
        {name:'',count:0,sum:0}
    ]
}
const resultReducer =(state=initinalState,action)=> {
    switch (action.type) {
        case 'SAVE_RESULT_ITEM': {
            return {
                ...state,
                result:[...state.result,action.payload]
            }
        }
 
        default:
            return state;
    }

} 
export default resultReducer