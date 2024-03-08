import {Route, Routes} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Watches } from "./components/Watches";
import { Notebooks } from './components/Notebooks/Notebooks';
import { Tablets } from './components/Tablets/Tablets';

import './styles/main.scss'


function App() {

  return (
    <>
      <Header />
      <h1 className="title">SHALOM SHOP</h1>
      <p className="text">Купуєш на сайті- доставка за наш рахунок</p>
      <Routes>
        <Route path="/" element={<Watches />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/tablets" element={<Tablets />} />
      </Routes>

    </>
  )
}

export default App
