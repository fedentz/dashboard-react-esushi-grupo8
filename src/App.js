/* import logo from './logo.svg'; */
import './App.css';

import Header from './components/header'
import LastProduct from "./components/lastProduct";
import TotalUsers from './components/totalUsers'
import TotalCategorias from './components/totalProductsXCategory'
import ListProducts from './components/productList'
import CuantaCategoria from './components/totalCategories'
import TotalProducts from './components/totalProducts'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-products'>
        <div className='App-izquierda'>
          <ListProducts />
        </div>
        <div className='App-derecha'>
          <TotalProducts />
          <LastProduct />  
          <CuantaCategoria />
          <TotalCategorias />
        </div>
      </div>
      <div className='App-users'>
        <TotalUsers />
      </div>
    </div>
  );
}

export default App;
