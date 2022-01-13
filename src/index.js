import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Parent from './components/Parent'
import YoutubePlayerParent from './components/YoutubePlayerParent'
import SocialShareParent from './components/SocialShareParent'
import ParentAB from './components/ParentAB'

ReactDOM.render(
  <React.StrictMode>
    {/* <Parent /> */}
    {/* <App /> */}
    {/* <YoutubePlayerParent /> */}
    {/* <SocialShareParent /> */}
    <ParentAB />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
