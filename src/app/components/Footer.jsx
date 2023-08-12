import { Link } from "@inertiajs/react";
import { Footer } from "flowbite-react";
import logo from "../../public/images/logo.png";

const MyFooter = ({ settings }) => {
  return (
    <Footer
      container
      theme={{
        root: {
          base: "w-full bg-[#131d29] md:flex md:items-center md:justify-between border-t border-gray-500 mt-10 p-10",
        },
      }}
    >
      <div className="w-full m-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <div>
              <Link href="/" className="mb-4 flex items-center sm:mb-0">
                <img alt="BjEM" src={logo.src} className="mr-3 h-8" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
                  BjEventMarket
                </span>
              </Link>
            </div>
            <div className="mt-4 text-white">{settings.footer_text}</div>
            <div className="mt-4 text-white">
              {/* Ajoutez ici du texte supplémentaire si nécessaire */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Adresse" className="text-white" />
              <div className="text-white">{settings.footer_address}</div>
            </div>
            <div>
              <Footer.Title title="Contactez-nous" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href={"tel:" + settings.footer_contact1}
                  className="text-white"
                >
                  {settings.footer_contact1}
                </Footer.Link>
                <Footer.Link
                  href={"tel:" + settings.footer_contact2}
                  className="text-white"
                >
                  {settings.footer_contact2}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Mentions Légales" className="text-white" />
              <Footer.LinkGroup col>
                <li className="last:mr-0 md:mr-6">
                  <Link
                    href="/cgu"
                    className="hover:underline text-white"
                  >
                    CGU
                  </Link>
                </li>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full my-2 sm:mx-auto lg:my-5"></div>
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <div className="text-sm text-white text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="ml-1 hover:underline">
              BjEventMarket
            </Link>
            {/* Ajoutez ici du texte supplémentaire si nécessaire */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
