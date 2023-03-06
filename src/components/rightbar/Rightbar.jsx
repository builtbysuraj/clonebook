import { Users } from "../../dummyData";
import "./Rightbar.css";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" />
          <span className="birthdayText">
            <b>John</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="righbarAd" src="/assets/ad.png" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((e, i) => (
            <Online key={i} user={e} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
