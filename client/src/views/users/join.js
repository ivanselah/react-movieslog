import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";


const Join = () => {
    return (
        <>
        <div className="users-form">
            <span>MOVIESLOG</span>
        </div>
        <form method="POST" className="users-join-form">
            <input placeholder="Username" name="username" type="text" required autoComplete="off" />
            <input placeholder="Email" name="email" type="email" required autoComplete="off" />
            <input placeholder="Password" name="password" type="password" required autoComplete="off"/>
            <input placeholder="Confirm Password" name="password2" type="password" required autoComplete="off"/>
            <input type="submit" value="Join" />
            <div className="social-join">
                <a href="" className="social-join__btn">
                    <FaGithub className="github-icon"></FaGithub> 깃허브 로그인 &rarr;
                </a>
            </div>
            <div className="users-join-form__btn-switch">
                <span>Already have an account?</span>
                <a href="/login" className="users-join-form__btn-switch__create">Login now &rarr;</a>
            </div>
        </form>
        </>
    )
};
export default Join;