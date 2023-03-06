import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((e, i) => (
          <Post key={i} post={e} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
