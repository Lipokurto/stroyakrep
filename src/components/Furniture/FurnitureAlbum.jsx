import { useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './FurnitureAlbum.css'

import table_type_b from '../../img/furn/table_type_b.png'
import bench_type_a from '../../img/furn/bench_typ_a.png'
import table_type_c from '../../img/furn/table_type_c.png'
import taburet_Type_d from '../../img/furn/taburet_Type_d.png'

import skameyka1500200500 from '../../img/furn/Skameyka1500200500.gif'
import stol2000600750 from '../../img/furn/stol2000600750.gif'
import stol1500600750 from '../../img/furn/stol1500600750.gif'
import taburet525600600 from '../../img/furn/taburet525600600.gif'

import MebEl from './MebEl/MebEl'
import MebOne from './MebEl/MebOne'

function FurnitureAlbum() {
    let priceWood = useSelector(state =>state.counter.calc.sizePrice)
    let sizeWood = useSelector(state =>state.counter.calc.woodSize)

    return (
        <BrowserRouter>
            <Route path='/furniture/id=1' render={() => 
                <MebOne 
                    id='1'
                    name='Скамейка 1500*200*500'
                    img={bench_type_a}
                    woodPrice={priceWood[0] + priceWood[2]} 
                    woodPriceOptimum={priceWood[0]*4 + priceWood[2]}
                    stuffCount={4}
                    codeQR={skameyka1500200500}

                    woodPice00={sizeWood[0]} woodCount00={1}
                    woodPice01={sizeWood[2]} woodCount01={1}

                    woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1500'}
                    woodCutCount00={2}
                    woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*300'}
                    woodCutCount01={3}
                    woodCut02={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*500'}
                    woodCutCount02={4}
                    woodCut03={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*200'}
                    woodCutCount03={2}
                    woodCut04={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*500'}
                    woodCutCount04={2}

                    woodCutRest00={sizeWood[0].split('*')[1] + '*' +sizeWood[0].split('*')[1]+'*100'}
                    woodCutRestCount00={1}
                    woodCutRest01={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*4600'}
                    woodCutRestCount01={1}

                />
                }/>
            <Route path='/furniture/id=2' render={() => 
                <MebOne 
                    id='2'
                    name='Стол 2000*600*750'
                    img={table_type_b}
                    woodPrice={priceWood[1]*2 + priceWood[0] + priceWood[2]} 
                    woodPriceOptimum={priceWood[1]*4 + priceWood[0]*3 + priceWood[2]*2}
                    stuffCount={3}
                    codeQR={stol2000600750}

                    woodPice00={sizeWood[1]} woodCount00={2}
                    woodPice01={sizeWood[0]} woodCount01={1}
                    woodPice02={sizeWood[2]} woodCount02={1}

                    woodCut00={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*2000'}
                    woodCutCount00={4}
                    woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*750'}
                    woodCutCount01={4}
                    woodCut02={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*500'}
                    woodCutCount02={3}
                    woodCut03={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*750'}
                    woodCutCount03={2}
                    woodCut04={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*500'}
                    woodCutCount04={2}

                    woodCutRest00={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*4000'}
                    woodCutRestCount00={1}
                    woodCutRest01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1500'}
                    woodCutRestCount01={1}
                    woodCutRest02={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*3500'}
                    woodCutRestCount02={1}
                />
                }/>
            <Route path='/furniture/id=3' render={() => 
                <MebOne 
                    id='3'
                    name='Стол 1500*600*750'
                    img={table_type_c}
                    woodPrice={priceWood[1]*1 + priceWood[0] + priceWood[2]} 
                    woodPriceOptimum={priceWood[1]*4 + priceWood[0]*3 + priceWood[2]*2}
                    stuffCount={3}
                    codeQR={stol1500600750}

                    woodPice00={sizeWood[1]} woodCount00={1}
                    woodPice01={sizeWood[0]} woodCount01={1}
                    woodPice02={sizeWood[2]} woodCount02={1}

                    woodCut00={sizeWood[1].split('*')[0] + '*' +sizeWood[1].split('*')[1]+'*1500'}
                    woodCutCount00={4}
                    woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*750'}
                    woodCutCount01={4}
                    woodCut02={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*500'}
                    woodCutCount02={3}
                    woodCut03={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*750'}
                    woodCutCount03={2}
                    woodCut04={sizeWood[2].split('*')[1] + '*' +sizeWood[2].split('*')[1]+'*500'}
                    woodCutCount04={2}

                    woodCutRest00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*1500'}
                    woodCutRestCount00={1}
                    woodCutRest01={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*3500'}
                    woodCutRestCount01={1}
                />
                }/>
            <Route path='/furniture/id=4' render={() => 
                <MebOne 
                    id='4'
                    name='Табурет 525*600*600'
                    img={taburet_Type_d}
                    woodPrice={priceWood[0] + priceWood[2]} 
                    woodPriceOptimum={priceWood[0] + priceWood[2]}
                    stuffCount={1}
                    codeQR={taburet525600600}

                    woodPice00={sizeWood[0]} woodCount00={1}
                    woodPice01={sizeWood[2]} woodCount01={1}
                    
                    woodCut00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*500'}
                    woodCutCount00={4}
                    woodCut01={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*600'}
                    woodCutCount01={6}
                    woodCut02={sizeWood[2].split('*')[0] + '*' +sizeWood[2].split('*')[1]+'*500'}
                    woodCutCount02={12}

                    woodCutRest00={sizeWood[0].split('*')[0] + '*' +sizeWood[0].split('*')[1]+'*400'}
                    woodCutRestCount00={1}
                />
                }/>


                <div className='container'>
                    <NavLink  className='link' to='/furniture/id=1'>
                        <MebEl className='item-link'
                                id='2'
                                name='Скамейка 1500*200*500'
                                img={bench_type_a}
                                woodPrice={priceWood[0] + priceWood[2]} 
                                woodPriceOptimum={priceWood[0]*4 + priceWood[2]}
                                stuffCount={4}
                                />
                    </NavLink>
                    <NavLink  className='link' to='/furniture/id=2'>
                        <MebEl 
                                name='Стол 2000*600*750'
                                img={table_type_b}
                                woodPrice={priceWood[1]*2 + priceWood[0] + priceWood[2]} 
                                woodPriceOptimum={priceWood[1]*4 + priceWood[0]*3 + priceWood[2]*2}
                                stuffCount={3}
                                />
                    </NavLink>
                    <NavLink  className='link' to='/furniture/id=3'>
                        <MebEl 
                                name='Стол 1500*600*750'
                                img={table_type_c}
                                woodPrice={priceWood[1] + priceWood[0] + priceWood[2]} 
                                woodPriceOptimum={priceWood[1]*4 + priceWood[0]*4 + priceWood[2]*2}
                                stuffCount={4}
                                />
                    </NavLink>
                    <NavLink  className='link' to='/furniture/id=4'>
                        <MebEl 
                                name='Табурет 525*600*600'
                                img={taburet_Type_d}
                                woodPrice={priceWood[0] + priceWood[2]} 
                                woodPriceOptimum={priceWood[0] + priceWood[2]}
                                stuffCount={1}
                                />
                    </NavLink>
                </div>
    </BrowserRouter>
    )
}

export default FurnitureAlbum