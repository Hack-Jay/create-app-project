import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './index.less'
function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/api')
    .then((res) => {
      console.log('res', res)
    })
  }, []);

  return <h3>Hello React</h3>;
}

export default App