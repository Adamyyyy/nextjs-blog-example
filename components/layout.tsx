import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <p>Header</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
