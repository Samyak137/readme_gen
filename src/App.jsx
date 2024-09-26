import { useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './App.css'
// import {
//   faGithub,
//   faLinkedin,
//   faXTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

function App() {

  const [name, setName]= useState("");
  const [interest, setInterest] = useState("");

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="text-5xl font-normal h-[80px] w-[50%] text-center my-[70px] bg-[#163c76] p-8 rounded-lg flex justify-center items-center shadow-2xl text-[#b0bc92] ">
          <h1>Github Readme Generator</h1>
        </div>
      </div>
      <div className="container bg-cyan-500  h-full w-[95vw] items-start">
        <div className="">
          <h1>Header</h1>
        </div>
      </div>
    </>
  )
}

export default App
