import styles from "./css/nav.module.css";
import global from "./css/global.module.css";

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={`${styles.content} ${global.maxWidth}`}>
        🍔 Recipe App
      </div>
    </div>
  );
}
