import ASSETS from "../../ASSETS";
import CustomButton from "../../Components/CustomButton/CustomButton";
import COLOR from "../../Config/color";
import "./Styles.css";


function HomePage() {
  return (
    <div
      className="baseContainer"
      style={{
        backgroundImage: `url(${ASSETS.RegisterPageBackImage})`,
      }}
    >
      {/* <img src={require("../../assets/images/HomePageBackImage.jpg")} alt="" /> */}
      {/* <img src={ASSETS.homePageImage} alt="" />
      <img id="second" src={ASSETS.homePageImage} alt="" />
      <img src={ASSETS.homePageImage} alt="" /> */}

      <div className="contentBaseContainer">
        <h1>DIGIMART</h1>
        
        <CustomButton
          backgroundColor={COLOR.secondSecondaryColor}
          color={COLOR.blackColor}
          title={"Grab your product"}
          onClick={() => alert("Click Done")}
        />
      </div>
    </div>
  );
}

export default HomePage;