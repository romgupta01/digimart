import { useState } from "react";
import "./styles.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function CustomInput({
  type,
  placeholder,
  placeholderColor,
  Icon,
  iconColor,
  isSecureEntry = false,
  inputValue,
  onChangeText,
}) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="CustomInputBaseContainer">
      <div className="CustomInputIconContainer">
        {Icon ? <Icon color={iconColor} size={15} /> : null}
      </div>
      <div className="CustomInputInputContainer">
        <input
          value={inputValue}
          type={isSecureEntry ? (showText ? "text" : "password") : type}
          placeholder={placeholder}
          onChange={onChangeText}
        />
      </div>
      {isSecureEntry && (
        <div
          className="CustomInputPasswordContainer"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
}

export default CustomInput;