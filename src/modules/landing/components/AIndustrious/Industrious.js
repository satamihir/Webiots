import React, {Component} from 'react';

import './Industrious.scss';
class Industrious extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL:"../../assets/banner.mp4"
                    }       
    }

    render() {

    return(

        
    <div className = "Industrious">
        <div className = "container">
            <h1>INDUSTRIOUS</h1>
               <p>A responsive business oriented template with a video background designed 
                   by template and released under the Creative Common License.</p>

                   <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    )

    }
};


export default Industrious;

