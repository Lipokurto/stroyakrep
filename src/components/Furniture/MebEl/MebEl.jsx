import './MebEl.css'
function MebEl(props) {
    
 return (
    <div className='item'>
        <div className='title-name'>{props.name}</div>
        <img alt='' width='200' height='130' src={props.img}></img>
        <div className='cont'>
            <div className='name-tit'>Цена за 1 шт</div>
            <div className='result-tit'>{props.woodPrice.toFixed(2)}</div>
        </div>
        <div className='cont'>
            <div className='name-tit'>Цена за {props.stuffCount} шт</div>
            <div className='result-tit'>{props.woodPriceOptimum.toFixed(2)}</div>
        </div>
        <div className='cont'>
            <div className='name-tit'>Экономия</div>
            <div className='result-tit'>{(props.woodPrice*props.stuffCount  - props.woodPriceOptimum).toFixed(2)}</div>
        </div>
    </div>
 )
}
export default MebEl