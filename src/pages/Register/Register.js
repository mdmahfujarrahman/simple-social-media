import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../util/API/ClinetAPI";
import "./register.scss";

const Register = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    }) 
    
    const handleChange =(e) => {
        setInputData((prev) => ({...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await CreateUser(inputData);
            console.log(user);

        } catch (err) {
            setError(err.response.data);
        }
    }


    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>TuT Social</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, sequi alias placeat consectetur vel nam nemo
                        error, laudantium voluptas odit velit adipisci eveniet
                        et, in dignissimos dolores harum iste quas?
                    </p>
                    <span>Do you have a account</span>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
                <div className="right">
                    <h2>Register</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
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

                        {error && <span style={{color: 'red'}}>{error}</span>}
                        <button onClick={(e) => handleSubmit(e)}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
