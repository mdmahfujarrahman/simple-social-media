import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import Posts from "../../components/Posts/Posts";
import "./ProfilePage.scss";

const ProfilePage = () => {
    return (
        <div className="profile">
            <div className="images-container">
                <img
                    src="https://wallpapercave.com/wp/wp3460281.jpg"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c"
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
                        <span>Mahfuj Ahmed</span>
                        <div className="uInfo">
                            <div className="item">
                                <PlaceIcon />
                                <span>Bangladesh</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <a target="_blank" href="https://github.com/mdmahfujarrahman" rel="noreferrer">
                                    <span>Visit Website</span>
                                </a>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
            <Posts/>
            </div>
        </div>
    );
};

export default ProfilePage;
