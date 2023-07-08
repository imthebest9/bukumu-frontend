import Header from "@/components/header";
import Books from "@/components/books";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Genre() {
  const [books, setBooks] = useState(null);
  const [searched, setSearched] = useState(false);
  const router = useRouter();
  const query = router.query;
  const genre = query.genre;

  // get books from search
  async function getBooks() {
    console.log(genre);
    const res = await fetch(
      `${process.env.API_BASE_URL}books/genre/${genre}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setBooks(data);

    // set timeout to show searching
    setTimeout(() => {
      setSearched(true);
    }, 3000);
  }

  useEffect(() => {
    getBooks();
  }, [searched]);

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          {books?.length > 0 && searched ? (
            <Books specificBooks={books} column={3} />
          ) : (
            <div>
              {books?.length === 0 && searched ? (
                <h3>Not found. </h3>
              ) : (
                <h3>Processing...</h3>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
