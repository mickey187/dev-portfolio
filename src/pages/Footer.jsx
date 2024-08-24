import twitter from "../assets/svg/twitter.svg";
import github from "../assets/svg/github.svg";
import linkedIn from "../assets/svg/in.svg";
import instagram from "../assets/svg/instagram.svg";
import coderIllustration from "../assets/img/coder-illustration-3.jpg";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 pt-5 pb-5 w-full">
        <div className="container mx-auto px-5 sm:px-10">
          {/* Connect Section */}
          <div className="flex flex-col items-center my-10">
            <h1 className="text-xl sm:text-2xl text-white text-center my-3">Let's Connect</h1>
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="https://github.com/mickey187"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <img src={github} alt="GitHub" className="w-full h-full object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/in/michias-hailu-859135213/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <img src={linkedIn} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <img src={twitter} alt="Twitter" className="w-full h-full object-contain" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <img src={instagram} alt="Instagram" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Footer Text */}
          <h1 className="text-lg sm:text-xl text-white text-center mt-5">
            © 2024 Michias Hailu Alemu. Thanks for stopping by!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
