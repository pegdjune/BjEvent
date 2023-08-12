"use client"
import NavBar from "../components/NavBar";
import logo from "../../public/images/logo.png";
import Imgheader1 from "../../public/images/header1.jpg";
import Signin from "../components/Signin";

export default function Register() {
    return (
        <section>
            <NavBar logoUrl={logo} />
            <Signin urlImg={Imgheader1} />
          
        </section>
    );
}