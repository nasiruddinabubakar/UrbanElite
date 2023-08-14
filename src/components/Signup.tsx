import { useReducer, useState } from "react";
import { LoginBox } from "./LoginBox";
import { RegisterBox } from "./RegisterBox";

const initialState: Structure = {
  name: "",
  email: "",
  password: "",
};
type Structure = {
  name: string;
  email: string;
  password: string;
};
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string };

function reducer(state: Structure, action: Action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default function Signup() {
  const [User, dispatch] = useReducer(reducer, initialState);
  const [userdetail, setUser] = useState<object>(initialState);
  const [isLogin, setIsLogin] = useState<boolean>(true);

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

  function onSubmitLogin(e:React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault();
    console.log(User);
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
    // }
    // if (User.name === "" && User.email === "")
    //   setUser(User);
    // try {
    //   const response = await postData("/api/v1/users", userdetail);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
     }
  }

  return (
    <div className="container">
      {isLogin ? (
        <LoginBox
          handleRegister={handleRegister}
          handleLogin={handleLogin}
          onSubmitLogin={onSubmitLogin}
          dispatch ={dispatch}
          isLogin={isLogin}
        />
      ) : (
        <RegisterBox
          handleRegister={handleRegister}
          handleLogin={handleLogin}
          onSubmitLogin={onSubmitLogin}
          dispatch={dispatch}
          isLogin={isLogin}
        />
      )}
    </div>
  );
}
export interface RegisterProps {
  handleRegister: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleLogin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void,
  dispatch:React.Dispatch<Action>,
  isLogin:boolean;
}
