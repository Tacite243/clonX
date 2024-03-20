import { useState } from "react";
import Tweet from "../timeline/boutons/tweets";
import sideContent from "./sideData";


export default function SideBar() {
    const [side, setSide] = useState(sideContent);
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                {side.map(
                (item) =>
                    <div className="sideBarComponent">
                        <img src={item.image} alt="" />
                        <h1 className="aux-title">{item.title}</h1>
                    </div>)
            }
                <div className="sideBarComponent">
                    <Tweet />
                </div>
                <div>hello</div>
            </div>
        </div>
    )
};