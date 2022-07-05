import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import App from './App';
import './index.css';


axios.get('http://localhost:3001/api/notes').then(response => {
  const note = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={note}/>)
})

