import SeachBar from "./searchBar/seachBar";
import TrendsForYou from "./trendsForYou/trendsForYou";
import Follow from "./follow/follow";


export default function Trends() {
    return (
        <div className="trends">
            <div className="trends-content">
                <SeachBar />
                <TrendsForYou />
                <Follow />
            </div>
        </div>
    )
}