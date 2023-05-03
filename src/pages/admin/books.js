import Header from "@/components/header";
import Books from "@/components/books";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Mainpage() {
  const [books, setBooks] = useState(null);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;
  const router = useRouter();

  const displayedBooks = books
    ?.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(page * pageSize, (page + 1) * pageSize);

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if ((page + 1) * pageSize < books.length) {
      setPage(page + 1);
    }
  }

  function handleEdit(bookId) {
    // Implement edit functionality here
  }

  const handleDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const response = await fetch(`${process.env.API_BASE_URL}books/${bookId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete book");
        }
        // Assuming the book was successfully deleted, refresh the page to reflect the changes
        router.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setPage(0);
  }

  const Tab = ({ label, href }) => {
    const router = useRouter();

    const handleClick = (e) => {
      e.preventDefault();
      router.push(href);
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${
          router.asPath === href
            ? "border-b-2 border-blue-500"
            : "border-b-2 border-transparent"
        } hover:border-blue-500 mx-4 pb-1 font-medium text-gray-700`}
      >
        {label}
      </a>
    );
  };

  async function getBooks() {
    const res = await fetch(`${process.env.API_BASE_URL}books`, {
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
    getBooks();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="w-full mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center justify-center w-full">
              <div className="flex ml-8 justify-center">
                <Tab label="Book Admin Panel" href="/admin/books" />
                <Tab label="User Admin Panel" href="/admin/users" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Link href="/admin/books/add">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add a New Book
              </button>
            </Link>
          </div>
          <div className="mb-4 flex flex-row justify-between">
            <div className="w-3/4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="search"
              >
                Search a book
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search"
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded my-6">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Author</th>
                  <th className="py-3 px-4 text-left">Genre</th>
                  <th className="py-3 px-4 text-left"></th>
                  <th className="py-3 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {displayedBooks?.map((book) => (
                  <tr
                    key={book._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4 text-left">{book.title}</td>
                    <td className="py-3 px-4 text-left">{book.author}</td>
                    <td className="py-3 px-4 text-left">{book.genre}</td>
                    <td>
                      <Link href={`/admin/book/edit?id=${book._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(book._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {page * pageSize + 1} to{" "}
                {Math.min((page + 1) * pageSize, books?.length)} of{" "}
                {books?.length} Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0 space-x-2">
                <button
                  className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l 
        ${page === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={handlePreviousPage}
                  disabled={page === 0}
                >
                  Previous
                </button>
                <button
                  className={`text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r 
        ${
          (page + 1) * pageSize >= books?.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
                  onClick={handleNextPage}
                  disabled={(page + 1) * pageSize >= books?.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
