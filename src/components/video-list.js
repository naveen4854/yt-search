import React from 'react';
import VideoItem from './video-item';

class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.videos.length > 0){
            return (
                <ul className="col-md-4 list-group">
                    {this.props.videos.map(video => {
                        return <VideoItem onVideoSelect={this.props.onVideoSelect} video={video}/>
                    })}
                </ul>
            )
        }
        return <h1>No results!!</h1>;
    }
}

export default VideoList