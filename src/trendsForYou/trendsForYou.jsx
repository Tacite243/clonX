
export function ForYou(){
    return (
        <div className="for-you">
            <h1 className="aux-title">Trends for you</h1>
            <div className="imag">
                <img src="/icons/Settings.png" alt="settings icon" />
            </div>
        </div>
    )
}

const content = [
    {
        top : "tranding in Turkey",
        medium : "#SQUID",
        bottom : "2,006 Tweets"
    }
]
export default function TrendsForYou() {
    return (
        <div className="trends-for-you">
            <ForYou />
        </div>
    )
}