import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from  "../../Components/CustomInput/CustomInput";
import ASSETS from "../../ASSETS";
import { auth } from "../../firebase";
import { useState } from "react";
import "./Styles.css";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  
    
        

  return (
    <div className="RegisterPageBasecontainer">
      
      
      <div className="RegisterPageContentBaseContainer">
      <div  className="RegisterPageContentTitleContainer"><h1>Register Page</h1></div>
      <div className="RegisterPageContentInputContainer">
        <CustomInput
        placeholder={"Name"}
        inputValue={"Name"}
        onChangeText={(e) => setEmail(e.target.value)}
      />
      



      <CustomInput
        placeholder={"Email"}
        inputValue={email}
        onChangeText={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placeholder={"Password"}
        inputValue={password}
        onChangeText={(e) => setPassword(e.target.value)}
        isSecureEntry={true}
      />
     <div div className="RegisterPageButtonContainer" >
      
      <CustomButton
        backgroundColor={"#0000FF"}
        title={"Register"}
        color={"#ffff"}
        onClick={handleRegister}
      />
      </div>
      </div>
</div>
    </div>
  );
}

export default RegisterPage;