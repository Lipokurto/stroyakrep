import React from 'react'
import './MartCon.css'
import {useSelector,useDispatch} from 'react-redux'
import { putInMartItem,putOutMartItem,saveResultItem } from '../../../actions'

const MartCon =(props)=> {
    const dispatch = useDispatch()
    let cont = useSelector(state=>state.mart)
    let price = useSelector(state=>state.counter.calc.price)
    return(
        <div className='contCount'>
            <button className='btnpl0' onClick={()=>
                price!==0?dispatch(putInMartItem()):null
            }></button>
            <div className='btnpl1' >{cont}</div>
            <button className='btnpl2' onClick={()=>
                cont !== 0 ? dispatch(putOutMartItem()):null
            }>-</button>
            <div className='rezpl'>
                {(props.resultMart*cont).toFixed(2)}
            </div>
            <button className='dob' onClick={()=> 
            dispatch(saveResultItem(props.name,cont,(props.resultMart*cont).toFixed(2)))
            }>Сохранить</button>
            
        </div>
    )
}
export default MartCon