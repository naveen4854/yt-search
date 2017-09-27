import React from 'React';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const api_key = "AIzaSyC7WpcV8-4tpmlLv3XkIXWgmXFTvySHSuE"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { videos : [], currentVideo: undefined};
        this.videoSearch('dj telugu');
    }
    selectedVideo(video){
        this.setState({ currentVideo: video });
        console.log(video)
    }

    videoSearch(query){
        YTSearch({ key: api_key, term: query }, data => {
            this.setState({ videos : data, currentVideo: data[0] });
        });
    }
    render(){

        const newSearch = _.debounce((query)=> {this.videoSearch(query)},300)

        return (
            <div>
                <SearchBar onQueryChange={newSearch}/>
                <VideoDetail video={this.state.currentVideo}/>
                <VideoList onVideoSelect={video => this.selectedVideo(video)} videos={this.state.videos}/>
            </div>
        );  
    }
}

ReactDOM.render( <App /> , document.querySelector('.container'));