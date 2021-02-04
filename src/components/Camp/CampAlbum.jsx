import './CampAlbum.css'
import torch_type_a from '../../img/camp/torch_type_a.png'
import MebOne from '../Furniture/MebEl/MebOne'
import MebEl from '../Furniture/MebEl/MebEl'
import { useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

const Camp =()=> {
        let priceWood = useSelector(state =>state.counter.calc.sizePrice)
        let sizeWood = useSelector(state =>state.counter.calc.woodSize)
    
        return (
            <BrowserRouter>
                <Route path='/camp/id=1' render={() => 
                    <MebOne 
                        id='1'
                        name='Кастровище 2000*2000*450'
                        img={torch_type_a}
                        woodPrice={priceWood[1]*4 + priceWood[2]} 
                        woodPriceOptimum={priceWood[1]*4 + priceWood[2]}
                        stuffCount={1}
    
                        woodPice00={sizeWood[1]} woodCount00={4}
                        woodPice01={sizeWood[2]} woodCount01={1}
    
                        woodCut00={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*2000'}
                        woodCutCount00={12}
                        woodCut01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*500'}
                        woodCutCount01={4}
    
                        woodCutRest00={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*4000'}
                        woodCutRestCount00={1}
                    />
                    }/>
                    <div className='container'>
                        <NavLink  className='link' to='/camp/id=1'>
                            <MebEl className='item-link'
                                    id='1'
                                    name='Кастровище 2000*2000*450'
                                    img={torch_type_a}
                                    woodPrice={priceWood[1]*4 + priceWood[2]} 
                                    woodPriceOptimum={priceWood[1]*4 + priceWood[2]}
                                    stuffCount={1}
                                    />
                        </NavLink>
                    </div>
        </BrowserRouter>
        )
}
export default Camp