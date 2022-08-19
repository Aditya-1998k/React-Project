import './object.css';
const obj=(props)=>{    
    return (
         <>
         <div id="main">
                    <img id="img" src={props.profileImg}></img>
                    <h2 id='name'>{props.name}</h2>
                    <p>Location:</p>
                    <h3>{props.location}</h3>
                    <p>Blood Group:</p>
                    <h3>{props.bloodGroup}</h3>
                    <p>Age</p>
                    <h3>{props.Age}</h3>
          </div>
         </>
    )
 }
 export default obj