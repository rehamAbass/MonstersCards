
import React from 'react'
import './search-box.css'
class SearchBox extends React.Component {

    render() {
        return (

            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type='search'
                    placeholder={this.props.placeholder}
                    style={this.props.style}
                    onChange={this.props.searchHandler}
                />
            </div>
        )
    }
}


export default SearchBox;