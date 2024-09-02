import { useState } from 'react';
import './App.css';
import Generator from './component/Generator.jsx'

function App() {

  return (
    <>
      <h1>Generador de contraseña</h1>
      <div className="card">
        <Generator/>
      </div>
    </>
  )
}

export default App
