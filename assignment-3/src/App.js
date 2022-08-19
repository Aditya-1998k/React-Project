
import UpperPart from './Component/UpperPart';
import SecondPart from './Component1/SecondPart';
import Middle from './Component2/Middle'
import Lower from './Component3/Lower';

function App() {
  const data={
    name:"Allen",
    EmployeeID:"12345",
    Appointment:"10/12/2022, 10:55 AM",
    Email:"allen@gmail.com", 
    Phone:"9918212144"

  }
  const orderData={
    status:"InProgress",
    Door:"Mark",
    Time:"10:30AM (25-05-2016)"
  }
  const ProductData={
    name:"Boltar Bobensome",
    profileImg:'https://www.w3schools.com/howto/img_avatar.png',
    description:"Its my life Its now or Never because I don't gonna live forever"
  }
  return (
    <>
      <UpperPart className="zero"  name={data.name} EmployeeID={data.EmployeeID}></UpperPart>
      <Middle className="two" Appointment={data.Appointment} Email={data.Email} Phone={data.Phone}></Middle>
      <SecondPart className="one" status={orderData.status} Door={orderData.Door} Time={orderData.Time}></SecondPart>
      <Lower profileImg={ProductData.profileImg} name={ProductData.name} description={ProductData.description}></Lower>
    </>   
  );
}

export default App;
