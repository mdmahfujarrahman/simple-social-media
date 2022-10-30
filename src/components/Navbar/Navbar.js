import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import { themeContext } from "../context/themeContext";
import './Navbar.scss';

const Navbar = () => {
  const {toggle, darkMode} = useContext(themeContext)
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();


  return (
      <div className="navbar">
          <div className="leftBar">
              <span onClick={() => navigate("/")}>TuT Social</span>
              <HomeOutlinedIcon />
              {darkMode ? (
                  <WbSunnyOutlinedIcon onClick={toggle} />
              ) : (
                  <DarkModeOutlinedIcon onClick={toggle} />
              )}
              <GridViewOutlinedIcon />
              <div className="search">
                  <SearchOutlinedIcon />
                  <input type="text" placeholder="Search Anythings" />
              </div>
          </div>
          <div className="RightBar">
              <PersonOutlinedIcon />
              <EmailOutlinedIcon />
              <NotificationsOutlinedIcon />
              <div className="user">
                  <img src={currentUser?.profilePic} alt="user?.name" />
                  <span>{currentUser?.name}</span>
              </div>
          </div>
      </div>
  );
}

export default Navbar