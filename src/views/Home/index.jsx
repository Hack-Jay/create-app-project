import React, { useState } from 'react';

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