import {
    openKkiapayWidget,
    addKkiapayListener,
    removeKkiapayListener,
  } from "kkiapay";
import {  useEffect } from "react";

export default function Kkiapay() {

    function open() {
        openKkiapayWidget({
          amount: 1,
          api_key: "4993f6402b6c11ee88b3817de7cda7f2",
          sandbox: true,
          email: "pegdjune19@gmail.com",
          phone: "91490501",
        });
    }

    function successHandler(response) {
        console.log(response);
      }
    
      useEffect(() => {
        addKkiapayListener('success',successHandler)
        return () => {
            removeKkiapayListener('success',successHandler)
          };
    }, []);

    return (
        <section>
            <div>
                <button className="text-center" onClick={open}>Cliquez moi</button>
            </div>
        </section>
    );
}

