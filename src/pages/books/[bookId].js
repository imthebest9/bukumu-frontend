import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Books from "@/components/books";

export default function BookDetail() {
  const router = useRouter();
  const query = router.query;
  const bookId = query.bookId;
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [recommendations, setRecommendations] = useState(null);
  const [booksRatedAbove4, setBooksRatedAbove4] = useState(null); // books with rating of 4 and above

  async function getBook() {
    const res = await fetch(`${process.env.API_BASE_URL}books/${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setBook(data);
  }

  async function addToReadingList() {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${process.env.API_BASE_URL}ReadingList/add/${book._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    alert(data.message);
  }

  const submitRating = async (num) => {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${process.env.API_BASE_URL}userrating/books/${book._id}/ratings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating: num,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    alert("Rating submitted!");
  };

  // get book recommendations
  async function getRecommendations() {
    const res = await fetch(
      `${process.env.API_BASE_URL}books/recommendations/${bookId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    const dataArr = await JSON.parse(data.recommended_books);
    console.log(dataArr);
    setRecommendations(dataArr);
  }

  useEffect(() => {
    if (!bookId) return;
    getBook();
    getRecommendations();

    const handleRouteChange = () => {
      setRecommendations(null);
    };

    if (localStorage) {
      const booksRatedAbove4JSON = JSON.parse(
        localStorage.getItem("booksRatedAbove4")
      );
      setBooksRatedAbove4(booksRatedAbove4JSON);
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [bookId, router.events]);
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="flex flex-col sm:flex-row bg-white mb-6 lg:mx-16 rounded-3xl drop-shadow-2xl">
            <div className="sm:w-1/2 flex justify-center mt-3 sm:mt-0">
              <img
                src={book?.image ? book?.image : "/images/loading.jpg"}
                alt="teluk intan"
                fill="true"
                className="object-contain h-full rounded-3xl"
              />
            </div>
            <div className="flex flex-col sm:w-1/2 p-8 sm:mt-8  overflow-x-hidden">
              <div className="mb-4 flex items-center p-4 bg-blue-100 rounded-lg">
                <div className="mr-4">
                  <p className="text-2xl font-iconsolid"></p>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    This book is recommended because you liked{" "}
                    <span className="font-bold">{booksRatedAbove4?.title}</span>
                  </p>
                  <a
                    href="/recommendation-details"
                    className="text-blue-500 underline"
                  >
                    See how it is being recommended
                  </a>
                </div>
              </div>
              <div className="grow">
                <div className="flex flex-row justify-between mb-3">
                  <div className="flex flex-row space-x-5">
                    <p className="text-2xl font-iconsolid">ban</p>
                    <p className="text-2xl font-iconsolid">share</p>
                  </div>
                  <div className="flex flex-row space-x-5">
                    <a onClick={addToReadingList} className="cursor-pointer">
                      <p className="text-2xl font-iconsolid">bookmark</p>
                    </a>
                  </div>
                </div>
                <div className="mb-4">
                  <a
                    href={book?.URL}
                    className="underline line-clamp-2"
                    target="_blank"
                  >
                    {book?.URL}
                  </a>
                </div>
                <div className="flex flex-col mb-4 space-y-3">
                  <sh1>{book?.title.replace("?Â?", "'")}</sh1>
                  <div>
                    <c4>Genre: {book?.genre}</c4>
                  </div>
                  <div className="h-36">
                    <p className="line-clamp-4">{book?.synopsis}</p>
                    <a className="underline cursor-pointer">See more...</a>
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <div className="items-center justify-center w-10 p-1 text-center bg-black rounded-full h-9">
                      <c3 className="text-white">
                        {book?.author?.charAt(0).toUpperCase()}
                      </c3>
                    </div>
                    <c3>{book?.author}</c3>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3 mb-4">
                  <c1 className="text-lg font-medium">Rate this book:</c1>
                  <div className="flex flex-row space-x-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        className="text-yellow-400 focus:outline-none"
                        onMouseEnter={() => setRating(num)}
                        onMouseLeave={() => setRating(0)}
                        onClick={() => submitRating(num)}
                      >
                        {num <= rating ? (
                          <c1 className="text-yellow-400 font-solid">
                            &#9733;
                          </c1>
                        ) : (
                          <c1 className="text-gray-400 font-solid">&#9733;</c1>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row mb-4 space-x-3">
                  <c2 className="truncate">3 Comments</c2>
                  <a>
                    <c2 className="font-iconsolid"></c2>
                  </a>
                  {/* comment */}
                </div>
              </div>
              <div className="flex flex-row h-12 space-x-2">
                <div className="items-center justify-center w-12 h-12 p-2.5 text-center bg-black rounded-full">
                  <c3 className="text-white">IN</c3>
                </div>
                <input
                  className="w-full px-4 py-2 bg-gray-200 border-none hover:bg-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a comment"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <sh1>More Like This</sh1>
          </div>
          <div>
            {bookId && recommendations && recommendations.length > 0 && (
              <Books column={3} specificBooks={recommendations} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
