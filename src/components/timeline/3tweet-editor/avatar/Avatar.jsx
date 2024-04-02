import { Link } from "react-router-dom"


export default function Avatar() {
    return (
        <>
            <div className="avatar">
                <Link to = "/myaccount"><img src="/images/profile.jpg" alt="avatar" /></Link>
            </div>
        </>
    )
}