import { SetStateAction, useEffect, useState } from 'react'
import './App.css'
import { pwa } from "pwafire";

function App() {

  const [playerOne, setPlayerOne] = useState("");
  const [winNum, setwinNum] = useState(0);
  const [playerTwo, setPlayerTwo] = useState("");

  useEffect(() => {
    var result = 0;
    if (playerTwo != "" && playerOne != "") {
      if (playerOne === playerTwo) return;
      switch (playerOne) {
        case "chi":
          if (playerTwo === "mi") {
            result = 1
          } else {
            result = 2
          }
          break;
        case "fu":
          if (playerTwo === "chi") {
            result = 1
          } else {
            result = 2
          }
          break;
        case "mi":
          if (playerTwo === "fu") {
            result = 1
          } else {
            result = 2
          };
          break;
        default:
          result = 2;
          break;
      }

      setwinNum(result);
      pwa.Notification({
        title: `ShiFuMi`, options: {
          body: `Joueur${result} a gagné!`,
          icon: "./assets/icon-192x192.png",
          tag: "pwa",
        }
      })
      
      setPlayerOne('');
      setPlayerTwo("")
    } else {
      result = 0
    }
  }, [playerOne, playerTwo])

  function onUserOnePlayed(value: SetStateAction<string>) {
    setPlayerOne(value);

  }

  function onUserTwoPlayed(value: SetStateAction<string>) {
    setPlayerTwo(value);
  }


  return (
    <div className="App">
      <h1 className='mb-16'>ChiFuMi</h1>
      {winNum != 0 && <h2>la gagant est le joueur : {winNum}</h2>}
      <div className='flex w-full'>
        <div className='w-1/2 flex p-6 flex-col items-center justify-center border-r-2'>
          <h1 className='p-6'>Joueur 1</h1>
          <div className='flex h-16 justify-between w-full'>
            <button onClick={() => onUserOnePlayed("chi")} className={`mr-4 items-center ${playerOne === "chi" ? "border-white border-2" : ""} justify-center flex`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
              </svg>
              Shi
            </button>
            <button onClick={() => onUserOnePlayed("fu")} className={`mr-4 items-center ${playerOne === "fu" ? "border-white border-2" : ""} justify-center flex`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
              Fu
            </button>
            <button onClick={() => onUserOnePlayed("mi")} className={`${playerOne === "mi" ? "border-white border-2" : ""} flex mr-4 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
              </svg>
              Mi
            </button>
          </div>
        </div>
        <div className='w-auto flex p-6 flex-col items-center justify-center'>
          <h1 className='p-6'>Joueur 2</h1>
          <div className='flex h-16 justify-between w-full'>
            <button onClick={() => onUserTwoPlayed("chi")} className={`${playerTwo === "chi" ? "border-white border-2" : ""} flex mr-4 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
              </svg>
              Shi
            </button>
            <button onClick={() => onUserTwoPlayed("fu")} className={`${playerTwo === "fu" ? "border-white border-2" : ""} flex mr-4 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
              Fu
            </button>
            <button onClick={() => onUserTwoPlayed("mi")} className={`${playerTwo === "mi" ? "border-white border-2" : ""} flex mr-4 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
              </svg>
              Mi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
