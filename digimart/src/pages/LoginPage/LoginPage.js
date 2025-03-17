import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/COLOR"
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);

  const [email, setEmail] = useState("@gmail.com");

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>DIGIMART</h1>
          <h4>Login</h4>

        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            />
            
            
              
              
            
          
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
        </div>
        <div className="loginPageContentButtonContainer style={{
        backgroundImage: `url(${ASSETS.RegisterPageBackImage})`,
      }}"><button
        class="my-button">SIGN IN</button></div>
       <div className="loginPageContentForgotPasswordContainer">Forget Password</div>
       
      


       </div>
       </div>
    
  );
}

export default LoginPage;