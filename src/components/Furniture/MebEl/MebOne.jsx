import './MebOne.css'
const MebOne =(props)=> {
    return (
     <div className='one-container'>
            <div className='het'>{props.name}</div>
            <img  classname='con-img' alt='' width='800' height='520' src={props.img}></img>
            <div className='container'>
                <div className='row-one'>
                    <div className='con-one'>Цена за 1 шт</div>
                    <div className='con-res'>{props.woodPrice.toFixed(2)}</div>
                </div>
                <div className='row-one'>
                    <div className='con-one'>Цена за 4 шт</div>
                    <div className='con-res'>{props.woodPriceOptimum.toFixed(2)}</div>
                </div>
                <div className='row-one'>
                    <div className='con-one'>Экономия</div>
                    <div className='con-res'>{(props.woodPrice*4  - props.woodPriceOptimum).toFixed(2)}</div>
                </div>
            </div>
            <div className='cutcont'>
                <div>
                    Доски на 1 шт:
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>Размер</div>
                        <div className='cut-res-full'>Количество</div>
                    </div>
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice00}</div>
                        <div className='cut-res-full'>{props.woodCount00}</div>
                    </div>
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice01}</div>
                        <div className='cut-res-full'>{props.woodCount01}</div>
                    </div>
                    <div className='cutnamefull'>
                        <div className='cut-tit-full'>{props.woodPice02}</div>
                        <div className='cut-res-full'>{props.woodCount02}</div>
                    </div>
                </div>
                <br></br>
                <div>
                    Распил:
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut00}</div>
                            <div className='cut-res-pice'>{props.woodCutCount00}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut01}</div>
                            <div className='cut-res-pice'>{props.woodCutCount01}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut02}</div>
                            <div className='cut-res-pice'>{props.woodCutCount02}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut03}</div>
                            <div className='cut-res-pice'>{props.woodCutCount03}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCut04}</div>
                            <div className='cut-res-pice'>{props.woodCutCount04}</div>
                        </div>
                </div>
                <br></br>
                <div>
                    Остатки:
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCutRest00}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount00}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-tit-pice'>{props.woodCutRest01}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount01}</div>
                        </div>
                        <div className='cutCount'>
                            <div className='cut-res-pice'>{props.woodCutRest02}</div>
                            <div className='cut-res-pice'>{props.woodCutRestCount02}</div>
                        </div>
                </div>
            </div>  
     </div>   
    )
}
export default MebOne