import React, { Component } from 'react';
import './searchbar.css'

class SearchBar extends Component {

    render() {

        return (
            <form className='ml-3 mr-3'>
                <span className=''>
                        <input
                            className="searchbar"
                            type='text'
                            name='player'
                            // placeholder="Search..."
                            value={this.props.query}
                            onChange={(event) => this.props.updateQuery(event.target.value)}
                        />
                    </span>
            </form>
        )
    }
}

export default SearchBar;
