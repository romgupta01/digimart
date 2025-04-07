import { useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import COLOR from "../../Config/color";
import "./Styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import  { useNavigate } from 'react-router-dom';
import CustomButton from "../../Components/CustomButton/CustomButton";

import { Link } from "react-router-dom";
import ForgotPassword from "../../Components/ForgotPassword/ForgotPassword";

function LoginPage() {
  
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const navigate = useNavigate();
  {/*const styles = {


  backgroundImage: `url(${basics})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  }*/}


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
     localStorage.setItem("uid", email);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async () => {
    setButtonText("Register");
    navigate("/register");
  };
  return (
    <div className="loginPageBaseContainer" >
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1 class="heading">login me</h1>
          <h4 class="heading">{`Welcome DIGIMART`}</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              // alert(e.target.value)
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type={"password"}
            placeholder={"Enter Password"}
            Icon={FaKey}
            onChangeText={(e) => setPassword(e.target.value)}
            isSecureEntry={true}
          />

{/*<Link to="/ForgotPassword">Forgot Password?</Link>*/

//forgot passwork

}
<ForgotPassword

/>

		 </div>
        
        <div className="loginPageContentButtonContainer">
          <CustomButton
            backgroundColor={"#0000FF"}
            title={buttonText}
            color={"#FFFFFF"}
            onClick={handleLogin}
          />
        </div>
        <div className="loginPageContentRegisterContainer">
          <p style={{ color: "grey", fontSize: "24px", textAlign: "center" }}>don't have an account</p>
       
          <CustomButton
            backgroundColor={"#0000FF"}
            title={buttonText}
            color={"#FFFFFF"}
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
