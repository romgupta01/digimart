import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { auth, database } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import "./Styles.css";
import digi from "../../ASSETS/images/digi.jpg";
import basics from "../../ASSETS/images/basics.jpg";


function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const [contactnumber, setContactnumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();
  const styles = {
  backgroundImage: `url(${basics})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  }

  const saveUserDetails = (data) => {
    set(ref(database, `users/${data.uid}`), data);
    navigate("/login");
  };
  
const handleLogin = async(e) => {
  setButtonText("login");
  navigate("/login");
}
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
    <div  class="RegisterPageBaseContainer"
    style={styles}
    >
      <div class="RegisterPageContentBaseContainer"> 
     {/*<d* class="RegisterPageContentTitleContainer">
      <h1>Register Page</h1></d* >*/}
      
      
         <div class="RegisterPageContentTitleContainer">
      <h1 class="heading">Register Page</h1></div>
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
      />
      <CustomInput
      placeholder={"Contact"}
      value={contactnumber}
      onChangeText={(e) => setContactnumber(e.target.value)}
      />
      <CustomInput
      placeholder={"Pincode"}
      value={pincode}
      onChangeText={(e) => setPincode(e.target.value)}
        />
        <CustomInput
        placeholder={"Profession"}
        value={profession}
        onChangeText={(e) => setProfession(e.target.value)}
      

        />

    </div>
    <div class="RegisterPageContentButtonContainer">
      
      <CustomButton
        backgroundColor={"#0000FF"}
        title={buttonText}
        color={"#FFFFFF"}
        onClick={handleRegister}
        />
        </div>


        <div class="RegisterPageContentLoginButtonContainer ">
        <h  style={{ color: "grey", fontSize: "24px", textAlign: "center" }}>ALready have an account?</h>
        <CustomButton
        backgroundColor={"#0000FF"}
        title={buttonText}
        color={"#FFFFFF"}
        onClick={handleLogin}
        
        />
      </div>
  </div>
       
   
   <div class="RegisterPageContentBaseImageContainer">
    <img src={digi} alt='image' />
    </div>
   
</div>
      
  
  );
}

export default RegisterPage;