import tweetImage from '/tweetAssets/Tweet-Image.png'
import Verified from '/tweetAssets/Verified.png'
import { TweetContent } from './tweetContent'
import { Link } from 'react-router-dom'


export function TweetFragment({ innerText, Author, dtTag, dtDate, hasImage, Avatar, Action }) {
  return (
    <>
      <div className="tweet">
        <Link to={Author}><img className="tweet-avatar" src={Avatar}></img></Link>
        <TweetContent TitleAuthor={Author} TitleDate={dtDate} TitleTag={dtTag} TitleIcon={Verified} innerText={innerText} TweetImage={tweetImage} HasImage={hasImage} Action={Action}></TweetContent>
      </div>
    </>
  )
}