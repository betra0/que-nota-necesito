import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomeCard from './components/HomeCard'
//import { IconBrandGithub } from '@tabler/icons-react';
import githubLogo from './assets/github.svg'
import Footer from './components/Footer'
function App() {

  return (
  <div className="relative min-h-screen text-white">

    {/* Fondo */}
    <div
      className="
        fixed
        inset-0
        min-h-full
        z-0
        pointer-events-none
        bg-gray-950
        bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(59,130,246,0.18),transparent_30%)]
      "
    />

    {/* Contenido */}
    <div className="relative z-10">

        <main className="mx-auto flex min-h-screen max-w-xl flex-col px-5 py-10">

          <HomeCard />

        </main>

        <div className='fixed bottom-4 right-10 flex'>

          <button className='flex items-center justify-center
              rounded-lg
              bg-gray-900
              shadow-xl
              shadow-black/100
              px-2 py-2
              text-sm text-gray-100
              transition
              hover:bg-gray-700
              hover:shadow-xl'></button>
        </div>
        <Footer/>
    </div>
  </div>
  )
}

export default App


