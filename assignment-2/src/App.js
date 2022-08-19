
import './App.css';
import Object from  "../src/Component/Object"

function App() {
  
    const employee = {
      name: 'Tom',
      location: 'New York',
      bloodGroup: 'B+',
      age: 28,
      profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
    }
         
    return (
        <>
        <div id='main'> 
          <Object Age={employee.age} name={employee.name} location={employee.location} bloodGroup={employee.bloodGroup} profileImg={employee.profileImg}></Object>
        </div>
         </>
     );
}

export default App;