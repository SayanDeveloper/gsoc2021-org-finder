import { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Axios from 'axios';
import { GlobalContext } from './context/provider';
import Home from './components/Home';

function App() {
  const {all, Filtered} = useContext(GlobalContext);
  const [data, setData] = all;
  const [filtered, setFiltered] = Filtered;
  useEffect(() => {
    Axios.get('https://gist.githubusercontent.com/xprilion/ba620f573af97489410669cf6f087b32/raw/6718ec9a86bdd8d8a84a68b3675ae407f84aa919/gsoc_2021.json')
    .then(data => {
      // console.log(data.data);
      setData(data.data);
      setFiltered(data.data);
    })
    .catch(error => console.error(error))
  }, [])
  const getData = () => {
  }
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
