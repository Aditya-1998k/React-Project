import { useEffect, useState } from "react";
import Logo from './assets/instalogo.png';
import Camera from './assets/camera.png';
import Likes from './assets/likes.png';
import Rocket from './assets/rocket.png'
import './post-view.css'


const PostView = () =>{

    const [userdata,setUserData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3004/user').then((data)=>{
            return data.json()
        }).then((userData)=>{
            setUserData(userData)
        })
    }, [])
    return(
        <>
            <div className="container">
                    <header>
                        <div className="nav">
                            <img src={Logo} alt="hi"></img>
                        </div>
                        <div className="nav1">
                            <img src={Camera} alt="hi"></img>
                        </div>
                    </header>
                     <br/>
                    <div className="post">
                        {
                            userdata.map((user, i)=>{
                                    return (
                                        <>
                                        <div key={i} className='main' >
                                        <div className="user-information">
                                            <span className="name-location">
                                                <div><strong>{user.name}</strong></div>
                                                <div>{user.location}</div>
                                                <br/>
                                            </span>
                                            <span className="threedot"><strong>...</strong></span>
                                        </div>
                                        <div className="user-image">
                                            <img id="img" src={user.PostImage} alt="hi"></img>
                                        </div>
                                        <div className="user-likes">
                                            <div>
                                                <span id='one'><button style={{border:'none'}}><img id="likes" src={Likes}  alt='hi'></img></button> </span>
                                                <span id='two'><button style={{border:'none'}}><img id="rocket" src={Rocket} alt='hi'></img></button></span>
                                                <span id='three'> {user.date}</span>
                                                </div>
                                            {user.likes} likes
                                        </div>
                                        <div className="user-description">
                                           <h3>{user.description}</h3> 
                                        </div>
                                        </div>
                                        </>
                                    )
                            })
                        }
                    </div>
            </div>
            
        </>
    )
}
export default PostView;