import React from 'react'
import './WoodCalc.css'
import {useSelector,useDispatch} from 'react-redux'
import {updatePrice} from '../../actions'

function WoodCalc(props) {
  let priceWood = useSelector(state =>state.counter.calc.sizePrice)
  let woodSizeReady = useSelector(state=>state.counter.calc.woodSize)
  let priceWoodElements = priceWood.map((el,index)=>
    <div className='woodRow'>
      <div className='woodPice'>{woodSizeReady[index]}</div> 
      <div className='woodPrice'>{el.toFixed(2)}</div></div>)
  
  const dispatch = useDispatch()
    let newNumEl = React.createRef()
  return (
    <div className="calc-container">
      <div className="calc-container-ras">
        <h4>Введите стоимость куба леса</h4>
        <input type='text' placeHolder='Введите стоимость куба леса' className='input' ref={newNumEl}></input>
        <button className='button' onClick={()=>
          {
            if (isNaN(newNumEl.current.value)){
            alert('Введено неверное значение')
            } else if ((newNumEl.current.value).length <= 10) {
              dispatch(updatePrice(newNumEl.current.value))
              dispatch(updatePrice(newNumEl.current.value))
            } else {
              alert('Введите число меньше 10 знаков')
            }
          }
          }>Рассчитать</button>
          </div>
        <div className='row-container'>
          {priceWoodElements}
        </div>
    </div>
  );
}

export default WoodCalc;
