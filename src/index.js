import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import 'normalize.css'
import axios from "axios";
import "./index.less";
import Login from './views/Login'

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

ReactDom.render(<Login />, document.getElementById("root"));
