import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLikes, deleteLikes, GetLikes } from "../../util/API/ClinetAPI";
import Comments from "../Comments/Comments";
import { authContext } from "../context/authContext";
import "./Post.scss";

const Post = ({post}) => {
    const { currentUser } = useContext(authContext);
    const navigate = useNavigate();
    const [commentShow, setCommentShow] = useState(false)
    const queryClient = useQueryClient();
    const { isLoading, error, data } = useQuery(
        ["likes", post.id],
        async () => {
            return await GetLikes(post.id);
        }
    );

    

    const mutation = useMutation(
        async (liked) => {
            if(liked) return await deleteLikes(post.id);
            return await addLikes({postId: post.id});    

        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["likes"]);
            },
        }
    );

   

    const handleLike = async (e) => {
        mutation.mutate(data?.data?.includes(currentUser.id));
    }


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
                            <span className="date">
                                {moment(post.createdAt).fromNow()}
                            </span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post?.description}</p>
                    <img src={post?.img} alt="" />
                </div>
                <div className="action">
                    <div className="item">
                        {data?.data?.includes(currentUser.id) ? (
                            <FavoriteIcon
                                style={{ color: "red" }}
                                onClick={handleLike}
                            />
                        ) : (
                            <FavoriteBorderIcon onClick={handleLike} />
                        )}
                        <span>{data?.data?.length} Likes</span>
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
                {commentShow && <Comments postId={post.id} />}
            </div>
        </div>
    );
}

export default Post