"use client"
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import logo from "../../public/images/logo.png";
import Imgheader2 from "../../public/images/header2.jpg";


export default function Authentification () {
    return (
        <section>
            <NavBar logoUrl={logo} />
            <Login urlImg={Imgheader2} />
        </section>
    );
}