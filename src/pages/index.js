import Header from "@/components/header";
import Books from "@/components/books";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

export default function Mainpage() {
  const [book, setBook] = useState(null);
  const [booksRatedAbove4, setBooksRatedAbove4] = useState(null); // books with rating of 4 and above
  const [contentBasedBooks, setContentBasedBooks] = useState(null);
  const [cfBooks, setCfBooks] = useState(null); // collaborative filtering books  (books rated by users with similar taste)
  const [ppBooks, setPpBooks] = useState(null); // popularity based books (books rated by most users)

  async function getABook() {
    const res = await fetch(`${process.env.API_BASE_URL}books/random/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setBook(data);
  }

  async function getHighRatedBooks() {
    const token = localStorage.getItem("token");
    // get books with rating of 4 and above
    const res = await fetch(
      `${process.env.API_BASE_URL}userrating/books?minRating=4`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setBooksRatedAbove4(data);
    localStorage.setItem(
      "booksRatedAbove4",
      JSON.stringify(data[data.length - 1])
    );
  }

  async function getContentBasedBooks() {
    const res2 = await fetch(
      `${process.env.API_BASE_URL}books/recommendations/${
        booksRatedAbove4
          ? booksRatedAbove4[booksRatedAbove4.length - 1]?._id
          : ""
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data2 = await res2.json();
    console.log(data2);
    if (data2.recommended_books) {
      const dataArr = await JSON.parse(data2.recommended_books);
      console.log(dataArr);
      setContentBasedBooks(dataArr);
    }
  }

  async function getCfBooks() {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${process.env.API_BASE_URL}books/recommendationscf/cf`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.recommended_books) {
      const dataArr = await JSON.parse(data.recommended_books);
      console.log(dataArr);
      setCfBooks(dataArr);
    }
  }

  async function getPpBooks() {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${process.env.API_BASE_URL}userrating/books/most-rated`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setPpBooks(data);
  }

  useEffect(() => {
    getABook();
    getHighRatedBooks();
    getCfBooks();
    getPpBooks();
  }, []);

  useEffect(() => {
    if (booksRatedAbove4) {
      getContentBasedBooks();
    }
  }, [booksRatedAbove4]);

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          {book && (
            <Link href={`/books/${book[0]?._id}`}>
              <div className="flex flex-col bg-white lg:mx-16 rounded-3xl drop-shadow-2xl mb-4">
                <div className="flex justify-center mt-4">
                  <h3>Featured</h3>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col w-2/3 p-8 mt-1">
                    <div className="grow">
                      <div className="flex flex-col mb-4 space-y-3">
                        <sh1>
                          {book &&
                            book[0]?.title
                              .replace(/Â¡Â¯/g, "'")
                              .replace(/\?Â\?/g, "'")}
                        </sh1>
                        <div className="h-36">
                          <p className="line-clamp-4">
                            {book && book[0]?.synopsis}
                          </p>
                          <p className="underline cursor-pointer">
                            See more...
                          </p>
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                          <div className="items-center justify-center w-10 p-1 text-center bg-black rounded-full h-9">
                            <c3 className="text-white">
                              {book && book[0]?.author?.charAt(0).toUpperCase()}
                            </c3>
                          </div>
                          <c3>{book && book[0]?.author}</c3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img
                      src={book ? book[0]?.image : "/images/loading.jpg"}
                      alt="teluk intan"
                      fill="true"
                      className="object-contain h-full rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}
          <div className="flex flex-row divide-x-4 mb-6">
            <div className="w-1/2 pr-6">
              <div className="mb-4">
                <h4>Based on Your Interests</h4>
              </div>
              <div>
                {contentBasedBooks ? (
                  <Books
                    count={1}
                    column={3}
                    specificBooks={contentBasedBooks}
                  />
                ) : (
                  <div>Processing...</div>
                )}
              </div>
            </div>
            <div className="w-1/2 pl-6">
              <div className="mb-4">
                <h4>Based on What Others Like You Enjoyed</h4>
              </div>
              <div>
                {cfBooks ? (
                  <Books count={6} column={3} specificBooks={cfBooks} />
                ) : (
                  <div>Processing...</div>
                )}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h5 className="mb-2">Popular Books</h5>
            {ppBooks ? (
              <Books count={6} column={3} specificBooks={ppBooks} />
            ) : (
              <div>Processing...</div>
            )}
          </div>
          <div className="bg-gray-100 p-4">
            <h5 className="mb-2">By Category</h5>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=fiction"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Fiction
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=non-fiction"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Non-Fiction
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=biography"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Biography
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=mystery"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Mystery
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=science"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Science Fiction
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=romance"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Romance
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=thriller"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Thriller
                </a>
              </div>
              <div className="flex flex-col border border-gray-300 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
                <a
                  href="/genre?genre=history"
                  className="text-xl font-medium mb-2 hover:text-teal-600 transition duration-200"
                >
                  Historical
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
