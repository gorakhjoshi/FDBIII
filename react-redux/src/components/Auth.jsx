import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  function loginHandler(e) {
    e.preventDefault();
    dispatch(AuthActions.login());
  }
  return isAuthenticated ? (
    <div>Logged in</div>
  ) : (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
