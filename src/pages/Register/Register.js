import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();



  return (
      <div class="register">
          <div className="card">
              <div className="left">
                  <h1>TuT Social</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, sequi alias placeat consectetur vel nam nemo
                      error, laudantium voluptas odit velit adipisci eveniet et,
                      in dignissimos dolores harum iste quas?
                  </p>
                  <span>Do you have a account</span>
                  <button onClick={() => navigate("/login")}>Login</button>
              </div>
              <div className="right">
                  <h2>Register</h2>
                  <form>
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email" />
                      <input type="text" placeholder="Username" />
                      <input
                          type={show ? "text" : "password"}
                          placeholder="Password"
                      />

                      <div className="eyeIcon">
                          {show ? (
                              <VisibilityOutlinedIcon
                                  onClick={() => setShow(!show)}
                              />
                          ) : (
                              <VisibilityOffOutlinedIcon
                                  onClick={() => setShow(!show)}
                              />
                          )}
                      </div>
                      <button>Register</button>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Register;
