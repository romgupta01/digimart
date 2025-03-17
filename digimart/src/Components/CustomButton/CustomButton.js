import "./styles.css";
import COLOR from "../../Config/color"; 
function CustomButton({ backgroundColor, color, title, onClick }) {
  return (
    <div
      className="CustomButtonBaseContainer"
      style={{ backgroundColor, color }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default CustomButton;