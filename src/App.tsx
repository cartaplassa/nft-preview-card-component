import equilibrium from '/image-equilibrium.jpg'
import iconEth from '/icon-ethereum.svg'
import iconClock from '/icon-clock.svg'
import iconView from '/icon-view.svg'
import avatar from '/image-avatar.png'
import './App.scss'

  function App() {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={equilibrium} alt="NFT" />
        <div className="card__overlay">
          <img className="card__view" src={iconView} alt="view" />
        </div>
      </div>
      <h1 className="card__title highlighted">Equilibrium #3429</h1>
      <p className="card__description">Our Equilibrium collection promotes balance and calm.</p>
      <div className="card__data">
        <div className="card__price vert-center">
          <img src={iconEth} /> 0.041 ETH
        </div>
        <div className="card__time vert-center">
          <img src={iconClock} /> 3 days left
        </div>
      </div>
      <div className="card__attribution">
        <img className="card__avatar" src={avatar} /> Creation of 
        <span className="card__author highlighted">Jules Wyvern</span>
      </div>
    </div>
  )

  //return (
  //  <>
  //    <div class="card">
  //      <img src={} alt="" />
  //    </div>
  //    <div>
  //      <a href="https://vitejs.dev" target="_blank">
  //        <img src={viteLogo} className="logo" alt="Vite logo" />
  //      </a>
  //      <a href="https://react.dev" target="_blank">
  //        <img src={reactLogo} className="logo react" alt="React logo" />
  //      </a>
  //    </div>
  //    <h1>Vite + React</h1>
  //    <div className="card">
  //      <button onClick={() => setCount((count) => count + 1)}>
  //        count is {count}
  //      </button>
  //      <p>
  //        Edit <code>src/App.tsx</code> and save to test HMR
  //      </p>
  //    </div>
  //    <p className="read-the-docs">
  //      Click on the Vite and React logos to learn more
  //    </p>
  //  </>
  //)
}

export default App
