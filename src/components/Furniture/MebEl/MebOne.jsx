import './MebOne.css'

const MebOne =(props)=> {
    return (
     <div className='one-container'>
            <div className='het'>{props.name}</div>
            <img  classname='con-img' alt=''  src={props.img}></img>
            <div className='container'>
                <div className='row-one'>
                    <div className='con-one'>Цена за 1 шт</div>
                    <div className='con-res'>{props.woodPrice.toFixed(2)}</div>
                </div>
                <div className='row-one'>
                    <div className='con-one'>Цена за {props.stuffCount} шт</div>
                    <div className='con-res'>{props.woodPriceOptimum.toFixed(2)}</div>
                </div>
                <div className='row-one'>
                    <div className='con-one'>Экономия</div>
                    <div className='con-res'>{(props.woodPrice*4  - props.woodPriceOptimum).toFixed(2)}</div>
                </div>
            </div>
            <div className='cutcont'>
                <div>
                    <div className='tit-hed'>Доски на 1 шт:</div>
                    {props.woodCount00 == null ? null :                   
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice00}</div>
                        <div className='cut-res-full'>{props.woodCount00}</div>
                    </div>
                    }
                    {props.woodCount01 == null ? null :
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice01}</div>
                        <div className='cut-res-full'>{props.woodCount01}</div>
                    </div>
                    }
                    {props.woodCount02 == null ? null :
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice02}</div>
                        <div className='cut-res-full'>{props.woodCount02}</div>
                    </div>
                    }
                </div>
                <br></br>
                <div>
                    <div className='tit-hed'>Распил:</div>  
                        {props.woodCutCount00 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut00}</div>
                            <div className='cut-res-pice'>{props.woodCutCount00}</div>
                        </div> 
                        }
                        {props.woodCutCount01 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut01}</div>
                            <div className='cut-res-pice'>{props.woodCutCount01}</div>
                        </div>
                        }
                        {props.woodCutCount02 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut02}</div>
                            <div className='cut-res-pice'>{props.woodCutCount02}</div>
                        </div>
                        }
                        {props.woodCutCount03 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut03}</div>
                            <div className='cut-res-pice'>{props.woodCutCount03}</div>
                        </div>
                        }
                        {props.woodCutCount04 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut04}</div>
                            <div className='cut-res-pice'>{props.woodCutCount04}</div>
                        </div>
                        } 
                </div>
                <br></br>
                <div>
                    <div className='tit-hed'>Остатки:</div>
                        {props.woodCutRestCount00 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCutRest00}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount00}</div>
                        </div>
                        }
                        {props.woodCutRestCount01 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCutRest01}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount01}</div>
                        </div>
                        }
                        {props.woodCutRestCount02 == null ? null :
                        <div className='cutCount'>
                            <div className='cut-res-pice'>{props.woodCutRest02}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount02}</div>
                        </div>
                        }
                </div>
            </div>  
     </div>   
    )
}
export default MebOne