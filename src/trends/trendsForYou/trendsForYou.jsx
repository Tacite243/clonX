
import ShowMore from "./showMore/showMore";
import ForYou from "./forYou/forYou";
import TweetCounter from "../trendCounter/tweetCounter";

export default function TrendsForYou() {
    return (
        <div className="trends-for-you">
            <ForYou />
            <TweetCounter />
            <TweetCounter />
            <TweetCounter />
            <TweetCounter />
            <ShowMore />
        </div>
    )
}