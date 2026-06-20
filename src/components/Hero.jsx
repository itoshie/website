import React from 'react'
import heroImage from '../assets/hero.svg'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">COMMUTE TO GETAWAY</div>
          <h2 className="hero-title">TRAVEL TECH POLO</h2>
          <div className="hero-features">
            <span>ANTIMICROBIAL</span>
            <span>SOFT & BREATHABLE</span>
            <span>UPF PROTECTION</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrap">
            <img src={heroImage} alt="model by pool" />
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <button className="arrow left">‹</button>
        <div className="dots">
          <span className="dot" />
          <span className="dot active" />
          <span className="dot" />
        </div>
        <button className="arrow right">›</button>
      </div>
    </section>
  )
}
