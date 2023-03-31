import Header from "@/components/header";
import Image from "next/image";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("https://bukumu-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-row w-full h-full max-w-screen-xl px-6 mx-auto align-center mt-10">
          <form className="w-1/2" onSubmit={handleSubmit}>
            <div className="mb-4">
              <c5>Register</c5>
              <h4>Join our community</h4>
            </div>
            <div className="mb-5 space-y-3">
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="string"
                name="username"
                placeholder="Username"
              />
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
            <div className="mb-6">
              <div className="space-x-2 flex items-center ">
                <input type="checkbox" className="bg-teal-500" />
                <c5 className="text-gray-900">
                  I agree to the Terms of Service and Privacy Policy.
                </c5>
              </div>
            </div>
            <div className="mb-5 w-full flex ">
              <button
                type="submit"
                className="block w-full text-center py-4 px-6 text-lg text-white font-semibold leading-none bg-teal-500 hover:bg-teal-700 rounded"
              >
                Register
              </button>
            </div>
            <div className="flex justify-center">
              <c4 className="text-gray-600 text-center ">
                Already have an account?{" "}
                <a className="text-teal-500" href="#">
                  Login
                </a>
              </c4>
            </div>
          </form>
          <div className="w-1/2 justify-center flex">
            <Image
              src="/images/book-community.png"
              alt="Picture of the book community"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
