import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg'


function App() {
  return (
   
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className='titlered'>Your name here</h1>

<br />
     <img src={imageInSrc} />
<br />
    <img src="/imageInPublic.jpg"  alt="myimage" /> 
     
  <br />

<video width="320" height="240" controls>

<source src="/myVideo.mp4" type="video/mp4" />

</video>
</div>
  );
}

export default App;
