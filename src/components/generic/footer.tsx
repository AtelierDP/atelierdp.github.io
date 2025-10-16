
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/atelierdp?ref=atelierdp-website",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/atelierdp?ref=atelierdp-website",
  },
  {
    icon: "fab fa-instagram-square",
    link: "https://www.instagram.com/atelierdp?ref=atelierdp-website",
  },
  {
    icon: "fab fa-github",
    link: "https://www.github.com/atelierdp?ref=atelierdp-website",
  },
];


const ATELIER = [
  {
    name: "Over",
    link: "https://atelierdp.github.io?ref=atelierdp-website",
  },
  {
    name: "Blog",
    link: "https://atelierdp.github.io/blog?ref=atelierdp-website",
  },
  {
    name: "Github",
    link: "https://github.com/atelierdp?ref=atelierdp-website",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=atelierdp-website",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=atelierdp-website",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=atelierdp-website",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
];

const BOEKEN = [
  {
    name: "Domain Driven Design",
    author: "Eric Evans",   
    link: "#",
  },
  {
    name: "The Architecture Elevator",
    author: "Gregor Hohpe",
    link: "https://www.manning.com/books/the-architecture-elevator?ref=atelierdp-website",
  },
  {
    name: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    link: "https://www.goodreads.com/book/show/24113.G_del_Escher_Bach?ref=atelierdp-website",
  },
  {
    name: "Getting Things Done",
    author: "David Allen",
    link: "https://www.goodreads.com/book/show/16330226-getting-things-done?ref=atelierdp-website",
  },
];

const TECHS = [
  {
    name: "React",
    link: "#",
  },
  {
    name: "Astro",
    link: "#",
  },
  {
    name: "Material-Tailwind",
    link: "#",
  },
  {
    name: "Gatsby",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              Atelier DP
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Omdat creativiteit en technologie hand in hand gaan.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Atelier DP
                </span>
                <ul className="list-unstyled">
                  {ATELIER.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Boeken
                </span>
                <ul className="list-unstyled">
                  {BOEKEN.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Webtechnologie
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                AstroLaunch UI
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=atelierdp-website"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Pauwel Demeyer. Made with ❤️ for a better web. Inspired by Creative Tim.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
