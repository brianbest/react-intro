import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <header>
          <h1>Brian's Video</h1>
          <input type='text' placeholder='search' />
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />

            )
          })}
        </div>

      </div>
    )
  }
})

export default Search
