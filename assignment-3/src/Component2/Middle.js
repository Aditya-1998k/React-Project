import '../Component/style1.css'

const Middle=(props)=>{
    return(
        <>
        <div id='main3'>
            <div>
                <span><strong>Appointment:  </strong></span>
                <span>{props.Appointment}</span>
            </div>
            <div>
                <span><strong>Email: </strong></span>
                <span>{props.Email}</span>
            </div>
            <div>
                <span><strong>Phone:  </strong></span>
                <span>{props.Phone}</span>
            </div>
        </div>
        </>
    )
}
export default Middle;