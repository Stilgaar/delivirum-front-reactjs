//Charement des CSS et dépendances
import './Homepage.css';
import { useState } from "react";


function Homepage() {

    const [postsList, setPostsList] = useState([]);

    const [title, setTitle] = useState();
    const [critic, setCritic] = useState();

    return(

        <div className="post-card">
            <div className="post-title">
                <h3>title</h3>
            </div>
            <div className="post-critic">
                <p>critic</p>
            </div>

        </div>




    )


}

export default Homepage;