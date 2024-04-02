import { createBrowserRouter } from "react-router-dom";
import Timeline from "../components/timeline/Timeline";
import Profile from "../pages/profile";
import Cnn from "../pages/cnn";
import NewYork from "../pages/theNewYorkTimes";
import Tweeter from "../pages/tweeter";

const lineRouter = createBrowserRouter([
    {
        path : "/",
        element : <Timeline/>
    },
    {
        path : "/myaccount",
        element : <Profile/>
    },
    {
        path : "/CNN",
        element : <Cnn/>
    },
    {
        path : "/The New York Times",
        element : <NewYork />
    },
    {
        path : "/Tweeter",
        element : <Tweeter />
    },

]);

export default lineRouter;