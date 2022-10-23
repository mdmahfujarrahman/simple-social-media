import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  return (
      <div className="navbar">
          <div className="leftBar">
              <span onClick={() => navigate("/")}>TuT Social</span>
              <HomeOutlinedIcon />
              <DarkModeOutlinedIcon />
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
                  {/* <img
                      src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
                      alt=""
                  /> */}
                  <span>Mahfuj</span>
              </div>
          </div>
      </div>
  );
}

export default Navbar