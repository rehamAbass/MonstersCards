
import React from 'react'
import './search-box.css'


const SearchBox = ({ className, placeholder, searchHandler, group }) => {

    return (
        <div className='search-box'>
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={searchHandler}
            />
            {group.length === 0 ?
                <div className='alert1'> NO MONSTERS 🤨 with this subString ! </div> : ''}
        </div>
    )
}


export default SearchBox;