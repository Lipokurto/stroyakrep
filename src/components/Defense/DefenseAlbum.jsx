import './DefenseAlbum.css'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import {removeCount} from '../../actions'

import yoz_type_a from '../../img/def/yoz_type_a.png'
import wall_type_b from '../../img/def/wall_type_b.png'
import vorotaImg from '../../img/def/vorota300025002000.png'

import stena200020001000 from '../../img/def/stena200020001000.gif'
import ej200015001500 from '../../img/def/ej200015001500.gif'
import vorota250030002000 from '../../img/def/VorotaGif.gif'


import MebOne from '../Furniture/MebEl/MebOne'
import MebEl from '../Furniture/MebEl/MebEl'

const Defense =()=> {
        let priceWood = useSelector(state =>state.counter.calc.sizePrice)
        let sizeWood = useSelector(state =>state.counter.calc.woodSize)
        const dispatch = useDispatch()
        return (
            <BrowserRouter>
                <Route path='/defense/id=1' render={() => 
                    <MebOne 
                        id='1'
                        name='Еж тяжелый 2000*1500*1500'
                        img={yoz_type_a}
                        woodPrice={priceWood[4] + priceWood[2]*2} 
                        woodPriceOptimum={priceWood[4] + priceWood[2]*6}
                        stuffCount={3}
                        codeQR={ej200015001500}
    
                        woodPice00={sizeWood[4]} woodCount00={1}
                        woodPice01={sizeWood[2]} woodCount01={2}
    
                        woodCut00={sizeWood[4].split('*')[0] + '*' +sizeWood[4].split('*')[1]+'*2000'}
                        woodCutCount00={1}
                        woodCut01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1500'}
                        woodCutCount01={8}
    
                        woodCutRest00={sizeWood[4].split('*')[0] + '*' +sizeWood[4].split('*')[1]+'*4000'}
                        woodCutRestCount00={1}
    
                    />
                    }/>
                <Route path='/defense/id=2' render={() => 
                    <MebOne 
                        id='2'
                        name='Стена 2000*2000*1000'
                        img={wall_type_b}
                        woodPrice={priceWood[0]*2 + priceWood[2]} 
                        woodPriceOptimum={priceWood[0]*4 + priceWood[2]*3}
                        stuffCount={3}
                        codeQR={stena200020001000}
    
                        woodPice00={sizeWood[0]} woodCount00={2}
                        woodPice01={sizeWood[2]} woodCount01={1}
    
                        woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*2000'}
                        woodCutCount00={3}
                        woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1000'}
                        woodCutCount01={2}
                        woodCut02={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*2000'}
                        woodCutCount02={2}
                        woodCut03={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1000'}
                        woodCutCount03={2}
    
                        woodCutRest00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*4000'}
                        woodCutRestCount00={1}
    
                    />
                    }/>
                <Route path='/defense/id=3' render={() => 
                    <MebOne 
                        id='3'
                        name='Ворота 3000*2500*2000'
                        img={vorotaImg}
                        woodPrice={priceWood[3]*2 + priceWood[0]*7 + priceWood[2]*2} 
                        woodPriceOptimum={priceWood[3]*2 + priceWood[0]*7 + priceWood[2]*2}
                        stuffCount={1}
                        codeQR={vorota250030002000}
    
                        woodPice00={sizeWood[0]} woodCount00={7}
                        woodPice01={sizeWood[2]} woodCount01={2}
                        woodPice02={sizeWood[3]} woodCount02={2}
    
                        woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1000'}
                        woodCutCount00={2}
                        woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1500'}
                        woodCutCount01={8}
                        woodCut02={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*2000'}
                        woodCutCount02={4}
                        woodCut03={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*2500'}
                        woodCutCount03={4}
                        woodCut04={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*2750'}
                        woodCutCount04={2}
                        woodCut05={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*2000'}
                        woodCutCount05={4}
                        woodCut06={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1500'}
                        woodCutCount06={2}
                        woodCut07={sizeWood[3].split('*')[0] + '*' +sizeWood[3].split('*')[1]+'*5000'}
                        woodCutCount07={1}
                        woodCut08={sizeWood[3].split('*')[0] + '*' +sizeWood[3].split('*')[1]+'*3000'}
                        woodCutCount08={2}
                        woodCut09={sizeWood[3].split('*')[0] + '*' +sizeWood[3].split('*')[1]+'*500'}
                        woodCutCount09={4}
    
                        woodCutRest00={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1000'}
                        woodCutRestCount00={1}
                        woodCutRest01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*500'}
                        woodCutRestCount01={1}
    
                    />
                    }/>
    
                    <div className='container'>
                        <NavLink  className='link' to='/defense/id=1' onClick={()=>dispatch(removeCount())}>
                            <MebEl className='item-link'
                                    id='1'
                                    name='Еж тяжелый 2000*1500*1500'
                                    img={yoz_type_a}
                                    woodPrice={priceWood[4] + priceWood[2]*2} 
                                    woodPriceOptimum={priceWood[4] + priceWood[2]*6}
                                    stuffCount={3}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/defense/id=2' onClick={()=>dispatch(removeCount())}>
                            <MebEl className='item-link'
                                    id='2'
                                    name='Стена 2000*2000*1000'
                                    img={wall_type_b}
                                    woodPrice={priceWood[0]*2 + priceWood[2]} 
                                    woodPriceOptimum={priceWood[0]*4 + priceWood[2]*3}
                                    stuffCount={3}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/defense/id=3' onClick={()=>dispatch(removeCount())}>
                            <MebEl className='item-link'
                                    id='3'
                                    name='Ворота 3000*2500*2000'
                                    img={vorotaImg}
                                    woodPrice={priceWood[3]*2 + priceWood[0]*7 + priceWood[2]*2} 
                                    woodPriceOptimum={priceWood[3]*2 + priceWood[0]*7 + priceWood[2]*2}
                                    stuffCount={1}
                                    />
                        </NavLink>
                    </div>
        </BrowserRouter>
        )
    
}
export default Defense