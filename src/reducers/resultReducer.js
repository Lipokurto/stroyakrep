let initinalState = {
    result: []
}
const resultReducer =(state=initinalState,action)=> {
    switch (action.type) {
        case 'SAVE_RESULT_ITEM': {
            return {
                ...state,
                result:[...state.result,action.payload]
            }
        }
        case 'ERASE_RESULTS': {
            return {
                result:[]
            }
        }

        default:
            return state;
    }

} 
export default resultReducer