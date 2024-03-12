import { useState } from "react"

const galery = ["icons/Media.svg", "icons/Gif.svg", "icons/Lists.svg", "icons/Emoji.svg", "icons/Schedule.svg"]

export default function TweetEditorActions() {
    const [table, setTable] = useState(galery)
    return (
        <div className="tweet-editor-actions">
            {table.map((item) => <img src={item} alt="" />)}
        </div>
    )
}
