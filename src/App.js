import React, { useEffect } from 'react';
import Home from './screens/Home.js';
import ProductAPI from './services/ProductAPI.js';
import './styles/base.scss';
import './styles/_variables.scss';

function App() {

  //pegando a lista total de produtos
  useEffect(()  => {
    const loadAll = async () => {
      let list = await ProductAPI.getHomeList();
      console.log(list);
    }
    loadAll();
  }, []);


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
