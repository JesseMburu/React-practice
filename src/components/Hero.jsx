import ReactPlayer from "react-player";
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools 
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "} 
            for developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your 
          VR app ideas to life with our intuitive development tools. 
          Get started today and turn your imagination into immersive reality!
          </p>

          <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
              Get started
            </a>
            <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
              Documentation
            </a>
          </div>

          <div className="flex flex-mt-10 justify-center">
            <div className="mx-2 my-4 border border-orange-700 shadow-orange-400 rounded-lg w-1/2">
              <ReactPlayer
                url={video1}
                playing
                loop
                muted
              />
            </div>
            <div className="mx-2 my-4 border border-orange-700 shadow-orange-400 rounded-lg w-1/2">
              <ReactPlayer
                url={video2}
                playing
                loop
                muted
              />
            </div>
          </div>

      </div>
  )
}

export default Hero
