import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { auth, database } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import "./Styles.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const navigate = useNavigate();

  const saveUserDetails = (data) => {
    set(ref(database, `users/${data.uid}`), data);
    navigate("/login");
  };

  const handleRegister = async () => {
    try {
      if (email == "" || password == "" || confirmPassword == "") {
        alert("Please fill the fields");
      } else if (password != confirmPassword) {
        alert("Password is not matching");
      } else {
        setButtonText("Please Wait...");
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          confirmPassword
        );
        setButtonText("Register");
        if (response.user.uid) {
          const userData = {
            uid: response.user.uid,
            email: response.user.email,
            name: name,
          };
          saveUserDetails(userData);
        } else {
          alert("Failed to register");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } catch (err) {
      setButtonText("Register");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(err);
    }
  };

  return (
    <div  class="RegisterPageBaseContainer">
      <div class="RegisterPageContentBaseContainer"> 
        <div class="RegisterPageContentTitleContainer">
      <h1>Register Page</h1></div>
      
      <div class="RegisterPageContentInputContainer">
      <CustomInput
        placeholder={"name"}
        inputValue={name}
        onChangeText={(e) => setName(e.target.value)}
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
      <CustomInput
        placeholder={"Confirm Password"}
        inputValue={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e.target.value)}
        isSecureEntry={true}
      /></div>
    <div class="RegisterPageContentButtonContainer">
      
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

export default RegisterPage;