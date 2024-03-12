import { useState } from 'react'
import './App.css'
import Timeline from './components/Timeline'
import SideBar from './sidebar/sidebar'
import Trends from './trends/trends'

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <Timeline />
      <Trends />
    </div>
  )
}