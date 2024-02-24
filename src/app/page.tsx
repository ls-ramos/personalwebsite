import Image from "next/image";
import styles from "./page.module.css";

//TODO: Add prettier
// TODO: Use translation and translate page to english

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/profile.jpg" // TODO: Add image
        alt="Lucas Ramos"
        width={200}
        height={200}
        className={styles.mainImage}
      />
      <h1>Hey there, <span className={styles.mainName}>Lucas Ramos</span> aqui!</h1>

      <p>Apaixonado por programação e por educação</p>

      {/* //TODO: Add links */}
      <a href=''>Canal do Youtube</a>
      <a href=''>Twitter</a>
      <a href=''>Instagram</a>
    </main>
  );
}
