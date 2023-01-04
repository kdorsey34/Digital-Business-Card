import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import img1 from './Images/Facebook Icon.png'




function Info() {
  return(
    <div-container className="container">
      <img width="200px" src="https://media.licdn.com/dms/image/D4E03AQG7Zvt7O2gglg/profile-displayphoto-shrink_200_200/0/1669862406399?e=1678320000&v=beta&t=No07CnENbBBLpOdQKUbbySRmYXuklVnA9hYrwWG8CbA" />
    <h2>Kashanna Dorsey</h2>
    <h3 className="Title">Frontend Developer</h3>
    <h4>www.linkedin.com/in/kdorsey35</h4>
    <button className="Emailbutton">Email</button>
    <button className="LinkedInButton">LinkedIn</button>
     </div-container>
  )
}

function AboutMe() {
  return (
<div className="aboutme">
    <h3>About</h3>
    <p>Current Knowledge House, web development fellow, seeking to become a Front End Web Developer. Building on HTML, CSS, JavaScript concepts at the moment. This experience has been rewarding and already an accomplishment. I'm looking for all avenues to learn through apprenticeships to build my professional skills.
    </p>
  </div>
  )
}

function Footer() {
  return(
    <div className="Footer">
      <img className="Facebook" src={img1} />
      <img className="Github" src="./Images/GitHub Icon.png" />
      <img src="./Images/Instagram Icon.png" />

    </div>

  )
}

function Interests(){
  return(
    <div className="interests">
      <h3>Interests</h3>
     <p>My current interests consist of creating new adventures! Recently I have began to get out more and embrace nature by going hiking at various trails. When I have some downtime I love to read or listen to true crime audio books/ podcasts. 
    </p> 
    </div>
  )
}
function App() {
return (
  <div className="main">
  <Info />
  <AboutMe />
  <Interests />
  <Footer />
  </div>
  
   )
}

export default App
