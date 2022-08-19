import Navbar from "./compenets/Navbar";
import Textbox from "./compenets/Textbox";


function App() {
  return (
    <>
    <Navbar title="UtilTexter"/>
    <div className="container my-3">
    <Textbox heading="Enter The Text below To Analyze"/>
    </div>
    
    </>
  );
}

export default App;
