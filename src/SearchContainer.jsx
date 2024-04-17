import React from 'react'

function SearchContainer({search}) {
  return (
    <div className='search-container'>
                <input type="text" placeholder='Enter to search' onChange={(e)=>search(e)} />
            </div>
  )
}

export default SearchContainer