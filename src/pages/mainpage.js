import Header from "@/components/header";
import Books from "@/components/books";
import { useEffect, useState } from "react";
import React from "react";

export default function Mainpage() {
  const [book, setBook] = useState(null);
  async function getABook() {
    const res = await fetch(
      `https://bukumu-backend.herokuapp.com/books/random/1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setBook(data);
  }
  useEffect(() => {
    getABook();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="flex flex-col bg-white lg:mx-16 rounded-3xl drop-shadow-2xl mb-4">
            <div className="flex justify-center mt-4">
              <h3>Featured</h3>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/3 p-8 mt-1">
                <div className="grow">
                  <div className="flex flex-col mb-4 space-y-3">
                    <sh1>{book && book[0]?.title}</sh1>
                    <div className="h-36">
                      <p className="line-clamp-4">
                        {book && book[0]?.synopsis}
                      </p>
                      <a className="underline cursor-pointer">See more...</a>
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
          <div className="flex flex-row divide-x-4 mb-6">
            <div className="w-1/2 pr-6">
              <div className="mb-4">
                <h5>Based on Your Interests</h5>
              </div>
              <div>
                <Books count={6} column={2} />
              </div>
            </div>
            <div className="w-1/2 pl-6">
              <div className="mb-4">
                <h5>Based on What Others Like You Enjoyed</h5>
              </div>
              <div>
                <Books count={6} column={2} />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h5>Popular Books</h5>
            <Books count={6} column={3} />
          </div>
          <div>
            <h5>By Category</h5>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-1/3 border">
                <sh1>Fiction</sh1>
              </div>
              <div className="flex flex-col w-1/3 border">
                <sh1>Non-Fiction</sh1>
              </div>
              <div className="flex flex-col w-1/3 border">
                <sh1>Biography</sh1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
