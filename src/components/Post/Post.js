import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";

import "./Post.scss";

const Post = ({post}) => {
    const navigate = useNavigate();
    const [commentShow, setCommentShow] = useState(false)
    const liked = true;





    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="p-info">
                        <img src={post.profilePic} alt="" />
                        <div className="more-info">
                            <span
                                className="user-name"
                                onClick={() =>
                                    navigate(`/profile/${post?.userId}`)
                                }
                            >
                                {post.name}
                            </span>
                            <span className="date">1 hours ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post?.des}</p>
                    <img src={post?.img} alt="" />
                </div>
                <div className="action">
                    <div className="item">
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        <span>11 Like</span>
                    </div>
                    <div
                        onClick={() => setCommentShow(!commentShow)}
                        className="item"
                    >
                        <TextsmsOutlinedIcon />
                        <span>3 Comments</span>
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </div>
                </div>
                {commentShow && <Comments />}
            </div>
        </div>
    );
}

export default Post