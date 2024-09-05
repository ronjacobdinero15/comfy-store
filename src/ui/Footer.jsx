import { Link } from "react-router-dom";

import email from "/assets/email.svg";
import twitter from "/assets/twitter.svg";
import facebook from "/assets/facebook.svg";
import linkedin from "/assets/linkedin.svg";
import instagram from "/assets/instagram.svg";
import customer_service from "/assets/customer_service.svg";

function Footer() {
  return (
    <div className="bg-stone-700">
      <footer className="divide-y divide-stone-200 px-5 py-7 text-stone-200 sm:container sm:mx-auto sm:px-10">
        <section className="grid space-y-8 pb-7 md:grid-cols-3 md:space-x-8 md:space-y-0">
          <div className="relative flex-1 space-y-4">
            <p className="text-lg transition-colors hover:text-stone-100">
              About
            </p>
            <span className="absolute top-[14px] h-[2px] w-6 rounded-full bg-stone-100"></span>
            <p className="text-justify text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              perspiciatis id repellendus rem dolorem, repudiandae totam
              blanditiis hic reiciendis illum. Id exercitationem, repellendus
              accusantium eum dolore neque. Rerum, impedit quibusdam!
            </p>
          </div>
          <div className="relative flex-1 space-y-4 pl-0 md:pl-16 lg:pl-12">
            <p className="text-lg transition-colors hover:text-stone-100">
              Follow us
            </p>
            <span className="absolute top-[14px] h-[2px] w-6 rounded-full bg-stone-100"></span>

            <div className="grid grid-cols-2 gap-y-4 text-sm md:grid-cols-1 xl:grid-cols-2">
              <Link className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100">
                <img className="h-5 w-5" src={facebook} alt="facebook_icon" />
                <span>Facebook</span>
              </Link>
              <Link className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100">
                <img className="h-6 w-6" src={instagram} alt="instagram_icon" />
                <span>Instagram</span>
              </Link>
              <Link className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100">
                <img className="h-5 w-5" src={twitter} alt="twitter_icon" />
                <span>Twitter</span>
              </Link>
              <Link className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100">
                <img className="h-6 w-6" src={linkedin} alt="linkedin_icon" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="relative flex-1 space-y-4">
            <p className="text-lg transition-colors duration-150 hover:text-stone-100">
              Contact us
            </p>
            <span className="absolute top-[14px] h-[2px] w-6 rounded-full bg-stone-100"></span>

            <div className="grid grid-cols-1 space-y-2 text-sm sm:grid-cols-2 sm:space-y-0 md:grid-cols-1 md:space-y-2 xl:grid-cols-2 xl:grid-rows-none xl:space-y-0">
              <a
                href="tel:09123456789"
                className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100"
              >
                <img
                  className="h-6 w-6"
                  src={customer_service}
                  alt="customer_service_icon"
                />
                <span>0912-345-6789</span>
              </a>
              <a
                href="mailto:Lorem30@hotmail.com"
                className="outlineStyle flex items-center gap-2 rounded-md transition-colors hover:text-stone-100"
              >
                <img className="h-7 w-7" src={email} alt="email_icon" />
                <span>Lorem30@hotmail.com</span>
              </a>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center gap-2 pt-5 sm:justify-normal sm:pt-7">
          <span className="text-lg">&copy;</span>
          <span className="text-sm">2024 Comfy. All Rights Reserved.</span>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
