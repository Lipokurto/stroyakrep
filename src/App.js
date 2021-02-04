import React from 'react'
import './App.css';
import WoodCalc from './components/WoodCalc/WoodCalc';
import DefenseAlbum from './components/Defense/DefenseAlbum'
import FunrnitureAlbum from './components/Furniture/FurnitureAlbum';
import Header from './components/Header/Header';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div className='hed'><Header /></div>
        <Route path='/furniture' render={()=> 
          <div className='main'><FunrnitureAlbum /></div> 
        }/>
        <Route path='/defense' render={()=> 
          <div className='main'><DefenseAlbum /></div> 
        }/>
        <div className='cont-link'>
          <NavLink to='/furniture'>
            <button className='btn-side'>Мебель</button>
          </NavLink>
          <NavLink to='/defense'>
            <button className='btn-side'>Оборона</button>
          </NavLink>
        </div>
        <div className='calc'><WoodCalc /> </div>
      </div> 
    </BrowserRouter> 
  )
}

export default App;
