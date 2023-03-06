const Online = ({ user }) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="righbarProfileImgContainer">
          <img className="rightbarProfileImg" src={user.profilePicture} />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
