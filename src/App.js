import React from 'react'
import './App.css';
import WoodCalc from './components/WoodCalc/WoodCalc';
import DefenseAlbum from './components/Defense/DefenseAlbum'
import FunrnitureAlbum from './components/Furniture/FurnitureAlbum';
import Header from './components/Header/Header';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Camp from './components/Camp/CampAlbum';
import About from './components/About';
import MartOne from './components/Header/Mart/MartEl/MartOne';
import Reference from './components/Reference/Reference'



function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div className='hed'><Header /></div>
        <Route exact path="/">
          <About />
        </Route>
        <Route path='/checklist' render={()=> 
          <div className='main'><MartOne /></div> 
        }/>
        <Route path='/furniture' render={()=> 
          <div className='main'><FunrnitureAlbum /></div> 
        }/>
        <Route path='/defense' render={()=> 
          <div className='main'><DefenseAlbum /></div> 
        }/>
        <Route path='/camp' render={()=> 
          <div className='main'><Camp /></div> 
        }/>
        <Route path='/about' render={()=> 
          <div className='main'><About /></div> 
        }/>
        <Route path='/reference' render={()=> 
          <div className='main'><Reference /></div> 
        }/>
        <div className='calc'>
          <WoodCalc /> 
          <div className='cont-link'>
          <NavLink to='/checklist'>
            <button className='btn-side'>Чек-лист</button>
          </NavLink>
          <NavLink to='/furniture'>
            <button className='btn-side'>Мебель</button>
          </NavLink>
          <NavLink to='/defense'>
            <button className='btn-side'>Оборона</button>
          </NavLink>
          <NavLink to='/camp'>
            <button className='btn-side'>Лагерь</button>
          </NavLink>
          <NavLink to='/about'>
            <button className='btn-side'>О сайте</button>
          </NavLink>
          {/* <NavLink to='/reference'>
            <button className='btn-side'>Рекомендации</button>
          </NavLink> */}
          </div>
        </div>
      </div> 
    </BrowserRouter> 
  )
}

export default App;
