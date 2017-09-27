import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    render() {
        return (
            <div>
               Search: <input onChange={e => this.onInputChange(e.target.value)} />
            </div>
        )
    }

    onInputChange(val){
        this.props.onQueryChange(val)
    }
}

export default SearchBar;