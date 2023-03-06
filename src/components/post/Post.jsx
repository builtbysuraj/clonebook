import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./Post.css";

const Post = ({ post }) => {
  const { desc, photo, date, like, comment } = post;

  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount + 1 : likeCount - 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate"> {date} </span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={photo} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              onClick={clickHandler}
              src="/assets/like.png"
            />
            <img
              className="likeIcon"
              onClick={clickHandler}
              src="/assets/heart.png"
            />
            <span className="postLikeCounter">{likeCount} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
