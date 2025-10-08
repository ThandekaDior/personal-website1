// import { useState } from 'react'
import cowLogo from './assets/heartshades.jpeg'
import './App.css'

function App() {
  return (
    <><div className="logo-wrapper">
      <img src={cowLogo} className="logo" alt="Cow meme logo" />
    </div>
    
    <div className="homepage">
        <header>
          <h1>Thandeka Mtila</h1>
          <p>Systems Thinker • Programmer • Artist</p>
        </header>

        <section className="about">
          <h2>About Me</h2>
          <p>I blend backend architecture, creative storytelling, and meaningful projects into modular, joyful experiences.</p>
        </section>

        <section className="projects">
          <h2>Featured Projects</h2>
          {/* Add project cards or links here */}
        </section>

        <section className="contact">
          <h2>Let's Connect</h2>
          <p>Email: georgietdk@gmail.com</p>
          {/* Add social links or a form */}
        </section>
      </div>
      
      <div className="petal-container">
        {[...Array(10)].map((_, i) => {
          const randomX = Math.random();
          const randomSpeed = 8 + Math.random() * 8;

          return (
            <div
              key={i}
              className="petal"
              style={
                {
                  '--i': randomX,
                  animationDuration: `${randomSpeed}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
      
      </>
      
  )
}

export default App;

