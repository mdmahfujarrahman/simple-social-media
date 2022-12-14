import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../components/context/authContext";
import "./Login.scss";

const Login = () => {
    const [show, setShow] = useState(false)
    const { login } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputData((prev) => ({...prev, [e.target.name]: e.target.value}))

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(inputData);
            navigate('/')
        } catch (err) {
             setError(err.response.data);
        }
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, sequi alias placeat consectetur vel nam nemo
                        error, laudantium voluptas odit velit adipisci eveniet
                        et, in dignissimos dolores harum iste quas?
                    </p>
                    <span>Don't you have a account</span>
                    <button onClick={() => navigate("/register")}>
                        Register
                    </button>
                </div>
                <div className="right">
                    <h2>Login</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
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
                        {error && <span style={{ color: "red" }}>{error}</span>}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login