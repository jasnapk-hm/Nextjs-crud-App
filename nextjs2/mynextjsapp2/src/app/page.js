// import Image from "next/image";

import About from "./about";
import HomePage from "./home";
// import styles from "./page.module.css";
// import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main >

      {/* <h1>Welcome to Next JS </h1> */}
      <HomePage title="" />
      <nav>
            {/* <a href="/">Home</a><br></br> */}
            {/* <a href="/contact">Contact</a>
            <a href="/login">Login</a> */}
            <a href="/admin">Admin</a><br></br>
            <a href="/user">Users</a><br></br>
          </nav>
    </main>
  );
}
