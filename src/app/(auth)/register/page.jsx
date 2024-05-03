import { register } from "@/lib/action";
import styles from "./register.module.css";
import React from "react";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" required />
          <input type="email" placeholder="email" name="email" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="password-again"
            name="passwordRepeat"
            required
          />

          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
