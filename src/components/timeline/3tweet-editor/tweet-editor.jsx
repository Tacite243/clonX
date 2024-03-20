import Avatar from "./avatar/Avatar"
import TweetEditorForm from "./tweet-editor-form/tweet-editor-form"

export default function TweetEditor() {
    return (
        <>
            <div className="tweet-editor">
                <Avatar />
                <TweetEditorForm />
            </div>
        </>
    )
}