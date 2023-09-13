import "./sign-in-form.styles.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const restFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      restFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Cannot sign in, wrong password");
          break;
        case "auth/user-not-found":
          alert("Cannot sign in, no user found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        alert("Google window closed withpout selecting a user");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-conatiner">
      <h2>Already have an account? </h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
