import { React,Component } from 'react'
import './MebOne.css'
import MartCon from '../../Header/Mart/MartCon'

class MebOne extends Component {
    constructor(props) {
        super(props)
        this.state={
            isShowQR:false
        }
        
    }
    render() {
    return (
        <div>
            <div className='one-container'>
                    <div className='het'>{this.props.name}</div>
                    <img  classname='con-img' alt=''  src={this.props.img}></img>
                    <div className='containerc'>
                        <div className='row-one'>
                            <div className='con-one'>Цена за 1 шт</div>
                            <div className='con-res'>{this.props.woodPrice.toFixed(2)}</div>
                        </div>
                        <div className='row-one'>
                            <div className='con-one'>Цена за {this.props.stuffCount} шт</div>
                            <div className='con-res'>{this.props.woodPriceOptimum.toFixed(2)}</div>
                        </div>
                        <div className='row-one'>
                            <div className='con-one'>Экономия</div>
                            <div className='con-res'>{(this.props.woodPrice*this.props.stuffCount - this.props.woodPriceOptimum).toFixed(2)}</div>
                        </div>
                    </div>

                    <div className='containercount'>
                        <MartCon 
                            name={this.props.name}
                            resultMart={this.props.woodPrice.toFixed(2)} 

                            woodSizeProps00={this.props.woodPice00} 
                            woodSizeProps01={this.props.woodPice01} 
                            woodSizeProps02={this.props.woodPice02} 
                            woodSizeProps03={this.props.woodPice03} 
                            woodSizeProps04={this.props.woodPice04}

                            woodSizeCount00={this.props.woodCount00}
                            woodSizeCount01={this.props.woodCount01}
                            woodSizeCount02={this.props.woodCount02}
                            woodSizeCount03={this.props.woodCount03}
                            woodSizeCount04={this.props.woodCount04}
                            />
                    </div>

                    <div className='cutcont'>
                        <div>
                            <div className='tit-hed'>Доски на 1 шт:</div>
                            {this.props.woodCount00 == null ? null :                   
                            <div className='cutnamefull'>
                                <div className='cut-tit-full'>{this.props.woodPice00}</div>
                                <div className='cut-res-full'>{this.props.woodCount00}</div>
                            </div>
                            }
                            {this.props.woodCount01 == null ? null :
                            <div className='cutnamefull'>
                                <div className='cut-tit-full'>{this.props.woodPice01}</div>
                                <div className='cut-res-full'>{this.props.woodCount01}</div>
                            </div>
                            }
                            {this.props.woodCount02 == null ? null :
                            <div className='cutnamefull'>
                                <div className='cut-tit-full'>{this.props.woodPice02}</div>
                                <div className='cut-res-full'>{this.props.woodCount02}</div>
                            </div>
                            }
                            {this.props.woodCount03 == null ? null :
                            <div className='cutnamefull'>
                                <div className='cut-tit-full'>{this.props.woodPice03}</div>
                                <div className='cut-res-full'>{this.props.woodCount03}</div>
                            </div>
                            }
                        </div>
                        <br></br>
                        <div>
                            <div className='tit-hed'>Распил:</div>  
                                {this.props.woodCutCount00 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut00}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount00}</div>
                                </div> 
                                }
                                {this.props.woodCutCount01 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut01}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount01}</div>
                                </div>
                                }
                                {this.props.woodCutCount02 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut02}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount02}</div>
                                </div>
                                }
                                {this.props.woodCutCount03 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut03}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount03}</div>
                                </div>
                                }
                                {this.props.woodCutCount04 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut04}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount04}</div>
                                </div>
                                } 
                                {this.props.woodCutCount05 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut05}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount05}</div>
                                </div>
                                } 
                                {this.props.woodCutCount06 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut06}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount06}</div>
                                </div>
                                } 
                                {this.props.woodCutCount07 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut07}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount07}</div>
                                </div>
                                } 
                                {this.props.woodCutCount08 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut08}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount08}</div>
                                </div>
                                } 
                                {this.props.woodCutCount09 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut09}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount09}</div>
                                </div>
                                } 
                                {this.props.woodCutCount10 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCut10}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutCount10}</div>
                                </div>
                                } 
                        </div>
                        <br></br>
                        <div>{this.props.woodCutRest00== null ? null :
                            <div className='tit-hed'>Остатки:</div> }
                                {this.props.woodCutRestCount00 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCutRest00}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutRestCount00}</div>
                                </div>
                                }
                                {this.props.woodCutRestCount01 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-tit-pice'>{this.props.woodCutRest01}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutRestCount01}</div>
                                </div>
                                }
                                {this.props.woodCutRestCount02 == null ? null :
                                <div className='cutCount'>
                                    <div className='cut-res-pice'>{this.props.woodCutRest02}</div>
                                    <div className='cut-res-pice'>{this.props.woodCutRestCount02}</div>
                                </div>
                                }
                        </div>
                    </div>  
                <button className='btn-qr' onClick={()=> this.setState({isShowQR:!this.state.isShowQR})}>{
                this.state.isShowQR? 'Скрыть ' : 'Показать '} QR-code</button>  
            </div>
            {
                this.state.isShowQR ? 
                <div className='main-container'>
                    <img alt='' src={this.props.codeQR} />
                </div> : null   
            }
     </div>
    )
}
}
export default MebOne