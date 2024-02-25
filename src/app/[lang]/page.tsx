import Image from "next/image";
import styles from "./page.module.css";
import { get } from "http";
import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";

//TODO: Add prettier

export default async function Home({params: { lang }}: { params: { lang: Locale }}) {
  const dict = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <Image
        src="/profile.jpg" // TODO: Add image
        alt="Lucas Ramos"
        width={200}
        height={200}
        className={styles.mainImage}
      />
      <h1>{dict.homepage.title}<span className={styles.mainName}>Lucas Ramos!</span></h1>
      
      <p>{dict.homepage.description}</p>

      {/* //TODO: Add links */}
      <a href=''>Canal do Youtube</a>
      <a href=''>Twitter</a>
      <a href=''>Instagram</a>
    </main>
  );
}
