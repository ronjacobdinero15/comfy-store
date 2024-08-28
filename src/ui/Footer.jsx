import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="divide-y divide-stone-200 bg-stone-700 px-10 py-7 text-stone-200">
      <section className="grid space-y-8 pb-7 md:grid-cols-3 md:space-x-8 md:space-y-0">
        <div className="relative flex-1 space-y-4">
          <p className="transition-colors duration-150 hover:text-stone-100">
            About
          </p>
          <span className="absolute top-2 h-1 w-6 rounded-full bg-stone-100"></span>
          <p className="text-justify text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            perspiciatis id repellendus rem dolorem, repudiandae totam
            blanditiis hic reiciendis illum. Id exercitationem, repellendus
            accusantium eum dolore neque. Rerum, impedit quibusdam!
          </p>
        </div>

        <div className="relative flex-1 space-y-4 pl-0 md:pl-16 lg:pl-12">
          <p className="transition-colors duration-150 hover:text-stone-100">
            Follow us
          </p>
          <span className="absolute top-2 h-1 w-6 rounded-full bg-stone-100"></span>
          <div className="grid grid-cols-2 gap-y-4 text-sm sm:grid-cols-1 lg:grid-cols-2">
            <Link className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img
                className="h-5 w-5"
                src="./facebook.svg"
                alt="facebook_icon"
              />
              <span>Facebook</span>
            </Link>

            <Link className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img
                className="h-6 w-6"
                src="./instagram.svg"
                alt="instagram_icon"
              />
              <span>Instagram</span>
            </Link>

            <Link className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img className="h-6 w-6" src="./twitter.svg" alt="twitter_icon" />
              <span>Twitter</span>
            </Link>

            <Link className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img
                className="h-7 w-7"
                src="./linkedin.svg"
                alt="linkedin_icon"
              />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="relative flex-1 space-y-4">
          <p className="transition-colors duration-150 hover:text-stone-100">
            Contact us
          </p>
          <span className="absolute top-2 h-1 w-6 rounded-full bg-stone-100"></span>
          <div className="grid grid-rows-2 space-y-2 text-sm xl:grid-cols-2 xl:grid-rows-none xl:space-y-0">
            <div className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img
                className="h-6 w-6"
                src="./customer_service.svg"
                alt="customer_service_icon"
              />
              <a href="tel:09123456789">0912-345-6789</a>
            </div>
            <div className="flex items-center gap-2 transition-colors duration-150 hover:text-stone-100">
              <img className="h-7 w-7" src="./email.svg" alt="email_icon" />
              <a href="mailto:Lorem30@hotmail.com">Lorem30@hotmail.com</a>
            </div>
          </div>
        </div>
      </section>
      {/* LATER: Continue footer */}
      <section className="flex justify-center gap-2 pt-7 text-sm sm:justify-normal">
        &copy;<span>2024 Comfy. All Rights Reserved.</span>
      </section>
    </footer>
  );
}

export default Footer;
