import { useEffect, useState } from "react";
import TopArtistBar from "../components/TopArtistBar";
import SearchBar from "./SearchBar";
import axios from "axios";

const CreateBattle = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/api/db/artist")
      console.log(response)
      setArtists(response.data.user)
    }
    getData();

   
  }, []);



  console.log(artists);
  return (
    <div>
      <div className="text-3xl font-season">
        <h1>Top Artists</h1>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {artists.map((artist) => (
        <TopArtistBar key={artist._id} artist={artist} />
      ))}
      {/* <TopArtistBar /> */}
    </div>
  );
};

export default CreateBattle;
