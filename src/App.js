import Welcome from "./welcomepage";
import Aboutme from "./aboutme/aboutme";
import { Route, Routes } from "react-router-dom";
import me from "./phhoto/me.png";
import me2 from "./phhoto/m3.jpg";
function App() {
  return (
    <div className="App">
      <div className="mainfooter">
        <div className="GeeksForGeeks">

          <div className="intro">
            <div className="introdetalis">
              <h1 className="name">Moath al-shishani</h1>
              <h3>A Creative Full Stack Developer</h3>
            </div>
            <div>
              <img className="self" src={me}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="main1">
        <div className="pae2mainn">
          <img src={me2}></img>
          <div className="maindetalis">
            <div>
              <h1>ABOUT ME </h1>
              <hr className="hr"></hr>
            </div>
            <h2>
              {" "}
              Full-stack developer with solid experience in building responsive
              web applications and design. Strive for excellence in everything I
              do. Interested to work for a company that encourages innovative
              thinking and enables me to utilize my skills and abilities.
            </h2>
          </div>
        </div>
      </div>
      <div className="skilss">
        <div className="mainskills">
          <h1>My Skills</h1>
        </div>
        <div className="skils">
          <h2>* HTML</h2>
          <h2>* CSS</h2>
          <h2>* JAVASCRIPT</h2>
          <h2>* JQUERY</h2>
          <h2>* DOM</h2>
          <h2>* node.js</h2>
          <h2>* Express</h2>
          <h2>* React</h2>
          <h2>* Redux</h2>
          <h2>* mongoose</h2>
          <h2>* Mysql</h2>
          <h2>* Familiar with Github</h2>
        </div>
      </div>
      <Routes>
        <Route path="jj" element={<Welcome />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
