import tweetCollection from "../../components/4tweets/tweetData";
import Verified from "../../components/4tweets/tweetComponents/tweetAssets/Verified.png"
import FollowBtn from "./followBtn/followBtn";
import ShowMore from "../trendsForYou/showMore/showMore";


const followData = tweetCollection

export default function Follow() {

    return (
        <div className="follow">
            <h1 className="aux-title">Who to follow</h1>
            {followData.map(
                (item) => {
                    return (
                        <div className="follow-content">
                            <div className="follow-left">
                                <div className="follow-img">
                                    <img src={item.avatarImage} alt="" />
                                </div>
                                <p className="follow-profile-name">{item.author.title}</p>
                                <div className="verified"><img src={Verified} alt="" /></div>
                                <p className="follow-tag">{item.author.tag}</p>
                            </div>
                            <div className="follow-right">
                                <FollowBtn />
                            </div>
                        </div>
                    )
                }
            )}
            <ShowMore />
        </div>
    )
}