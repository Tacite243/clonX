import './App.css';
import SideBar from './components/sidebar/sidebar';
import Timeline from './components/timeline/Timeline';
import Trends from './components/trends/trends';

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <Timeline />
      <Trends />
    </div>
  )
}