import TweetEditorActions from "./tweet-editor-actions/tweet-editor-actions";
import Tweet from "../../../boutons/tweets";

export default function TweetEditorButtons(){
    return(
        <>
            <div className="tweet-editor-buttons">
                <TweetEditorActions />
                <Tweet />
            </div>
        </>
    )
}