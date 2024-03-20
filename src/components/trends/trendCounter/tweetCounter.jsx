import { useState } from "react";
import content from "./content";


export default function TweetCounter() {
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
