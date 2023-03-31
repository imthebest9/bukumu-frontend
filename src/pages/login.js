import Header from "@/components/header";
import Books from "@/components/books";

export default function Login() {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center justify-center">
          <div className="w-96 flex justify-center flex-col bg-white p-5 shadow-lg mx-auto my-12">
            <div className="flex justify-center my-4">
              <h4>Login</h4>
            </div>
            <div className="space-y-3 mb-3">
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="email"
                placeholder="example@gmail.com"
              />
              <input
                className="w-full border bg-gray-100 rounded-lg p-3 py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                type="password"
                placeholder="Enter your password"
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
            <div className="mb-5">
              <a
                className="block w-full text-center py-4 px-6 lg:w-auto text-lg text-white font-semibold leading-none bg-teal-500 hover:bg-teal-700 rounded"
                href="#"
              >
                Login
              </a>
            </div>
            <div className="flex justify-center">
              <c4 className="text-gray-600 text-center">
                Don't have an account?{" "}
                <a className="text-teal-500" href="#">
                  Register
                </a>
              </c4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
