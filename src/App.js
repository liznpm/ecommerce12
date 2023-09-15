import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';



import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card1 from './components/Card1';
import Card5 from './components/Card5';
import Comida from './components/Comida';


import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Publicidad from './components/Publicidad';










function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      
      <Card1 />

      <Card4 />
      <Card3 />

      <Comida/>

      <Card5/>
      <Info/>



      <Carousel />
      
  <Publicidad />

      <Footer />











      {/* Agrega más componentes o contenido aquí */}
    </div>
  );
}

export default App;
