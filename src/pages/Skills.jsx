import ProgressBar from "../components/ProgressBar/ProgressBar";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:space-x-3 mx-5 sm:mx-10 p-3 bg-white rounded-lg">
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
          <h1 className="text-3xl sm:text-4xl font-roboto font-bold">
            Front-End
          </h1>
          <div className="flex flex-col mt-10">
            {[
              { skill: "HTML", percentage: 95 },
              { skill: "CSS", percentage: 95 },
              { skill: "JS", percentage: 89},
              { skill: "React", percentage: 85 },
              { skill: "Tailwind", percentage: 75 },
              { skill: "Bootstrap", percentage: 90 },
            ].map(({ skill, percentage }) => (
              <div className="flex flex-row space-x-3 mt-6" key={skill}>
                <h1 className="font-roboto font-semibold text-lg sm:text-xl w-20 sm:w-24">
                  {skill}
                </h1>
                <div className="w-full">
                  <ProgressBar
                    initialPercentage={5}
                    targetPercentage={percentage}
                    duration={6000}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-roboto font-bold">
            Back-End
          </h1>
          <div className="flex flex-col mt-10">
            {[
              { skill: "Node.Js", percentage: 85 },
              { skill: "Laravel", percentage: 88 },
              { skill: "MySQL", percentage: 88 },
              { skill: "MongoDB", percentage: 88 },
              { skill: "Firebase", percentage: 75 },
              { skill: "Golang", percentage: 70 },
            ].map(({ skill, percentage }) => (
              <div className="flex flex-row space-x-3 mt-6" key={skill}>
                <h1 className="font-roboto font-semibold text-lg sm:text-xl w-20 sm:w-24">
                  {skill}
                </h1>
                <div className="w-full">
                  <ProgressBar
                    initialPercentage={5}
                    targetPercentage={percentage}
                    duration={6000}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
