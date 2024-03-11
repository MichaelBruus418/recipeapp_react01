import styles from "./css/container.module.css";
import global from "./css/global.module.css";

export default function Container({ children }) {
  return (
    <div className={`${styles.parentContainer} ${global.maxWidth}`}>
      {children}
    </div>
  );
}
