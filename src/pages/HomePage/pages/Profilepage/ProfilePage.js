
import React, { useEffect, useState } from "react";
import "./style.css";
import { get, ref } from "firebase/database";
import { database } from "../../../../firebase";
import { RotatingLines } from "react-loader-spinner";
// Utility to sanitize email for Firebase paths
const sanitizeEmail = (email) => {
  return email
    .toLowerCase()
    .replace(/\./g, ',')
    .replace(/#/g, '')
    .replace(/\$/g, '')
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/@/g, '_at_');
};

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = () => {
    setIsLoading(true);

    setTimeout(() => {
      const email = localStorage.getItem("email"); // 🔑 Store user's email instead of UID
      if (!email) {
        console.error("Email not found in localStorage");
        setIsLoading(false);
        return;
      }

      const safeEmail = sanitizeEmail(email);

      get(ref(database, `users/${safeEmail}`))
        .then((snapshot) => {
          const data = snapshot.val();
          setUserData(data);
          console.log("DATA GET DONE", data);
        })
        .catch((err) => {
          console.error("Error:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3000);
  };

  return (
    <div className="profilePageBaseContainer">
      <h1>Profile</h1>
      <div className="profileDataBaseContainer">
        {isLoading ? (
           <RotatingLines
           />
        ) : (
          <div>{userData?.uid || "No user data found"}</div>
        )}
      </div>
    </div>
  );
}
