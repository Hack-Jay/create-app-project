import React from 'react'
import ReactDom from 'react-dom'
import './index.less'

const App = () => <h3>Hello React</h3>
console.log(123)

ReactDom.render(<App />, document.getElementById('root'))

