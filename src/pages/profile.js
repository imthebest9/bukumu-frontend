import Header from "@/components/header";
import Books from "@/components/books";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="flex flex-col justify-center mx-auto text-center mb-6">
            <Image src="/images/user.png" alt="User" width={150} height={150} />
            <sh1 className="mb-2">User</sh1>
            <p className="mb-2 text-sm">@userid</p>
            <div>
              <button className="px-4 py-2  text-sm font-semibold bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-75">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="flex mx-auto flex-row space-x-4 mb-4">
            <div>
              <sh3>Want to read</sh3>
            </div>
            <div>
              <sh3>Already read</sh3>
            </div>
          </div>
          <Books />
        </div>
      </div>
    </>
  );
}
