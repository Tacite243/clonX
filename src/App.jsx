import { RouterProvider } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/sidebar';
import Timeline from './components/timeline/Timeline';
import Trends from './components/trends/trends';
import lineRouter from './routes/routes';



export default function App() {
  return (
    <div className="container">
      <SideBar />
      <RouterProvider router={lineRouter}/>
      <Trends />
    </div>
  )
}