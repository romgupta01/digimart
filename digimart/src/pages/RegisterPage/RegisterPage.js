import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from  "../../Components/CustomInput/CustomInput";
import ASSETS from "../../ASSETS";
import { auth } from "../../firebase";
import { useState } from "react";

import "./styles.css";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  
    
        

  return (
    <div class="RegisterPageBasecontainer">
      
      <div class="RegisterPageContentBaseContainer">
      <div div class="RegisterPageContentTitleContainer"><h1>Register Page</h1></div>
      <div class="RegisterPageInputContainer">
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
     <div div class="RegisterPageButtoncontainer" >
      
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