import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CreationPage() {
  return (
    <div class="flex flex-col items-center justify-center h-screen p-4">
      <input type="text" placeholder="Title" class="w-3/4 mb-4 p-2 border border-gray-300 rounded" />
      <textarea placeholder="Your content here..." class="w-3/4 h-3/4 p-6 border border-gray-300 rounded mb-4"
        value={content} onChange={e => setContent(e.target.value)}
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={start}>Start</button>
    </div>
  )
}

export default function App() {
  const [content, setContent] = useState()
  const start = () => {

  }
  return (
    <div class="flex flex-col items-center justify-center h-screen p-4">
      <input type="text" placeholder="Title" class="w-3/4 mb-4 p-2 border border-gray-300 rounded" />
      <textarea placeholder="Your content here..." class="w-3/4 h-3/4 p-6 border border-gray-300 rounded mb-4"
        value={content} onChange={e => setContent(e.target.value)}
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={start}>Start</button>
    </div>
  )
}