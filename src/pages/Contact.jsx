import upworkIcon from "../assets/svg/upwork.svg";

const Contact = () => {
  return (
    <>
      <div className="mx-5 sm:mx-10 mt-5 sm:mt-10 py-3">
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10">
          {/* Left Column */}
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-roboto font-bold">Contact Me</h1>
            <p className="text-lg sm:text-2xl font-roboto font-normal mt-4 text-justify leading-loose">
              Got a project in mind, a question to ask, or just want to say hi?
              I'm all ears! Whether you’re looking to build something new,
              improve an existing project, or brainstorm ideas, I’d love to hear
              from you.
            </p>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mt-5">
              <img src={upworkIcon} alt="Upwork Icon" />
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="mb-2">
                <span>
                  Email:{" "}
                  <a
                    href="mailto:michiashailu@gmail.com"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    michiashailu@gmail.com
                  </a>
                </span>
              </div>
              <div>
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/michias-hailu-859135213/"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Michias Hailu Alemu
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col mx-0 sm:mx-10">
                <label htmlFor="name" className="my-1 font-roboto">Name</label>
                <input
                  type="text"
                  id="name"
                  className="h-10 border border-slate-400 rounded-lg px-2"
                />
              </div>
              <div className="flex flex-col mx-0 sm:mx-10">
                <label htmlFor="email" className="my-1 font-roboto">Email</label>
                <input
                  type="email"
                  id="email"
                  className="h-10 border border-slate-400 rounded-lg px-2"
                />
              </div>
              <div className="flex flex-col mx-0 sm:mx-10">
                <label htmlFor="message" className="my-1 font-roboto">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="rounded-lg border border-slate-400 px-2"
                ></textarea>
              </div>
              <div className="mx-0 sm:mx-10">
                <button className="w-full h-10 bg-blue-700 text-white rounded-lg font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
