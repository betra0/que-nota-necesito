import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomeCard from './components/HomeCard'
//import { IconBrandGithub } from '@tabler/icons-react';
import githubLogo from './assets/github.svg'

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="mx-auto flex min-h-screen max-w-xl flex-col px-5 py-10">

        <HomeCard />

      </main>


      <footer className="fixed bottom-4 right-10 flex">
      
        <a
          href="https://github.com/betra0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            rounded-lg
            bg-gray-900
            shadow-xl
            shadow-black/100
            px-2 py-2
            text-sm text-gray-100
            transition
            hover:bg-gray-700
            hover:shadow-xl
          "
        >
         <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-7 w-7 text-white"
         >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
        </a>
      </footer>
    </div>
  )
}

export default App


