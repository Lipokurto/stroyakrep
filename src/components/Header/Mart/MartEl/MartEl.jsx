import './MartEl.css'

import { useSelector } from "react-redux"

const MartEl =(props)=> {
    let result = useSelector(state => state.sum.result)
    let sumAll = result.map(element => parseFloat(element.sum))
    let resSum = 0
    for (let i=0;i<sumAll.length;i++) {
        resSum +=sumAll[i]
    }
    return (
        <div className='resultMain'>
            Итого: {resSum.toFixed(2)}
        </div>
    )
}
export default MartEl
