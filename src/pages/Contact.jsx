import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import upworkIcon from "../assets/svg/upwork.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [alertData, setAlertData] = useState({
    showAlert: false,
    severity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // console.log(formData);

      const response = await axios.post(
        `http://localhost:3001/submit-form`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // const response = await fetch("http://192.168.1.102:3001/submit-form", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      console.log(response);

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setAlertData({
          showAlert: true,
          severity: "success",
          message: "Message sent successfully!",
        });
      } else {
        setStatus("Failed to send message.");
        setAlertData({
          showAlert: true,
          severity: "error",
          message: "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
      setAlertData({
        showAlert: true,
        severity: "error",
        message: "An error occurred.",
      });
    } finally {
      setLoading(false); // Set loading to false after receiving response or error
    }
  };
  return (
    <>
      <div className="mx-5 sm:mx-10 mt-5 sm:mt-10 py-3 bg-white rounded-lg p-3">
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-10">
          {/* Left Column */}
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-roboto font-bold">
              Contact Me
            </h1>
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
                    className="text-[#000aff] underline"
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
                    className="text-[#000aff] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Michias Hailu Alemu
                  </a>
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full sm:w-1/2">
            {/* Right Column */}
            <div className="">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col mx-0 sm:mx-10">
                  <label htmlFor="name" className="my-1 font-roboto">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-10 border border-slate-400 rounded-lg px-2"
                    required
                  />
                </div>
                <div className="flex flex-col mx-0 sm:mx-10">
                  <label htmlFor="email" className="my-1 font-roboto">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-10 border border-slate-400 rounded-lg px-2"
                  />
                </div>
                <div className="flex flex-col mx-0 sm:mx-10">
                  <label htmlFor="message" className="my-1 font-roboto">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="rounded-lg border border-slate-400 px-2"
                    required
                  ></textarea>
                </div>
                <div className="mx-0 sm:mx-10">
                  <button
                    type="submit"
                    className="w-full h-10 bg-[#000aff] text-white rounded-lg font-bold"
                  >
                   {loading ? (
                      <CircularProgress size={24} color="inherit" /> // Show spinner while loading
                    ) : (
                      "Submit"
                    )}
                  </button>
                  <div className="w-full my-3">
                    {alertData.showAlert && (
                      <Alert
                        severity={alertData.severity}
                        onClose={() => {
                          setAlertData({
                            showAlert: false,
                            message: "",
                            severity: "",
                          });
                        }}
                      >
                        {alertData.message}
                      </Alert>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
