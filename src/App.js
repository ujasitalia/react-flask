import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();

  useEffect(()=>{ 
    const fetch = async () => {
      try {
        const {data} = await axios.get('http://localhost:8000/api/')
        setData(data)
      } catch (error) {
        setData(error)
      }
    }
    fetch();
  }, []);

  return (
    <div className="App">
      data from flask: {data}
    </div>
  );
}

export default App;
