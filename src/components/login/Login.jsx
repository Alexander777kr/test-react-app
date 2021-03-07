import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utilites/validators/validators";
import { Input } from "../common/formControls/FormControls";
import classes from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <div>
          <Field
            component={Input}
            name={"email"}
            placeholder={"Enter email"}
            type={"text"}
            className={classes.formText}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            component={Input}
            name={"password"}
            placeholder={"Enter password"}
            type={"password"}
            className={classes.formPassword}
            validate={[required]}
          />
        </div>

        <div>
          <Field
            component={Input}
            name={"rememberMe"}
            type={"checkbox"}
            className={classes.formCheckbox}
          />
          <span>Remember me</span>
        </div>
        <div>
          {props.error && (
            <div className={classes.someError}>{props.error}</div>
          )}
          <button className="greenBtn">Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={classes.formContainer}>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
