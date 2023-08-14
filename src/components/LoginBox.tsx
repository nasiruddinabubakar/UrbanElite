import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RegisterProps } from "./Signup";

export function LoginBox({
  handleRegister,
  handleLogin,
  onSubmitLogin,
  dispatch,
  isLogin,
}: RegisterProps) {
  return (
    <div className="login front">
      <div className="login__heading">
        <h1> Login </h1>
      </div>
      <LoginForm
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        onSubmitLogin={onSubmitLogin}
        dispatch={dispatch}
        isLogin={isLogin}
      />
    </div>
  );
}

export function LoginForm({
  handleRegister,
  handleLogin,
  onSubmitLogin,
  dispatch,
  isLogin,
}: RegisterProps) {
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        onSubmitLogin(e);
      }}
    >
      <div>
        <label htmlFor="em--log">Email</label>
        <input
          id="em--log"
          type={`email`}
          onChange={(e) => handleEmail(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="pass--log">Password</label>
        <input
          id="pass--log"
          type={`password`}
          onChange={(e) => handlePassword(e)}
        ></input>
      </div>

      <div className="div__btn">
        {isLogin ? (
          <button className="btn" type="submit">
            Login {<FontAwesomeIcon icon={faRightToBracket} />}{" "}
          </button>
        ) : (
          <button className="btn" type="submit" onClick={(e) => handleLogin(e)}>
            Login {<FontAwesomeIcon icon={faRightToBracket} />}{" "}
          </button>
        )}
        <button
          id="reg--btn"
          className="btn"
          onClick={(e) => handleRegister(e)}
        >
          Register {<FontAwesomeIcon icon={faUserPlus} />}{" "}
        </button>
      </div>
    </form>
  );
}
