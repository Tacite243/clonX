import { useState } from "react";
import Tweet from "../components/boutons/tweets";

const sideContent = [
    {
        title: "logo",
        image: "/icons/Twitter.png",
    },
    {
        title: "Home",
        image: "/icons/Home-Fill.png",
    },
    {
        title: "Explore",
        image: "/icons/Explore.png"
    },
    {
        title: "Notifications",
        image: "/icons/Notifications.png"
    },
    {
        title: "Messages",
        image: "/icons/Messages.png"
    },
    {
        title: "Bookmarks",
        image: "/icons/Bookmarks.png"
    },
    {
        title: "Lists",
        image: "/icons/Lists.png"
    },
    {
        title: "Profile",
        image: "/icons/Profile.png"
    },
    {
        title: "More",
        image: "/icons/More.png"
    }
];

export default function SideBar() {
    const [side, setSide] = useState(sideContent);
    return (
        <div className="sidebar">

            {side.map(
                (item) =>
                    <div className="sideBarComponent">
                        <img src={item.image} alt="" />
                        <h1 className="page-title">{item.title}</h1>
                    </div>)
            }
            <div className="sideBarComponent">
                <Tweet />
            </div>
        </div>
    )
}