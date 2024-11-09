import React from 'react'
import SearchBar from './SearchBar'
import BattleBar from './BattleBar'
import TopArtistBar from './TopArtistBar'
const TopArtists = () => {
  return (
    <div>
      <div className='text-3xl font-season'>
        <h1>Top Artists</h1></div>
        <SearchBar/>
        <TopArtistBar/>
        
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
        <BattleBar artist1Name="wewewe" artist2Name="xxxxxxxxxxxxx"/>
    </div>

  )
}

export default TopArtists
