import React from 'react'
import './WoodCalc.css'
import {useSelector,useDispatch} from 'react-redux'
import {updatePrice} from '../../actions'

function WoodCalc(props) {

  // const priceKub = useSelector(state =>state.counter.calc.price)
  let priceWood = useSelector(state =>state.counter.calc.sizePrice)
  let woodSizeReady = useSelector(state=>state.counter.calc.woodSize)
  let priceWoodElements = priceWood.map((el,index)=>
    <div className='woodRow'><div className='woodPice'>{woodSizeReady[index]}</div> <div className='woodPrice'>{el.toFixed(2)}</div></div>)
  
  const dispatch = useDispatch()
    let newNumEl = React.createRef()
  
  return (
    <div className="calc-container">
      <div className="calc-container-ras">
        <h1>Калькулятор</h1>
        <input type='text' placeHolder='Введите стоимость куба леса' className='input' ref={newNumEl}></input>
        <button className='button' onClick={()=>
            dispatch(updatePrice(newNumEl.current.value))
          }>Рассчитать</button>
          </div>
        <div className='row-container'>
          {priceWoodElements}
        </div>
    </div>
  );
}

export default WoodCalc;
