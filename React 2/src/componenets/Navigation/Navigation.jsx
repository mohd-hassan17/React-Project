
import styles from "./Navigation.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navigation = () => {

  useGSAP(() => {
    gsap.from(".nav",{
      y:-100,
      duration:1
    })
  })
  return (
    <nav className={`${styles.navigation} container nav`}>
      <div className="logo">
        <img src="/logo.png" alt="do some coding logo" />
      </div>

      <ul>    
        <li><a href="#"> Home</a></li>
        <li><a href="#"> About</a></li>
        <li><a href="#"> Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;