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
            }>+</button>
            <div className='btnpl1' >{cont}</div>
            <button className='btnpl2' onClick={()=>
                cont !== 0 ? dispatch(putOutMartItem()):null
            }>-</button>
            <div className='rezpl'>
                {(props.resultMart*cont).toFixed(2)}
            </div>
            <button className='dob' onClick={()=> 
            dispatch(saveResultItem(
                props.name,
                cont,
                (props.resultMart*cont).toFixed(2),

                props.woodSizeProps00,
                props.woodSizeProps01,
                props.woodSizeProps02,
                props.woodSizeProps03,
                props.woodSizeProps04,

                (props.woodSizeCount00*cont).toFixed(2),
                (props.woodSizeCount01*cont).toFixed(2),
                (props.woodSizeCount02*cont).toFixed(2),
                (props.woodSizeCount03*cont).toFixed(2),
                (props.woodSizeCount04*cont).toFixed(2)
                ))
            }>Сохранить</button>
            
        </div>
    )
}
export default MartCon