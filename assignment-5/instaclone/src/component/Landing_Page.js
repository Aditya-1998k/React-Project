import {Link} from "react-router-dom" ;
import "./landing_Page.css"
function landing_Page(){
    return(
        <>
        <div id="main1">
            <div id="img1">
                <img src="https://cdn.pixabay.com/photo/2022/07/04/06/25/butterfly-7300501__340.jpg" alt="hi"></img>
            </div>
            <div id="text1">
                <h1>10x team 04</h1>
                <Link to="/insta" >Enter</Link>
            </div>
        </div>
        </>
    )
}

export default landing_Page;