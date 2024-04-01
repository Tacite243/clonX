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
                    <div className="btnTweetSiderBar">
                        <Tweet />
                    </div>
                </div>
                <div className="follow-left">
                    <div className="follow-img avatar">
                        <img src="/images/profile.jpg" alt="avatar" />
                    </div>
                    <div className="follow-medium">
                        <p className="follow-profile-name">Bradley Ortiz</p>
                        <p className="follow-tag">@bradley</p>
                    </div>
                </div>
                <div className="follow-right">
                    <img src="/icons/More-2.png" alt="" />
                </div>
            </div>
        </div>
    )
};