import { Link } from "react-router-dom";
import AppWrap from "../wrapper/AppWrap";
import hero from '../assets/hero.jpg';
import { TopArtist } from "../components/TopArtist";


const Home = () => {
  return (
    <div className="min-h-screen w-full flex justify-start items-start flex-col overflow-hidden">
      <div className=" flex flex-col justify-center items-center py-10 bg-cover w-full h-[100vh]" style={{ backgroundImage: `url(${hero})` }} >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-season text-center font-bold pb-2">
          Welcome to HH Battle Arena
        </h1>

           <div
            className="flex flex-col justify-center items-center text-center p-4 mt-2 "
            id="intro"
          > 
            <p className="text-lg opacity-70 md:text-lg text-white font-poppins font-normal md:p-8 p-4 max-w-[60rem]">
              BarsVsBars is the ultimate hub for rap artists and hip-hop
              enthusiasts looking to test their lyrical prowess, collaborate on
              verses, and fuel their creative flow. Here, MCs from around the
              world come together to throw down in epic rap battles, where every
              line and punchline counts. BarsVsBars is the place to explore new
              styles, new artists, and make your mark on the rap scene And
              witness the Realm of HipHop Universe.
            </p>
            <div className="flex  space-x-10  ">
            <Link
                to="/sign-up"
                className="relative flex w-28 sm:w-32 h-10 sm:h-12 items-center justify-center border-2 backdrop-blur-md border-zinc-700 rounded-lg  hover:bg-secondary hover:text-primary text-slate-300 font-bold"
              > challenge
              </Link> 
              <Link
                to="/sign-up"
                className="relative flex w-28 sm:w-32 h-10 sm:h-12 items-center justify-center border-2 backdrop-blur-md border-zinc-700 rounded-lg  hover:bg-secondary hover:text-primary text-slate-300 font-bold"
              > Live Battles
              </Link> 

            </div>
          </div>
          
        </div>
        <h1 className="text-white ml-6 text-[6vh]">Top Artist</h1>
        <TopArtist/>
    </div>
  );
};

export default AppWrap(Home);


 

