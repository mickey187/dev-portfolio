const Project = () => {
  return (
    <>
      {/* <!-- Grid container --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-10 mt-10">
        {/* <!-- Grid item 1 --> */}
        <div className="flex flex-row space-x-2 bg-white rounded-lg shadow">
          <div className="w-1/4">
            <img
              className="w-full h-full"
              src="https://media.licdn.com/dms/image/v2/D4E35AQH-5Ag_8khacw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1689180323945?e=1725022800&v=beta&t=a7tOkOQQSf27oV8dCNZddGqorVXwXqiKJxxACUMz_Wg"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <h3 className="font-roboto font-semibold mt-2 ml-3">E-Commerce</h3>
            <p className="font-roboto p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              magni sed aliquam sunt harum rerum aperiam hic neque, quae
              assumenda officia tenetur impedit, itaque sapiente ullam
              consequatur fugiat, possimus consectetur?
            </p>
            <div className="flex flex-row space-x-1 mb-2">
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                React
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Tailwind
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Node.Js
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Express.Js
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                MongoDB
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Grid item 2 --> */}
        <div className="flex flex-row space-x-2 bg-white rounded-lg shadow">
          <div className="w-1/4">
            <img
              className="w-full h-full"
              src="https://media.licdn.com/dms/image/v2/D4E35AQH-5Ag_8khacw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1689180323945?e=1725022800&v=beta&t=a7tOkOQQSf27oV8dCNZddGqorVXwXqiKJxxACUMz_Wg"
              alt=""
            />
          </div>
          <div className="w-3/4">
            <h3 className="font-roboto font-semibold mt-2 ml-3">URL Shortener</h3>
            <p className="font-roboto p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              magni sed aliquam sunt harum rerum aperiam hic neque, quae
              assumenda officia tenetur impedit, itaque sapiente ullam
              consequatur fugiat, possimus consectetur?
            </p>
            <div className="flex flex-row space-x-1 mb-2">
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                React
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Tailwind
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Node.Js
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                Express.Js
              </label>
              <label
                htmlFor=""
                className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-500 "
              >
                MongoDB
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Grid item 3 --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Item 3</h2>
          <p>This is the content of the third grid item.</p>
        </div>

        {/* <!-- Grid item 4 --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Item 4</h2>
          <p>This is the content of the fourth grid item.</p>
        </div>

        {/* <!-- Grid item 5 --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Item 5</h2>
          <p>This is the content of the fifth grid item.</p>
        </div>

        {/* <!-- Grid item 6 --> */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Item 6</h2>
          <p>This is the content of the sixth grid item.</p>
        </div>
      </div>
      <div className="mx-10 mt-10 p-3">
        <h1 className="my-5">Projects</h1>
      </div>
    </>
  );
};

export default Project;
