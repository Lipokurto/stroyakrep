import './Reference.css'

import Samorez from '../../img/tools/shurup.png'
import Shurupovert from '../../img/tools/shurupovert.png'
import Benzopila from '../../img/tools/Benzopila.png'
// import Bita from '../../img/tools/bita.png'
import kanistra from '../../img/tools/kanistra.png'

const Reference =()=> {
return (
    <div className='container-referance'>
        <div className='avto-container'>
            <div className='max-eff-title'>Максимальная эффективность сборки</div>
            <div className='item-tool'>
                <div className='item-row'>
                    <div className='Zagol-row'>Шурупы по дереву</div>
                    <img src={Samorez} alt='' />
                    <div>
                        Пропорции при закупке:
                    </div>
                    <div className='contRez'>
                        <div className='oper-item01'>
                            25mm
                        </div>
                        <div className='oper-item02'>
                            20%
                        </div>
                        <div className='oper-item01'>
                            45mm
                        </div>
                        <div className='oper-item02'>
                            60%
                        </div>
                        <div className='oper-item01'>
                            75mm
                        </div>
                        <div className='oper-item02'>
                            20%
                        </div>
                    </div>
                </div>    
            </div>
            <div className='item-tool'>
            <div className='item-row'>
                <div className='Zagol-row'>Шуруповерт</div>
                <img src={Shurupovert} alt='' />
                <div>
                    Комплект:
                </div>
                <div className='contRez'>
                    <div className='oper-item01'>
                        Бита под крест
                    </div>
                    <div className='oper-item02'>
                        2 шт
                    </div>
                    <div className='oper-item01'>
                        Аккамуляторы
                    </div>
                    <div className='oper-item02'>
                        2 шт
                    </div>
                    <div className='oper-item01'>
                        Зарядка
                    </div>
                    <div className='oper-item02'>
                        1 шт
                    </div>
                </div>
            </div>    
        </div>
        </div>
        <div className='avto-container'>
            <div className='max-eff-title'>Максимальная мобильность распила</div>
            <div className='item-tool'>
                <div className='item-row'>
                    <div className='Zagol-row'>Бензопила</div>
                    <img src={Benzopila} alt='' />
                    <div>
                        Пропорции при закупке:
                    </div>
                    <div className='contRez'>
                        <div className='oper-item01'>
                            Ключ
                        </div>
                        <div className='oper-item02'>
                            1 шт
                        </div>
                        <div className='oper-item01'>
                            Масло
                        </div>
                        <div className='oper-item02'>
                            0.5 л
                        </div>
                        <div className='oper-item01'>
                            Цепь
                        </div>
                        <div className='oper-item02'>
                            1 шт
                        </div>
                    </div>
                </div>    
            </div>
            <div className='item-tool'>
            <div className='item-row'>
                <div className='Zagol-row'>Бензин</div>
                <img src={kanistra} alt='' />
                <div>
                    Комплект:
                </div>
                <div className='contRez'>
                    <div className='oper-item01'>
                        Канистра
                    </div>
                    <div className='oper-item02'>
                        5 л
                    </div>
                    <div className='oper-item01'>
                        Мерная емкость
                    </div>
                    <div className='oper-item02'>
                        0.5 л
                    </div>
                    <div className='oper-item01'>
                        Воронка
                    </div>
                    <div className='oper-item02'>
                        1 шт
                    </div>
                </div>
            </div>    
        </div>
        </div>
    </div>
)    
}
export default Reference