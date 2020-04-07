import React from 'react'
import logo from './logo.svg'
import './App.css'
//import * as JSSynth from 'js-synthesizer'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <input
        type='file'
        onChange={e => {
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onload = e => {
            //const synth = new JSSynth.Synthesizer()
          }
          reader.readAsArrayBuffer(file)
        }}
      />
    </div>
  )
}

export default App
