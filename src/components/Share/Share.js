import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useContext, useState } from "react";
import Friend from "../../asset/friend.png";
import Image from "../../asset/img.png";
import Map from "../../asset/map.png";
import { CreatePost } from "../../util/API/ClinetAPI";
import { storage } from "../../util/firebase/firebase.init";
import { authContext } from "../context/authContext";
import "./Share.scss";

const Share = () => {
    const { currentUser } = useContext(authContext);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null)
    const queryClient = useQueryClient();


    const mutation = useMutation(async (newPost) => {
        return await CreatePost(newPost);
    }, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["posts"]);
        },
    });

    const fileUpload = async (file) => {
        const storageRef = ref(storage, `files/${file.name}`);
        await uploadBytesResumable(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let imgUrl = '';
        if (file){
            imgUrl = await fileUpload(file);
        } 
        mutation.mutate({ description, img: imgUrl });
        setDescription("")
    }

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <img
                            src={currentUser?.profilePic}
                            alt={currentUser?.name}
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={`What's on your mind ${currentUser.name}?`}
                        />
                    </div>
                    <div className="right">
                        {file && <img className="file" src={URL.createObjectURL(file)} alt="" /> }
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={Map} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
