
import { TweetFragment } from './tweetComponents/tweetComponent';
import tweet from '../../../data.json';



export function TweetContainer() {
    const inTweetCollection = tweet.tweetCollection;
    return (
        <>
            <div className="tweets">
                {
                    inTweetCollection.map((item) => {
                        return <TweetFragment key={inTweetCollection.indexOf()} innerText={item.innetText}
                            Author={item.author.title}
                            dtTag={item.author.tag}
                            dtDate={item.author.ms}
                            hasImage={item.hasImage}
                            Avatar={item.avatarImage}
                            Action={item.action}>
                        </TweetFragment>
                    })
                }
            </div>
        </>
    )
}
