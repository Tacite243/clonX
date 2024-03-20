import Head from "./2head/head";
import TweetEditor from "./3tweet-editor/tweet-editor";
import { TweetContainer } from "./4tweets/tweet";


export default function Timeline() {
    return (
        <>
            <div className="timeline">
                <Head />
                <TweetEditor />
                <TweetContainer />
            </div>
        </>
    )
}
