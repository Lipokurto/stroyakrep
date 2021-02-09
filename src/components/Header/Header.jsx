import './Header.css'
import logoWhite from '../../img/work/logoWhite.png'
// import MartCon from './Mart/MartCon'
import MartEl from './Mart/MartEl/MartEl'

const Header =()=> {
    return (
        <div className='container-hed'>
            <div className='header-title-lrInf'>
                LarpInfo
            </div>
            <img src={logoWhite} alt='' className='logo'/>
            <div className='header-title-calc'>
                Строяк
            </div>
            <div className='header-title2'>
                <MartEl />
            </div>
        </div>
    )
}
export default Header