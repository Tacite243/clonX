
import Follow from "./follow/follow";
import SeachBar from "./searchBar/seachBar";
import TrendsForYou from "./trendsForYou/trendsForYou";


export default function Trends(){
    return(
        <div className="trends">
            <SeachBar />
            <TrendsForYou />
            <Follow />
        </div>
    )
}