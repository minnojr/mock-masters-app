import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <form className=''>
                <span className=''>
                        <input
                            type='text'
                            name='player'
                            placeholder='PLAYER SEARCH'
                            value={this.props.query}
                            onChange={(event) => this.props.updateQuery(event.target.value)}
                        />
                    </span>
            </form>
        )
    }
}

export default (SearchBar);
