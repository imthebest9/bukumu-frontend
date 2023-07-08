import Header from "@/components/header";
import Books from "@/components/books";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-full bg-white justify-center">
        <Header />
        <div className="flex flex-col w-full h-[550px] px-6 mx-auto align-center bg-background mb-[50px] rounded-b-[55%]">
          <div className="flex flex-row w-full">
            <div className="flex  w-1/4">
              <Image
                src="/images/lie-reading.png"
                alt="Reading3"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-center justify-center mt-10 w-1/2">
              <div className="mb-4">
                <div className="flex flex-row text-center justify-center">
                  <h2>One&nbsp; </h2>
                  <h2 className="text-teal-500">Stop&nbsp;</h2>
                  <h2>for</h2>
                </div>
                <h2>Malaysian books.</h2>
              </div>
              <div className="mb-6">
                <c4 className="text-teal-600">Bukumu&nbsp;</c4>
                <c4 className="text-gray-600">
                  is a Local Book Recommendation Website for you.
                </c4>
              </div>
              <div className="flex flex-row space-x-4 mb-8">
                {/* <div className="flex flex-row lg:w-full">
                  <div className="bg-white flex items-center py-2 px-4">
                    <c4 className="font-iconsolid">envelope</c4>
                  </div>
                  <input
                    className="w-full py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    placeholder="Type your e-mail"
                  />
                </div>
                <div className="flex flex-row lg:w-full">
                  <div className="bg-white flex items-center py-2 px-4">
                    <c4 className="font-iconsolid">lock</c4>
                  </div>
                  <input
                    className="w-full py-4 text-sm placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    placeholder="Type your password"
                  />
                </div> */}
                <div className="w-full mx-6">
                  <Link href="/register">
                    <p className="block w-full py-4 px-6 lg:w-auto text-lg text-white font-semibold leading-none bg-teal-500 hover:bg-teal-700 rounded">
                      Get Started
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row justify-center h-36 space-x-10">
                <Image
                  src="/images/areca-books.png"
                  alt="Books"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <Image
                  src="/images/gerak-budaya.png"
                  alt="Books"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <Image
                  src="/images/silverfish.png"
                  alt="Books"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex w-1/4">
              <Image
                src="/images/read-book-2.png"
                alt="Reading"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-[550px] max-w-screen-xl mx-auto w-full justify-center px-12 lg:px-0 align-center">
          <div className="space-y-4 w-1/3">
            <div className="mb-4">
              <h4>What we aim to achieve</h4>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="bg-teal-500 p-2.5 w-8 rounded-lg">
                <p className="text-white">1</p>
              </div>
              <c4>Get Good Book Recommendations For You</c4>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="bg-teal-500 p-2.5 w-8 rounded-lg">
                <p className="text-white">2</p>
              </div>
              <c4>Promote Malaysian Books and Magazines</c4>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="bg-teal-500 p-2.5 w-8 rounded-lg">
                <p className="text-white">3</p>
              </div>
              <c4>Make process of finding a book's details easier</c4>
            </div>
          </div>
          <div className="w-2/3 -mt-[330px] flex justify-center">
            <Image
              src="/images/bookstore.jpg"
              alt="bookstore"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-row h-[550px] -mt-36 max-w-screen-xl mx-auto w-full justify-center px-12 lg:px-0 align-center">
          <div className="benefits-section">
            <h3 className="text-2xl font-bold mb-4">
              Benefits of Using BukuMu
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="benefit bg-white p-4 rounded-lg shadow-md flex flex-col">
                <div className="benefit-icon bg-teal-500 text-white rounded-full p-3 mx-auto">
                  <Image
                    src="/images/personalised.png"
                    alt="Personalization"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefit-description mt-3">
                  <h4 className="text-lg font-semibold">
                    Personalized Recommendations
                  </h4>
                  <p>
                    Discover books tailored to your preferences and reading
                    habits. BukuMu recommends books based on your interests,
                    making it easier to find your next great read.
                  </p>
                </div>
              </div>
              <div className="benefit bg-white p-4 rounded-lg shadow-md flex flex-col">
                <div className="benefit-icon bg-teal-500 text-white rounded-full p-3 mx-auto">
                  <Image
                    src="/images/malaysia2-rm.png"
                    alt="Local Books"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="benefit-description mt-3">
                  <h4 className="text-lg font-semibold">
                    Promote Malaysian Books and Magazines
                  </h4>
                  <p>
                    Explore the rich collection of Malaysian books and
                    magazines. BukuMu supports local authors and publishers,
                    promoting homegrown talent and showcasing the diverse
                    literary landscape.
                  </p>
                </div>
              </div>
              <div className="benefit bg-white p-4 rounded-lg shadow-md flex flex-col">
                <div className="benefit-icon bg-teal-500 text-white rounded-full p-4 mx-auto">
                  <Image
                    src="/images/search.png"
                    alt="Easy Search"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="benefit-description mt-3">
                  <h4 className="text-lg font-semibold">
                    Effortless Book Details Search
                  </h4>
                  <p>
                    Find detailed information about books in a hassle-free way.
                    BukuMu simplifies the process of discovering book details,
                    saving you time and ensuring you have all the necessary
                    information at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-[550px] -mt-36 max-w-screen-xl mx-auto w-full justify-center px-12 lg:px-0 align-center">
          <div className="featured-books-section">
            <h3 className="text-2xl font-bold mb-4">Featured Books</h3>
            <Books column={3} count={3} />
          </div>
        </div>
      </div>
    </>
  );
}
