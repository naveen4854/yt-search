import React from 'react';

class VideoItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li onClick={(function(){ this.props.onVideoSelect(this.props.video)}).bind(this)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.props.video.snippet.thumbnails.default.url}/>
                    </div>
                </div>

                <div className="media-body">
                    <div className="media-heading">{this.props.video.snippet.title}</div>
                </div>
            </li>
        )
    }
}

export default VideoItem;