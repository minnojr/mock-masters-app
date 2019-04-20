import React, { Component } from 'react';
import './searchbar.css'

class SearchBar extends Component {

    render() {

        return (
            <form className='search-bar-form ml-3'>
                <span className=''>
                        <input
                            className="searchbar"
                            type='text'
                            name='player'
                            // placeholder="..."
                            value={this.props.query}
                            onChange={(event) => this.props.updateQuery(event.target.value)}
                        />
                    </span>
            </form>
        )
    }
}

export default SearchBar;
