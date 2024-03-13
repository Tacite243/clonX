import TrendsForYou from "../trendsForYou/trendsForYou";
import SeachBar from "./searchBar/seachBar";


export default function Trends(){
    return(
        <div className="trends">
            <SeachBar />
            <TrendsForYou />
        </div>
    )
}