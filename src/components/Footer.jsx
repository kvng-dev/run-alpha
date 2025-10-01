import Logo from "../ui/Logo";
import { Link } from "react-router";
import { navLinksItems } from "../data/data";
import { socials } from "../data/data";

function Footer() {
  return (
    <footer className="bg-alpha/90 font-quicksand relative container mx-auto h-auto max-w-screen bg-cover bg-center px-4 py-12 md:h-fit md:px-16 md:py-16 md:text-[18.5px] lg:px-28 xl:px-36">
      <div className="absolute top-0 left-0 -z-1 h-full w-full bg-[url('/map.jpg')]" />
      <div className="container mx-auto px-4 md:px-16 lg:px-28 xl:px-36">
        <Logo
          className={"mb-6 h-20 w-20 md:h-40 md:w-40"}
          src="/logos/run-logo.png"
        />
        <div className="flex w-full flex-row flex-wrap items-center justify-between gap-8 font-normal text-white">
          <div className="flex flex-col space-y-4 text-lg">
            <p className="">
              1 Uwa, Close, Off Billings Way, <br /> Oregun Ikeja, <br />
              Lagos, Nigeria
            </p>
            <div>
              <p className="">
                E: <a href="mailto:hello@runalpha.co">hello@runalpha.co</a>
              </p>

              <p className="">TEL: +234 909 371 7972</p>
            </div>
          </div>

          <ul className="flex flex-col gap-1 text-base md:gap-6">
            {navLinksItems
              .filter((link) => link.name !== "Home") // Filter out the "Home" link
              .map((link) => (
                <li key={link.name} className="hover:text-secondary">
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
          </ul>

          <div className="flex flex-col gap-4 text-base">
            <Link to={`disclaimer`}>
              <p>Disclaimer</p>
            </Link>
            <Link to={`privacy-policy`}>
              <p>Privacy Policy</p>
            </Link>
          </div>

          <ul className="flex h-full flex-col items-start justify-end gap-6 text-base">
            {socials.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="flex cursor-pointer items-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{<link.icon size={32} />}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-12 h-full align-text-bottom text-base text-white">
          <p>© {new Date().getFullYear()} Run Alpha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
