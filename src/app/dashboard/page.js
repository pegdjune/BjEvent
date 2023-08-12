"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CreateEvent from "../components/CreateEvent";
import SearchEvents from "../components/SearchEvent";
import NavBarDash from "../components/NavBarDash";
import logo from "../../public/images/logo.png";
import MyEvents from "../components/MyEvents";



export default function Dash() {

    const router = useRouter();

    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (pathname) => {
        setSelectedLink(pathname);
    };
        

    return (
        <section>
            <NavBarDash logoUrl={logo} onLinkClick={handleLinkClick} />
            <div className="p-32">
                <h1 className="font-bold text-3xl hover:cursor-pointer " onClick={() => handleLinkClick(null )} > Tableau de Bord</h1>
                <div >

                    {selectedLink === "/create-event" && <CreateEvent />}
                    {selectedLink === "/search-events" && <SearchEvents />}

                    {selectedLink === null && (
                        <MyEvents />

                    )}

                </div>
                
            </div>
        </section>
    );
}