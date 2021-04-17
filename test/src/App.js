import myimage from './imageInSrc.jpg';
import video from './myVideo.webm'
import './styles.css';

function App() {
  return (
  <> 
    
<div style={{border:"solid 1px black",maxWidth:'100vw'}}>


    <h1 className="title red">Your name here</h1>
   
    <br></br>
   
    <img src={myimage} alt ="imj"/>
   
    <br></br>
   
    <img src="/imageInPublic.png" alt ="im"/> 
   
    </div>  
   
   <video width="320" height="240" controls >
   
    <source src={video}type="video/mp4" ></source>
    </video>

   </>
  );
}

export default App;
