import './App.css';
import {Route} from "react-router-dom";
import PostView from './component/post-view';
import Landing_Page from './component/Landing_Page';
import {Routes} from "react-router-dom";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Landing_Page/>}></Route>
      <Route path="/insta" element={<PostView/>}/>
    </Routes>
    </>    
    
  );
}

export default App;
