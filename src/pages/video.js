import React from "react";
import ReactPlayer from "react-player";
import '../Nav.css'
import Menu from '../Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import FOOTER from '../Footre';



function Video(props) {
    const videoEnded = () => {
        alert("la video est terminee");
    }
    // const externalsource ="assete/video/KAN.mp4";
    const intenallsource = "assete/video/KAN.mp4";
    return (
        <div className='GAE'>
            <Menu />
            <div className="GELL">
                <h1>Video</h1>
                <h4>What Is React (React js) & Why Is It So Popular?</h4>
                <ReactPlayer url={intenallsource}
                    controls
                    playing
                    muted
                    width="60%"
                    height="60%"
                    margin=""
                    className="Player"
                    onEnded={videoEnded} />
            </div> <FOOTER />
        </div>
    );
};
export default Video;