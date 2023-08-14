import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RegisterProps } from "./Signup";
import { useState } from "react";

export function RegisterBox({
  handleRegister,
  handleLogin,
  onSubmitLogin,
  dispatch,
  isLogin,
}: RegisterProps) {
  return (
    <div className="register back">
      <div className="login__heading">
        <h1> Register </h1>
      </div>
      <RegisterForm
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        onSubmitLogin={onSubmitLogin}
        dispatch={dispatch}
        isLogin={isLogin}
      />
    </div>
  );
}
export function RegisterForm({
  handleRegister,
  handleLogin,
  onSubmitLogin,
  dispatch,
  isLogin,
}: RegisterProps) {
  const [password, setPassword] = useState<string>("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if(password!==e.target.value) return;
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }
  return (
    <form
      className="form2"
      onSubmit={(e) => {
        onSubmitLogin(e);
      }}
    >
      <div>
        <label htmlFor="name--reg">Name</label>
        <input
          id="name--reg"
          type={"text"}
          onChange={(e) => handleName(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="em--reg">Email</label>
        <input
          id="em--reg"
          type={`email`}
          onChange={(e) => handleEmail(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="pass--reg">Password</label>
        <input
          id="pass--reg"
          type={`password`}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="passc--reg">Confirm Password</label>
        <input
          id="passc--reg"
          type={`password`}
          onChange={(e) => handlePassword(e)}
        ></input>
      </div>
      <div className="div__btn">
        <button className="btn" onClick={(e) => handleLogin(e)}>
          Login {<FontAwesomeIcon icon={faRightToBracket} />}{" "}
        </button>
        {isLogin ? (
          <button className="btn" onClick={(e) => handleRegister(e)}>
            Register {<FontAwesomeIcon icon={faUserPlus} />}
          </button>
        ) : (
          <button className="btn" type="submit">
            Register {<FontAwesomeIcon icon={faUserPlus} />}
          </button>
        )}
      </div>
    </form>
  );
}
