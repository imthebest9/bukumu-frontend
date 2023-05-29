import Header from "@/components/header";
import Books from "@/components/books";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [books, setBooks] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  async function getAllBooks() {
    const res = await fetch(`${process.env.API_BASE_URL}books/random/50`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setBooks(data);
  }
  useEffect(() => {
    getAllBooks();
    console.log(selectedBooks);
  }, []);

  const handleSelect = (bookid) => {
    if (selectedBooks.includes(bookid)) {
      setSelectedBooks(selectedBooks.filter((b) => b !== bookid));
    } else {
      setSelectedBooks([...selectedBooks, bookid]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedBooks);
    const token = localStorage.getItem("token");
    // const res = await fetch(
    //   `${process.env.API_BASE_URL}onboarding`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //       books: selectedBooks,
    //     }),
    //   }
    // );
    // const data = await res.json();
    // console.log(data);
    // alert(data.message);
    for (let i in selectedBooks) {
      const res = await fetch(
        `${process.env.API_BASE_URL}userrating/books/${selectedBooks[i]}/ratings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: 4.5,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    }
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center"
        >
          <div className="flex mb-6 justify-center flex-col w-1/2 lg:w-1/3 mx-auto text-center">
            <div className="mb-2">
              <h4>Pick at least 3 you like.</h4>
            </div>
            <div className="mb-4">
              <p>It will help to us to recommend books you like.</p>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full text-center py-4 px-6 text-lg text-white font-semibold leading-none bg-teal-500 hover:bg-teal-700 rounded"
              >
                Continue
              </button>
            </div>
          </div>
          <div className="mx-10">
            <div className="gap-6 space-y-8 columns-3">
              {books?.map((book) => (
                <div
                  className={`mb-6 cursor-pointer break-inside-avoid relative`}
                  onClick={() => handleSelect(book._id)}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={book.image ? book.image : "/images/loading.jpg"}
                      alt="teluk intan"
                      fill="true"
                      className={`object-contain h-full rounded-3xl hover:drop-shadow-2xl ${
                        selectedBooks.includes(book._id)
                          ? "filter brightness-50"
                          : ""
                      }`}
                    />
                  </div>
                  {selectedBooks.includes(book._id) && (
                    <div className="absolute inset-0 flex justify-center items-center text-3xl text-white">
                      <p className="font-iconsolid">thumbs-up</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
