import './DefenseAlbum.css'
import yoz_type_a from '../../img/def/yoz_type_a.png'
import wall_type_b from '../../img/def/wall_type_b.png'
import MebOne from '../Furniture/MebEl/MebOne'
import MebEl from '../Furniture/MebEl/MebEl'
import { useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

const Defense =()=> {
        let priceWood = useSelector(state =>state.counter.calc.sizePrice)
        let sizeWood = useSelector(state =>state.counter.calc.woodSize)
    
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
    
                        woodPice00={sizeWood[4]} woodCount00={1}
                        woodPice01={sizeWood[2]} woodCount01={2}
    
                        woodCut00={sizeWood[4].split('*')[0] + '*' +sizeWood[4].split('*')[1]+'*2000'}
                        woodCutCount00={1}
                        woodCut01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1500'}
                        woodCutCount01={8}
    
                        woodCutRest00={sizeWood[4].split('*')[1] + '*' +sizeWood[4].split('*')[1]+'*4000'}
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
    
                        woodCutRest00={sizeWood[0].split('*')[1] + '*' +sizeWood[0].split('*')[1]+'*4000'}
                        woodCutRestCount00={1}
    
                    />
                    }/>
    
                    <div className='container'>
                        <NavLink  className='link' to='/defense/id=1'>
                            <MebEl className='item-link'
                                    id='1'
                                    name='Еж тяжелый 2000*1500*1500'
                                    img={yoz_type_a}
                                    woodPrice={priceWood[4] + priceWood[2]*2} 
                                    woodPriceOptimum={priceWood[4] + priceWood[2]*6}
                                    stuffCount={3}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/defense/id=2'>
                            <MebEl className='item-link'
                                    id='2'
                                    name='Стена 2000*2000*1000'
                                    img={wall_type_b}
                                    woodPrice={priceWood[0]*2 + priceWood[2]} 
                                    woodPriceOptimum={priceWood[0]*4 + priceWood[2]*3}
                                    stuffCount={3}
                                    />
                        </NavLink>
                    </div>
        </BrowserRouter>
        )
    
}
export default Defense