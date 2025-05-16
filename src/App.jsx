
export default function App() {
  return (
    <div className="bg-[url(gambar.png)] bg-cover h-screen w-screen flex">
      <div className="bg-transparent h-64 w-64 mr-10">
        <img src="" alt="" />
      </div>
      {/* center */}
      <div className="flex w-[60%] justify-between">
        {/* logo  team a */}
        <div className="bg-[url(/bg.webp)] bg-cover h-24 w-24 flex flex-col items-center justify-center">
          <img
            src="cloud-nine.png"
            alt="LOGO TEAM"
            className="bg-gray-900 h-12"
          />
          <h1 className="font-bold ">CN</h1>
        </div>

        {/* informasi BO */}
        <div className="flex items-center h-14 w-72 mt-16 bg-radial-[at_25%_25%] from-purple-500 to-purple-700 to-75% rounded-b-xl justify-evenly shadow-lg shadow-purple-800">

          {/* scor tem a */}
          <div className="flex gap-3">
            <div className="h-12 w-2 bg-gray-300"></div>
            <div className="h-12 w-2 bg-green-300"></div>
          </div>

          <img src="kmari.jpeg" alt="" className="bg-gray-800 h-14" />

          {/* scor team b */}
          <div className="flex gap-3">
            <div className="h-12 w-2 bg-gray-300"></div>
            <div className="h-12 w-2 bg-green-300"></div>
          </div>
        </div>

        {/* Logo tem B */}
        <div className="bg-[url(/bg.webp)] bg-cover h-24 w-24 flex flex-col items-center justify-center">
          <img
            src="cloud-nine.png"
            alt="LOGO TEAM"
            className="bg-gray-900 h-12"
          />
          <h1 className="font-bold ">CN</h1>
        </div>
      </div>
      {/* informasi */}
      <div className="bg-white h-28 w-[19.7rem] flex items-center justify-between p-3 absolute top-0 right-0 rounded-bl-2xl">
        <div className=" flex gap-2">
          <img src="kmari.jpeg" alt="img" className="bg-gray-700 h-16" />
          <img src="esi.jpg" alt="img" className="bg-gray-700 h-16" />
        </div>
        <div className="h-[95%] w-1 bg-purple-800 mx-3"></div>
        <div className="bg-gray-200flex flex-col items-end text-end text-xs font font-semibold">
          <h1>K.MARI TOURNAMENT</h1>
          <h2>SEASON 1</h2>
          <h2>ROUND 1</h2>
          <h2>MATCH 1 | GAME 1</h2>
          <h2>BEST OF 3</h2>
        </div>
      </div>
    </div>
  );
}
