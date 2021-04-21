import logo from './logo.svg';
import './App.css';
import img1 from './images/caricature-dimitri.svg';
import img2 from './images/caricature-mathilde.svg';
import img3 from './images/caricature-quentin_b.svg';
import React, {useState, useEffect} from 'react';
function App() {
  useEffect(()=>{
    setVisible(true);
  })
  const [visible,setVisible] = useState(false);
  return (
    <div className="App" >
      <div id="pageTitle" >
          <p>OUR TEAM</p>
      </div>
      <div className="columns" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <div>
            <p id="teamTitle">CLIAR BROWN</p>
            <p id="teamPos">CEO</p>
          </div>
          <img src={img1} alt="CEO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">ADMA FINCH</p>
            <p id="teamPos">CTO</p>
          </div>
          <img src={img2} alt="CTO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">JHON REYSE</p>
            <p id="teamPos">CFO</p>
          </div>
          <img src={img3} alt="CFO" />
        </div>
      </div>
      <div className="columns" id="middleColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="pageTitle1">
          <p>OUR TEAM</p>
        </div>
        <div id="pageData">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="columns" id="rightColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <img id="imgRight" src={img1} alt="CEO" />
          <div>
            <p id="teamTitle">CLIAR BROWN</p>
            <p id="teamPos">CEO</p>
          </div>
        </div>
        <div id="team">
          <img id="imgRight" src={img2} alt="CTO" />
          <div>
            <p id="teamTitle">ADMA FINCH</p>
            <p id="teamPos">CTO</p>
          </div>
        </div>
        <div id="team" >
          <img id="imgRight" src={img3} alt="CFO" />
          <div>
            <p id="teamTitle">JHON REYSE</p>
            <p id="teamPos">CFO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
