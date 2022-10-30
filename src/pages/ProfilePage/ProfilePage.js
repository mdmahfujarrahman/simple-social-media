import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../components/context/authContext";
import Posts from "../../components/Posts/Posts";
import { addRelationship, deleteRelationship, GetRelationship, getUserData } from "../../util/API/ClinetAPI";
import "./ProfilePage.scss";


const ProfilePage = () => {
    const { id } = useParams();
    const { currentUser } = useContext(authContext);
    const queryClient = useQueryClient();
    const { isLoading, error, data } = useQuery(
        ["user"],
        async () => {
            const res = await getUserData(id);
            return res.data;
        }
    );
    const {isLoading: rsIsLoading, data: relationshipData } = useQuery(
        ["relationship"],
        async () => {
            const res = await GetRelationship(id);
            return res.data
        }
    );
    
    

    const mutation = useMutation(
        async (following) => {
            debugger;
            if(following) return await deleteRelationship(id);
            return await addRelationship({userId: id});    

        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["relationship"]);
            },
        }
    );

   

    const handleFollow = () => {
        mutation.mutate(data?.includes(currentUser.id));
    }
    
    return (
        <div className="profile">
            {isLoading ? (
                "Loading..."
            ) : (
                <>
                    <div className="images-container">
                        <img src={data?.coverPic} alt="" className="cover" />
                        <img
                            src={data?.profilePic}
                            alt=""
                            className="profilePic"
                        />
                    </div>
                    <div className="profile-container">
                        <div className="info">
                            <div className="social">
                                <a href="http://facebook.com">
                                    <FacebookTwoToneIcon fontSize="large" />
                                </a>
                                <a href="http://facebook.com">
                                    <InstagramIcon fontSize="large" />
                                </a>
                                <a href="http://facebook.com">
                                    <TwitterIcon fontSize="large" />
                                </a>
                                <a href="http://facebook.com">
                                    <LinkedInIcon fontSize="large" />
                                </a>
                                <a href="http://facebook.com">
                                    <PinterestIcon fontSize="large" />
                                </a>
                            </div>
                            <div className="center">
                                <span>{data?.data?.name}</span>
                                <div className="uInfo">
                                    <div className="item">
                                        <PlaceIcon />
                                        <span>{data?.data?.city}</span>
                                    </div>
                                    <div className="item">
                                        <LanguageIcon />
                                        <a
                                            target="_blank"
                                            href="https://github.com/mdmahfujarrahman"
                                            rel="noreferrer"
                                        >
                                            <span>
                                                <a href={data?.website}>
                                                    website
                                                </a>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {rsIsLoading ? (
                                    "loading"
                                ) : parseInt(id) === currentUser.id ? (
                                    <button>Update</button>
                                ) : (
                                    <button onClick={handleFollow}>
                                        {relationshipData?.includes(
                                            currentUser.id
                                        )
                                            ? "Following"
                                            : "Follow"}
                                    </button>
                                )}
                            </div>
                            <div className="right">
                                <EmailOutlinedIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        <Posts />
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfilePage;
