import React from 'react';
import Logo from '/logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <a href="https://amblatt.com" target="_blank" rel="noopener noreferrer">
          <img src={Logo} className="logo" alt="Amblatt logo" />
        </a>
      </header>
      <main className="main-content">
        <h1>Amblatt <br />Melamine Board Retail</h1>


        <section className="description">
          <h3>Explore Our Range of Melamine Boards</h3>
          <p>
          <b>Taste is different, just like our decor boards.</b> With more than 200 creative decors and a variety of surface structures, your creativity knows no bounds. Whether you’re looking for monochrome decors, customized surfaces, Natural Touch finishes, wood decors, or fantasy designs, our collection is both versatile and inspiring.
          </p>
          <p>
            Our decor boards are not only visually appealing but also practical. They are light-fast, impact-resistant, and scratch-resistant, making them ideal for any interior design project. Discover how our high-quality melamine boards can transform your spaces.
          </p>
        </section>
        <h2>Coming soon!</h2>
        <img src="/image.jpg" alt="Amblatt Product" className="product-image" />

      </main>
      <footer className="footer">
        <p>© Amblatt 2024</p>
      </footer>
    </div>
  );
}

export default App;