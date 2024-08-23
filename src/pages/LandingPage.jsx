import twitter from "../assets/svg/twitter.svg";
import github from "../assets/svg/github.svg";
import linkedIn from "../assets/svg/in.svg";
import instagram from "../assets/svg/instagram.svg";
import coderIllustraion from "../assets/img/coder-illustration-3.jpg";
const LandingPage = () => {
  return (
    <>
      <div className=" h-lvh py-32 ">
        <div className="flex flex-row  space-x-10 px-10  ">
          <div className="w-[10%]">
            <ul className="space-y-6">
              <li>
                <a href="https://github.com/mickey187" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/michias-hailu-859135213/">
                  <img src={linkedIn} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[40%] pt-10">
            <h1 className="font-gugi text-6xl">Full-Stack</h1>
            <h1 className="font-gugi text-6xl mt-3 text-[#000aff]">
              Developer.
            </h1>
            <p className="font-roboto text-xl text-wrap  mt-3">
              Helping people turn their ideas into sites & apps that work.
              Professional and Cost-Effective.
            </p>
            <div className="mt-5">
              <div>
                <button className="w-48 h-14 rounded-md font-bold bg-[#000aff] text-white">
                  HIRE ME
                </button>
              </div>
              <div>
                <button className="w-48 h-14 rounded-md font-bold bg-transparent mt-4 text-indigo-500 border border-indigo-400">
                  View Projects
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img src={coderIllustraion} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
