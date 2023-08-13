import { useState } from "react";
import { LoginBox } from "./LoginBox";
import { RegisterBox } from "./RegisterBox";
export const userStructure: {
  name: string;
  email: string;
  password: string;
} = {
  name: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [userdetail, setUser] = useState<object>(userStructure);
  const [isLogin, setIsLogin] = useState<Boolean>(true);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json(); // Return the parsed response JSON
  }

  function onSubmitLogin(user: object) {
    setUser(user);
  }
  function handleRegister(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (isLogin) {
      setIsLogin(false);
      return;
    }
  }
  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (!isLogin) {
      setIsLogin(true);
      return;
    }
    if (userStructure.name === "" && userStructure.email === "")
      setUser(userStructure);
    try {
      const response = await postData("/api/v1/users", userdetail);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      {isLogin ? (
        <LoginBox
          handleRegister={handleRegister}
          handleLogin={handleLogin}
          onSubmitLogin={onSubmitLogin}
        />
      ) : (
        <RegisterBox
          handleRegister={handleRegister}
          handleLogin={handleLogin}
          onSubmitLogin={onSubmitLogin}
        />
      )}
    </div>
  );
}
export interface RegisterProps {
  handleRegister: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleLogin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSubmitLogin: (user: object) => void;
}
