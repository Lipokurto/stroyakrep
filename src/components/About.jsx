import './About.css';

const About =()=> {
    return (
        <div className='text-con'>
            <div>
                Автор сайта:  
                <a target="_blank" rel="noreferrer" href="https://vk.com/alex_sin_cube"> Alex Sin (Басист)</a>
            </div>
            <br></br>
            <div>
                Если хотите поддержать проект:  
            </div>
            <div className='req'>
                <div>
                    Яндекс кошелек: 410012149694658    
                </div>
                <div>
                    Карта: 5599 0050 8661 9900    
                </div>
            </div>
            <br></br>
            <div>
                Этот сайт создан с цельбью облегчить поиски чертежей для быстрого создания строений
            </div>
            <div>
                Сайт еще будет дополняться различными чертежами
            </div>
            <div>
                Если вы обнаружили ошибку в рассчетах - то свяжитесь с автором и расскажите где замечены расхождения
            </div>
            <div>
                Если у вас есть чертежи для выставления на сайт, то свяжитесь с автором 
            </div>
            <br></br>
            <h4>
               07.02.2021
            </h4>
            <div>
               Изменена внешность Калькулятора
            </div>
            <div>
               Исправлен оптимум объекта Стена 2000*2000*1000
            </div>
            <div>
            Добавлен элемент:  Лагерь / "Доспешная стойка 2000*1000*1000"
            </div>
            <div>
            Добавлен элемент:  Мебель / "Табурет 525*600*600"
            </div>
            <div>
            Страница "О сайте" стала заглавной
            </div>
            <div>
            Добавлены реквизиты для поддержки проекта
            </div>
            <div>
            Добавлены QR коды с картой распила
            </div>
            <h4>
               06.02.2021
            </h4>
            <div>
               Исправлены значение оптимальной закупки столов 2000*600*750
            </div>
            <div>
               Исправлены некоторые орфографические ошибки
            </div>
            <div>
               Добавлен элемент:  Лагерь / "Оружейная стойка 2000*2000*1000"
            </div>
        </div>
    )
}
export default About