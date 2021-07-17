import Share from "../Share/share";
import Post from "../Post/post";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
