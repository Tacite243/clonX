import TweetEditorInput from "./tweet-editor-input/tweet-editor-input"
import TweetEditorButtons from "./tweet-editor-buttons/tweet-editor-buttons"

export default function TweetEditorForm() {
    return (
        <>
            <div className="tweet-editor-form">
                <TweetEditorInput />
                <TweetEditorButtons />
            </div>
        </>
    )
}