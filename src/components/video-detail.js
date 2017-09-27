import React from 'react';

class VideoDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.video)
        {
            return(
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item"></iframe>
                    </div>
                    <div className="details">
                        <div>{this.props.video.snippet.title}</div>
                        <div>{this.props.video.snippet.description}</div>
                    </div>
                </div>
            )
        }

        return <div><h1>loading...</h1></div>
    }
}

export default VideoDetail