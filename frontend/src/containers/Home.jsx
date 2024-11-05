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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 px-4 w-full max-w-4xl">
        
        {/* Intro Section */}
        <div className="flex flex-col justify-center items-center text-center p-4 mt-2" id="intro">
          <p className="text-md md:text-lg text-white font-poppins font-normal md:p-8 p-4">
            BarsVsBars is the ultimate hub for rap artists and hip-hop enthusiasts looking to test their lyrical prowess, collaborate on verses, and fuel their creative flow. Here, MCs from around the world come together to throw down in epic rap battles, where every line and punchline counts. BarsVsBars is the place to explore new styles, new artists, and make your mark on the rap scene And witness the Realm of HipHop Universe.
          </p>
        </div>

        {/* Card Section */}
        <div className="relative" id="card">
          {/* Card container with responsive padding and width adjustments */}
          <div className="max-w-xs sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto md:mx-0">
            <img
              className="w-full h-48 sm:h-64 md:max-h-72 object-cover rounded-t-lg"
              src={landingsrc}
              alt="not implemented"
            />
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Bars vs Bars  ,Welcome's you 
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Showcase your lyricism and get unlistened bombers.
              </p>
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
    </div>
    </div>
  );
};

export default AppWrap(Home);


 

