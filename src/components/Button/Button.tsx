import { FunctionComponent, ReactNode } from "react";
import * as styles from "./Button.module.scss";

const Button: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
