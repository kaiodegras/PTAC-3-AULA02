import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){


    return(
        <header className={styles.footer}>

            <Image
            width={60}
            height={60}
            src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}/>

           
        </header>
    )
}