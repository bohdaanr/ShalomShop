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
      <Routes>
        <Route path="/" element={<Watches />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/tablets" element={<Tablets />} />
      </Routes>

    </>
  )
}

export default App
