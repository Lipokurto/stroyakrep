import './Header.css'
import logoWhite from '../../img/work/logoWhite.png'

const Header =()=> {
    return (
        <div className='container-hed'>
            <div className='header-title-lrInf'>
                LarpInfo
            </div>
            <img src={logoWhite} alt='' className='logo'/>
            <div className='header-title-calc'>
                Калькулятор строяка
            </div>
            <div className='header-title2'>
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
        </div>
    )
}
export default Header