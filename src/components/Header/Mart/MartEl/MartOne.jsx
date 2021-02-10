import {  useSelector } from 'react-redux'
import './MartOne.css'

const MartOne =(props)=> {
    let result = useSelector(state => state.sum.result)

    let resultElements = result.map((element,index)=>
    <div className='contrRow'>
        <div classname='item00'>{index+1}</div>
        <div classname='item01'>{element.name}</div>
        <div classname='item02'>{element.count}</div>
        <div classname='item03'>{element.sum}</div>
    </div>
    )
    
    let sumAll = result.map(element => parseFloat(element.sum))
    let resSum = 0
    for (let i=0;i<sumAll.length;i++) {
        resSum +=sumAll[i]
    }
    
    return (
        <div>
            <div className='contrRow'>
                <div classname='item01'>№</div>
                <div classname='item02'>Название</div>
                <div classname='item03'>Количество</div>
                <div classname='item04'>Сумма</div>
            </div>
                {resultElements}
            <div className='resultLog'>
                {resSum.toFixed(2)}
            </div>
        </div>
    )
}

export default MartOne 