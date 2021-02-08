import './CampAlbum.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

import torch_type_a from '../../img/camp/torch_type_a.png'
import straite_type_b from '../../img/camp/straite_type_b.png'
import dosp_type_c from '../../img/camp/dosp_type_c.png'
import Tualet10007502000 from '../../img/camp/Tualet10007502000.png'
import stolb7507502000 from '../../img/camp/stolb7507502000.png'

import Kostravishe20002000450 from '../../img/camp/Kostravishe20002000450.gif'
import orujstoyka200020001000 from '../../img/camp/orujstoyka200020001000.gif'
import dospehsoyka200010001000 from '../../img/camp/dospehsoyka200010001000.gif'
import Tualet10007502000qr from '../../img/camp/Tualet10007502000.gif'
import stolb7507502000qr from '../../img/camp/stolb7507502000.gif'

import MebOne from '../Furniture/MebEl/MebOne'
import MebEl from '../Furniture/MebEl/MebEl'

const Camp =()=> {
        let priceWood = useSelector(state =>state.counter.calc.sizePrice)
        let sizeWood = useSelector(state =>state.counter.calc.woodSize)
    
        return (
            <BrowserRouter>
                <Route path='/camp/id=1' render={() => 
                    <MebOne 
                        id='1'
                        name='Костровище 2000*2000*450'
                        img={torch_type_a}
                        woodPrice={priceWood[1]*4 + priceWood[2]} 
                        woodPriceOptimum={priceWood[1]*4 + priceWood[2]}
                        stuffCount={1}
                        codeQR={Kostravishe20002000450}
    
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
                <Route path='/camp/id=2' render={() => 
                    <MebOne 
                        id='2'
                        name='Оружейная стойка 2000*2000*1000'
                        img={straite_type_b}
                        woodPrice={priceWood[0]*3} 
                        woodPriceOptimum={priceWood[0]*3}
                        stuffCount={1}
                        codeQR={orujstoyka200020001000}
    
                        woodPice00={sizeWood[0]} woodCount00={3}
    
                        woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*2000'}
                        woodCutCount00={7}
                        woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1000'}
                        woodCutCount01={4}
                    />
                    }/>
                <Route path='/camp/id=3' render={() => 
                    <MebOne 
                        id='3'
                        name='Доспешная стойка 2000*1000*1000'
                        img={dosp_type_c}
                        woodPrice={priceWood[0] + priceWood[2]} 
                        woodPriceOptimum={priceWood[0] + priceWood[2]}
                        stuffCount={1}
                        codeQR={dospehsoyka200010001000}
    
                        woodPice00={sizeWood[0]} woodCount00={1}
                        woodPice01={sizeWood[2]} woodCount01={1}
    
                        woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1000'}
                        woodCutCount00={5}
                        woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*500'}
                        woodCutCount01={2}
                        woodCut02={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1000'}
                        woodCutCount02={2}
                        woodCut03={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*500'}
                        woodCutCount03={2}
                        woodCut04={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*2000'}
                        woodCutCount04={1}
                    />
                    }/>
                <Route path='/camp/id=4' render={() => 
                <MebOne 
                    id='4'
                    name='Туалет 1000*750*2000'
                    img={Tualet10007502000}
                    woodPrice={priceWood[0] + priceWood[1] + priceWood[2]*2} 
                    woodPriceOptimum={priceWood[0] + priceWood[1] + priceWood[2]*2}
                    stuffCount={1}
                    codeQR={Tualet10007502000qr}

                    woodPice00={sizeWood[0]} woodCount00={1}
                    woodPice01={sizeWood[1]} woodCount01={1}
                    woodPice02={sizeWood[2]} woodCount02={2}
                    
                    woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1000'}
                    woodCutCount00={1}
                    woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*750'}
                    woodCutCount01={4}
                    woodCut02={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*625'}
                    woodCutCount02={2}
                    woodCut03={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*250'}
                    woodCutCount03={1}
                    woodCut04={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*200'}
                    woodCutCount04={1}
                    woodCut05={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*750'}
                    woodCutCount05={4}
                    woodCut06={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*250'}
                    woodCutCount06={1}
                    woodCut07={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*200'}
                    woodCutCount07={1}
                    woodCut08={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*850'}
                    woodCutCount08={3}
                    woodCut09={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*2000'}
                    woodCutCount09={4}
                    woodCut10={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1000'}
                    woodCutCount10={4}

                    woodCutRest00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*300'}
                    woodCutRestCount00={1}
                    woodCutRest01={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*1700'}
                    woodCutRestCount01={1}
                />
                }/>
                <Route path='/camp/id=5' render={() => 
                    <MebOne 
                        id='5'
                        name='Столб 750*750*2000'
                        img={stolb7507502000}
                        woodPrice={priceWood[2]} 
                        woodPriceOptimum={priceWood[2]}
                        stuffCount={1}
                        codeQR={stolb7507502000qr}
    
                        woodPice00={sizeWood[2]} woodCount00={1}
    
                        woodCut00={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*2000'}
                        woodCutCount00={1}
                        woodCut01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*1000'}
                        woodCutCount01={4}
                    />
                    }/>
                    <div className='container'>
                        <NavLink  className='link' to='/camp/id=1'>
                            <MebEl className='item-link'
                                    id='1'
                                    name='Костровище 2000*2000*450'
                                    img={torch_type_a}
                                    woodPrice={priceWood[1]*4 + priceWood[2]} 
                                    woodPriceOptimum={priceWood[1]*4 + priceWood[2]}
                                    stuffCount={1}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/camp/id=2'>
                            <MebEl className='item-link'
                                    id='2'
                                    name='Оружейная стойка 2000*2000*1000'
                                    img={straite_type_b}
                                    woodPrice={priceWood[0]*3} 
                                    woodPriceOptimum={priceWood[0]*3}
                                    stuffCount={1}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/camp/id=3'>
                            <MebEl className='item-link'
                                    id='3'
                                    name='Доспешная стойка 2000*1000*1000'
                                    img={dosp_type_c}
                                    woodPrice={priceWood[0] + priceWood[2]} 
                                    woodPriceOptimum={priceWood[0] + priceWood[2]}
                                    stuffCount={1}
                                    />
                        </NavLink>
                        <NavLink  className='link' to='/camp/id=4'>
                        <MebEl 
                                id='4'
                                name='Туалет 1000*750*2000'
                                img={Tualet10007502000}
                                woodPrice={priceWood[0] + priceWood[1] + priceWood[2]*2} 
                                woodPriceOptimum={priceWood[0] + priceWood[1] + priceWood[2]*2}
                                stuffCount={1}
                                />
                        </NavLink>
                        <NavLink  className='link' to='/camp/id=5'>
                        <MebEl 
                                id='5'
                                name='Столб 750*750*2000'
                                img={stolb7507502000}
                                woodPrice={priceWood[2]} 
                                woodPriceOptimum={priceWood[2]}
                                stuffCount={1}
                                />
                        </NavLink>
                    </div>
        </BrowserRouter>
        )
}
export default Camp