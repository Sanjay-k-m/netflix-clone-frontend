import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";
import Navbar from "../../components/Navbar";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
const HomeScreen = () => {

  const { trendingContent } = useGetTrendingContent()
  console.log(trendingContent, "trending content");

  return (
    <>
      <div className="relative h-screen text-white">
        <Navbar />
        <img
          src="extraction.jpg"
          alt="home screen"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />
          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              Extraction
            </h1>

            <p className="mt-2  text-lg">2014 | 18+</p>
            <p className="mt-4 text-lg">
              A group of young, brilliant, beautiful, and wildly talented
              individuals who are on a mission to uncover the truth behind the
              disappearance of three individuals in a remote corner of the world.
            </p>
          </div>
          <div className='flex mt-8'>
            <Link
              to={`/watch/`}
              className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex
							 items-center'
            >
              <Play className='size-6 mr-2 fill-black' />
              Play
            </Link>

            <Link
              to={`/watch/}`}
              className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'
            >
              <Info className='size-6 mr-2' />
              More Info
            </Link>
          </div>
        </div>
      </div >

    </>
  );
};

export default HomeScreen;
