import React from 'react'
import TopArtistBar from '../components/TopArtistBar'
import SearchBar from './SearchBar'

const CreateBattle = () => {
  return (
    <div>
      <div className='text-3xl font-season'>
        <h1>Top Artists</h1></div>
        <SearchBar/>
        <TopArtistBar/>
        
        
    </div>
  )
}

export default CreateBattle