import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";

export const Context = createContext(null);

const TweetContext = ({ children }) => {
  const { data: tweetData } = useFetch(
    "https://x-clone-backend-7yd3.onrender.com/tweets"
  );
  const [tweets, setTweets] = useState(null);
  useEffect(() => setTweets(tweetData), [tweetData]);

  const { data: currentData } = useFetch(
    "https://x-clone-backend-7yd3.onrender.com/current-user"
  );
  const [current, setCurrent] = useState(null);
  useEffect(() => setCurrent(currentData), [currentData]);

  const { data: navData } = useFetch("https://x-clone-backend-7yd3.onrender.com/nav");
  const [nav, setNav] = useState(null);
  useEffect(() => setNav(navData), [navData]);

  const { data: trendData } = useFetch(
    "https://x-clone-backend-7yd3.onrender.com/trends"
  );
  const [trend, setTrend] = useState(null);
  useEffect(() => setTrend(trendData), [trendData]);

  return (
    tweets &&
    current &&
    nav &&
    trend && (
      <Context.Provider value={{ tweets, setTweets, current, nav, trend }}>
        {children}
      </Context.Provider>
    )
  );
};
export default TweetContext;
