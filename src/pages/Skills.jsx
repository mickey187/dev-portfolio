import ProgressBar from "../components/ProgressBar/ProgressBar";
import "./Skills.css";
const Skills = () => {
  return (
    <>
      <div className="flex flex-row space-x-3 mx-10 p-3">
        <div className="w-1/2">
          <h1 className="text-4xl font-roboto font-bold ">
            Front-End
          </h1>
          <div className="flex flex-col mt-10">
            <div className="flex flex-row space-x-3">
              <h1 className="font-roboto font-semibold text-xl w-24">HTML</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3 mt-6">
              <h1 className="font-roboto font-semibold text-xl w-24">CSS</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3 mt-6">
              <h1 className="font-roboto font-semibold text-xl w-24">JS</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3 mt-6">
              <h1 className="font-roboto font-semibold text-xl w-24">React</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3 mt-6">
              <h1 className="font-roboto font-semibold text-xl w-24">Tailwind</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-3 mt-6">
              <h1 className="font-roboto font-semibold text-xl w-24">Bootstrap</h1>
              <div className="w-72">
                <ProgressBar
                  initialPercentage={5}
                  targetPercentage={95}
                  duration={6000}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-roboto font-bold ">
            Back-End
          </h1>
        </div>
      </div>
    </>
  );
};

export default Skills;
