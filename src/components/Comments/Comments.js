import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import moment from "moment";
import { useContext, useState } from "react";
import { AddComment, GetComments } from "../../util/API/ClinetAPI";
import { authContext } from "../context/authContext";
import "./Comments.scss";

const Comments = ({ postId }) => {
    const { currentUser } = useContext(authContext);
    const [description, setDescription] = useState("")
    const { isLoading, error, data } = useQuery(["comments"], async () => {
        return await GetComments(postId);
    });

    const queryClient = useQueryClient();

    const mutation = useMutation(
        async (newComment) => {
            return await AddComment(newComment);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const handleComment = async (e) => {
        e.preventDefault();
        mutation.mutate({ description, postId });
        setDescription("")
    }




    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser?.profilePic} alt="" />
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    value={description}
                    placeholder="Write Your Comment Comment"
                />
                <button onClick={(e) => handleComment(e)}>Comment</button>
            </div>
            {isLoading
                ? "Loading"
                : data.data.map((comment) => (
                      <div className="comment">
                          <img src={comment.profilePic} alt="" />
                          <div className="info">
                              <span>{comment?.name}</span>
                              <p>{comment?.description}</p>
                          </div>
                          <span className="time">
                              {moment(comment.createdAt).fromNow()}
                          </span>
                      </div>
                  ))}
        </div>
    );
};

export default Comments;
