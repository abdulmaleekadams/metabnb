import Header from "./header/Header";
import { Red_Rose } from "@next/font/google";
import styles from "../styles/common.module.scss";
import clsx from "clsx";
import Footer from "./footer/Footer";

const redRose = Red_Rose({ weight: ["500", "700"], subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={clsx(redRose.className, styles.main)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
