import { TweetFragment } from './tweetComponents/tweetComponent';
import tweetCollection from './tweetData';

export function TweetContainer(){
    return (
        <>
           <div className="tweets">
            {
                tweetCollection.map((fragment) => {
                    return <TweetFragment key={tweetCollection.indexOf(fragment)} innerText={fragment.innetText} 
                           Author={fragment.author.title} 
                           dtTag={fragment.author.tag} 
                           dtDate={fragment.author.ms}
                           hasImage={fragment.hasImage}
                           Avatar={fragment.avatarImage}
                           Action={fragment.action}>
                    </TweetFragment>
                })
            }
           </div>
        </>
    )
}