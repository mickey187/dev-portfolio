import arrowOutWardIcon from "../assets/svg/arrow_outward.svg";
import kuushIcon from "../assets/img/kuush.png";
import hrsIcon from "../assets/img/hrs.png";
import shortlyIcon from "../assets/img/shortly.png";
import schoolIcon from "../assets/img/school.png";
import shoopingIcon from "../assets/img/online-shopping.jpg";

const projectData = [
  {
    id: 1,
    title: "Kuush Music Streaming",
    description:
      "As a backend engineer at Kush, I developed RESTful APIs using Node.js/Express.js and MongoDB, managed audio file uploads, and integrated AWS S3 for scalable storage, ensuring seamless music streaming.",
    image: kuushIcon,
    link: "https://play.google.com/store/apps/details?id=com.kushrecord&pcampaignid=web_share",
    technologies: ["Node.Js", "Express.Js", "MongoDB"],
  },
  {
    id: 2,
    title: "School SaaS App",
    description:
      "Developed a school SaaS application using the Laravel/Livewire stack, focusing on features like student management, attendance tracking, and real-time reporting to streamline school operations and enhance administrative efficiency.",
    image: schoolIcon,
    link: "https://dev.harambeeuniversity.edu.et/",
    technologies: ["Laravel", "Livewire","Tailwind", "MySQL"],
  },
  {
    id: 3,
    title: "College Insight Dashboard",
    description:
      "Designed and built a college insight dashboard using Laravel/Livewire, providing data analytics and visualizations to help administrators make informed decisions based on applicant data.",
    image: hrsIcon,
    link: "http://197.156.112.157:8000/login",
    technologies: ["Laravel", "Livewire","Tailwind", "MySQL"],
  },
  {
    id: 4,
    title: "URL Shortener",
    description:
      "I developed a URL shortening service using Node.js, Express.js, and MySQL, featuring custom short URLs, analytics tracking, and a simple user interface.",
    image: shortlyIcon,
    link: "https://url.bunaweb.com",
    technologies: ["React", "Tailwind", "Node.Js", "Express.Js", "MongoDB"],
  },

  {
    id: 5,
    title: "E-Shop",
    description:
      "I built a full-stack e-commerce platform with the MERN stack, featuring product management, Stripe payment integration, and a responsive UI for a seamless shopping experience.",
    image:
    shoopingIcon,
    link: "https://url.bunaweb.com",
    technologies: ["React", "Tailwind", "Node.Js", "Express.Js", "MongoDB"],
  },
];

const Project = () => {
  return (
    <>
      {/* <!-- Grid container --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-4 md:mx-10 mt-10">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row space-x-0 md:space-x-2 bg-white rounded-lg shadow"
          >
            <div className="w-full md:w-1/3">
              <img
                className="w-full h-44 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="w-full md:w-7/12 p-4">
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="blank"
                className="flex flex-row"
              >
                <h3 className="font-roboto font-semibold mt-2 underline text-[#000aff]">
                  {project.title}
                </h3>
                <img src={arrowOutWardIcon} alt="" className="ml-1" />
              </a>

              <p className="font-roboto mt-3 text-justify text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap space-x-1 mt-4">
                {project.technologies.map((tech, index) => (
                  <label
                    key={index}
                    className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-[#000aff] my-1"
                  >
                    {tech}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 md:mx-10 mt-10 p-3">
        <h1 className="my-5 text-lg md:text-xl">Projects</h1>
      </div>
    </>
  );
};

export default Project;
