import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { RegisterProps } from "./Signup";

export function RegisterBox({
    handleRegister, handleLogin, onSubmitLogin,
}: RegisterProps) {
    return (
        <div className="register back">
            <div className="login__heading">
                <h1> Register </h1>
            </div>
            <RegisterForm
                handleRegister={handleRegister}
                handleLogin={handleLogin}
                onSubmitLogin={onSubmitLogin} />
        </div>
    );
}
export function RegisterForm({ handleRegister, handleLogin }: RegisterProps) {
    return (
        <form className="form2">
            <div>
                <label htmlFor="name--reg">Name</label>
                <input id="name--reg" type={"text"}></input>
            </div>
            <div>
                <label htmlFor="em--reg">Email</label>
                <input id="em--reg" type={`email`}></input>
            </div>
            <div>
                <label htmlFor="pass--reg">Password</label>
                <input id="pass--reg" type={`password`}></input>
            </div>
            <div>
                <label htmlFor="passc--reg">Confirm Password</label>
                <input id="passc--reg" type={`password`}></input>
            </div>
            <div className="div__btn">
                <button className="btn" onClick={(e) => handleLogin(e)}>
                    Login {<FontAwesomeIcon icon={faRightToBracket} />}{" "}
                </button>
                <button className="btn" onClick={(e) => handleRegister(e)}>
                    Register {<FontAwesomeIcon icon={faUserPlus} />}{" "}
                </button>
            </div>
        </form>
    );
}
