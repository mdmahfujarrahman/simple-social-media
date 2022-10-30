import { useContext } from "react";
import { authContext } from "../context/authContext";
import "./Comments.scss";
import { CommentData } from "./constant";

const Comments = () => {
    const { currentUser } = useContext(authContext);



    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser?.profilePic} alt="" />
                <input type="text" placeholder="Write Your Comment Comment" />
                <button>Comment</button>
            </div>
            {CommentData.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment?.name}</span>
                        <p>{comment?.comment}</p>
                    </div>
                    <span className="time">1 Hours ago</span>
                </div>
            ))}
        </div>
    );
}

export default Comments