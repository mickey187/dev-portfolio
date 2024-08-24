import coderWorkingIllustration from "../assets/img/coder-working-illustration.jpg";
const About = () => {
  return (
    <>
      <div className="bg-white mx-4 md:mx-10 rounded-xl flex flex-col md:flex-row mt-10 p-3">
        <div className="w-full md:w-1/2 p-2">
          <h1 className="font-gugi text-5xl md:text-7xl">About Me</h1>
          <h1 className="text-xl md:text-2xl font-gugi mt-6 md:mt-10">
            From Curiosity to Code: My Digital Odyssey
          </h1>
          <p className="text-justify mt-3 font-roboto text-base md:text-lg leading-relaxed">
            I’m Michias Hailu Alemu, a full-stack web developer who believes in
            the power of storytelling through code. My journey started in the
            heart of Adama, Ethiopia, where a curious kid once wondered how the
            internet really worked. That curiosity blossomed into a passion, and
            today, I’m weaving stories into websites with the MERN stack and
            Laravel.
          </p>
          <h1 className="text-xl md:text-2xl font-gugi mt-6 md:mt-10">
            What I Do: Turning Ideas into Interactive Experiences
          </h1>
          <p className="text-justify mt-3 font-roboto text-base md:text-lg leading-relaxed">
            I’m not just here to code – I’m here to craft experiences. Whether
            it’s building a music streaming platform’s backend, creating
            data-driven dashboards for colleges, or enhancing school management
            systems, I turn ideas into functional, user-friendly applications.
            Every project is a story waiting to be told, and I make sure the
            narrative is seamless from front to back.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:block">
          <img src={coderWorkingIllustration} alt="" />
        </div>
      </div>
    </>
  );
};
export default About;
