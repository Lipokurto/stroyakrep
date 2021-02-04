import './Header.css'
const Header =()=> {
    return (
        <div className='container-hed'>
            <div className='header-title'>
                Калькулятор строяка
            </div>
            <div className='itm'>
                Все размеры указаны в мм
            </div>
            <div className='itm'>
                Цена куба дерева все что тебе нужно для рассчета строяка
            </div>
            <div className='itm'>
                Цены полученные в ходе вычелсений имеют приблизительный характер
            </div>
        </div>
    )
}
export default Header