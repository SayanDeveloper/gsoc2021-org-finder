import { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Axios from 'axios';
import { GlobalContext } from './context/provider';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const {all, Filtered} = useContext(GlobalContext);
  const [data, setData] = all;
  const [filtered, setFiltered] = Filtered;
  useEffect(() => {
    Axios.get('https://gist.githubusercontent.com/SayanDeveloper/948efb53860c9987d0c280beb934c784/raw/8dceed2e2bb1401d55f7d16997eecd21b31f0357/gsoc_2021.json')
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
      <Route path="/:org" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
