import {  useSelector } from 'react-redux'
import './MartOne.css'

const MartOne =(props)=> {
    let woodResut = useSelector(state => state.counter.calc.woodSize)
    let result = useSelector(state => state.sum.result)
    // debugger


    let resultElements = result.map((element,index)=>
    <div className='contrRow'>
        <div classname='item00'>{index+1}</div>
        {/* имя резульата: */}
        <div classname='item01'>{element.name}</div>
        {/* Количество */}
        <div classname='item02'>{element.count}</div>
        {/* стоимость */}
        <div classname='item03'>{element.sum}</div>
    </div>
    )
    
    let sumAll = result.map(element => parseFloat(element.sum))
    let resSum = 0
    for (let i=0;i<sumAll.length;i++) {
        resSum +=sumAll[i]
    }


    let itogResult = woodResut.map((e,index) =>
        <div className='contrRow'>
            <div classname='item00'>{index+1}</div>
            <div classname='item01'>{e}</div>
            <div classname='item02'>{result.some((elmo)=>elmo.pice.some((elk)=>elk===e))?
                result.reduce((sum,eli)=>(isNaN(eli.picecont[eli.pice.indexOf(e)]))?sum:sum + parseInt(eli.picecont[eli.pice.indexOf(e)]),0)            
                :null}</div>
            <div classname='item03'></div>
        </div>
        )
    
    return (
        <div>
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
            <div>
                {itogResult}
            </div>
        </div>
    )
}

export default MartOne 