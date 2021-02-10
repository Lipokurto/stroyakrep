import './MartEl.css'

import { useSelector ,useDispatch} from "react-redux"
import {eraseResults} from '../../../../actions'

const MartEl =(props)=> {
    const dispatch = useDispatch()
    let result = useSelector(state => state.sum.result)
    let sumAll = result.map(element => parseFloat(element.sum))
    let resSum = 0
    for (let i=0;i<sumAll.length;i++) {
        resSum +=sumAll[i]
    }
    return (
        <div className='resultMain'>
            <div className='itemRez01'>
                Итого: {resSum.toFixed(2)}
            </div>
            <div className='itemRez02'>
                <button onClick={()=>dispatch(eraseResults())}>Сброс</button>
            </div>
        </div>
    )
}
export default MartEl
