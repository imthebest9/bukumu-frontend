import Header from "@/components/header";
import Books from "@/components/books";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("wantToRead");
  const [wantToRead, setWantToRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);
  const [ratedBooks, setRatedBooks] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // current user

  async function fetchWantToRead() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_BASE_URL}ReadingList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.message) console.log(data.message);
    else {
      setWantToRead(data);
    }
  }

  async function fetchAlreadyRead() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_BASE_URL}userrating`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data[0].book);
    if (data.message) console.log(data.message);
    else {
      let books = [];
      let ratings = [];
      // get every book and rating from the data
      for (let i = 0; i < data.length; i++) {
        books.push(data[i].book);
        ratings.push(data[i].rating);
      }
      console.log(alreadyRead);
      setAlreadyRead(books);
    }
  }

  async function fetchRatedBooks() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_BASE_URL}userrating`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.message) console.log(data.message);
    else {
      let books = [];
      let ratings = [];
      // get every book and rating from the data
      for (let i = 0; i < data.length; i++) {
        books.push(data[i].book);
        ratings.push(data[i].rating);
      }
      console.log(alreadyRead);
      setRatedBooks(books);
      setRatings(ratings);
    }
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getUser = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${process.env.API_BASE_URL}users/me/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setCurrentUser(data);
  };

  useEffect(() => {
    fetchWantToRead();
    fetchAlreadyRead();
    fetchRatedBooks();
    getUser();
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="flex flex-col justify-center mx-auto text-center mb-6">
            <div className="flex justify-center flex-col mx-auto px-auto">
              <Image
                src="/images/user.png"
                alt="User"
                width={150}
                height={150}
                className="mx-auto"
              />
              <sh1 className="mb-2">{currentUser?.email.split("@")[0]}</sh1>
              <p className="mb-2 text-sm">@{currentUser?._id}</p>
            </div>
            {/* <div>
              <button className="px-4 py-2  text-sm font-semibold bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-75">
                Edit Profile
              </button>
            </div> */}
          </div>
          <div className="flex w-full flex-col mx-auto">
            <div className="flex w-full mx-auto flex-row space-x-4 mb-4 justify-center">
              <div
                className={`cursor-pointer ${
                  activeTab === "wantToRead" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("wantToRead")}
              >
                <h5>Want to read</h5>
              </div>
              {/* <div
                className={`cursor-pointer ${
                  activeTab === "alreadyRead"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleTabClick("alreadyRead")}
              >
                <h5>Already read</h5>
              </div> */}
              <div
                className={`cursor-pointer ${
                  activeTab === "rated" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("rated")}
              >
                <h5>Rated</h5>
              </div>
            </div>
            {activeTab === "wantToRead" && (
              <div className="flex justify-center">
                {wantToRead.books && (
                  <Books specificBooks={wantToRead.books} column={3} />
                )}
              </div>
            )}
            {activeTab === "alreadyRead" && (
              <div>
                <p>List of books already read</p>
                {alreadyRead.books && (
                  <Books specificBooks={alreadyRead} column={3} />
                )}
              </div>
            )}
            {activeTab === "rated" && (
              <div className="flex justify-center">
                {ratedBooks && (
                  <Books
                    specificBooks={ratedBooks}
                    column={3}
                    ratings={ratings}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
