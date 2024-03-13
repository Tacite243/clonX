import { useState } from "react";



const content = [
    {
        top: "tranding in Turkey",
        medium: "#SQUID",
        bottom: "2,006 Tweets",
        image: "/icons/More-2.png"
    },
    {
        top: "tranding in Turkey",
        medium: "#SQUID",
        bottom: "2,006 Tweets",
        image: "/icons/More-2.png"
    },
    {
        top: "tranding in Turkey",
        medium: "#SQUID",
        bottom: "2,006 Tweets",
        image: "/icons/More-2.png"
    },
    {
        top: "tranding in Turkey",
        medium: "#SQUID",
        bottom: "2,006 Tweets",
        image: "/icons/More-2.png"
    }
];

export function TweetCounter() {
    const [trend, setTrend] = useState(content)
    return (
        <div className="trentInner">
            <div className="left">
                <p>{content[0].top}</p>
                <h2>{content[0].medium}</h2>
                <p>{content[0].bottom}</p>
            </div>
            <div className="right">
                <img src={content[0].image} alt="icon more" />
            </div>
        </div>


        // <div className="for-you">
        //     {trend.map(
        //         (item) =>
        //             <div className="trentInner">
        //                 <div className="left">
        //                     <p>{item.top}</p>
        //                     <h2>{item.medium}</h2>
        //                     <p>{item.bottom}</p>
        //                 </div>
        //                 <div className="right">
        //                     <img src={item.image} alt="icon more" />
        //                 </div>
        //             </div>
        //     )}
        // </div>
    )
}

export function ForYou() {
    return (
        <div className="for-you">
            <h1 className="aux-title">Trends for you</h1>
            <div className="imag">
                <img src="/icons/Settings.png" alt="settings icon" />
            </div>
        </div>
    )
}

export default function TrendsForYou() {
    return (
        <div className="trends-for-you">
            <ForYou />
            <TweetCounter />
            <TweetCounter />
            <TweetCounter />
            <TweetCounter />
        </div>
    )
}