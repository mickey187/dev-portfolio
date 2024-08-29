import { Link } from "react-router-dom";
import twitter from "../assets/svg/twitter.svg";
import github from "../assets/svg/github.svg";
import linkedIn from "../assets/svg/in.svg";
import instagram from "../assets/svg/instagram.svg";
import coderIllustraion from "../assets/img/coder-illustration-3.jpg";
import upworkIcon from "../assets/svg/upwork-icon.svg";
import fiverrIcon from "../assets/svg/fiverr.svg";

const LandingPage = () => {
  return (
    <>
      <div className=" h-lvh py-32 ">
        <div className="flex flex-col md:flex-row md:space-x-10 px-10">
          <div className="w-full md:w-[10%] mb-10 md:mb-0">
            <ul className="flex md:flex-col justify-center md:justify-start space-x-6 md:space-x-0 md:space-y-6">
              <li>
                <a
                  href="https://github.com/mickey187"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" width="48" height="48" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michias-hailu-859135213/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="" width="48" height="48" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~019e59c7669fe9fa7c?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={upworkIcon}
                    alt=""
                    className="rounded-full"
                    width="48"
                    height="48"
                  />{" "}
                </a>
              </li>
              <li>
                <a
                  href=" https://www.fiverr.com/mickeyhailu1998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fiverrIcon} alt="" width="48" height="48" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-[40%] pt-10">
            <h1 className="font-gugi text-4xl md:text-6xl">Full-Stack</h1>
            <h1 className="font-gugi text-4xl md:text-6xl mt-3 text-[#000aff]">
              Developer.
            </h1>
            <p className="font-roboto text-lg md:text-xl mt-3">
              Turning Concepts into High-Performing Websites & Apps. Your
              Vision, Our Expertise.
            </p>
            <div className="mt-5">
              <div className="">
                <Link
                  to="/contact"
                  className="w-full md:w-48 h-14 rounded-md font-bold bg-[#000aff] text-white flex items-center justify-center"
                >
                  HIRE ME
                </Link>
              </div>
              <div>
                <Link to="/projects" className="w-full md:w-48 h-14 rounded-md font-bold bg-transparent mt-4 text-[#000aff] border border-indigo-400 flex items-center justify-center">
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <img src={coderIllustraion} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
