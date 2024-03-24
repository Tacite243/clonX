import { createBrowserRouter } from "react-router-dom";
import Timeline from "../components/timeline/Timeline";
import Profile from "../pages/profile";

const lineRouter = createBrowserRouter([
    {
        path : "/",
        element : <Timeline/>
    },
    {
        path : "/profile",
        element : <Profile/>
    }
]);

export default lineRouter;