import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Books({
  count,
  column,
  specificBooks,
  ratings,
  method,
}) {
  const [books, setBooks] = useState(null);
  async function getAllBooks(count) {
    if (!count) count = 100;
    const res = await fetch(
      `${process.env.API_BASE_URL}books/random/${count}`,
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
  }
  useEffect(() => {
    console.log(specificBooks);
    if (specificBooks) {
      setBooks(specificBooks);
    } else getAllBooks(count);
  }, [specificBooks]);
  return (
    <div className={`gap-6 space-y-8 columns-${column}`}>
      {books?.map((book, index) => (
        <div key={index} onClick={() => localStorage.setItem("method", method)}>
          <Link href={`/books/${book?._id}`} shallow={false}>
            <div className="mb-6 cursor-pointer break-inside-avoid">
              <div className="flex justify-center mb-3">
                <img
                  src={book.image ? book.image : "/images/loading.jpg"}
                  alt="img"
                  fill="true"
                  className="object-contain h-full rounded-3xl hover:drop-shadow-2xl"
                />
              </div>
              <h6>
                {book?.title.replace(/Â¡Â¯/g, "'").replace(/\?Â\?/g, "'")}
              </h6>
              <c2>
                {book?.author} <br />
              </c2>
              <c4>{ratings && <c4>Ratings: {ratings[index]}</c4>}</c4>
              <c4>
                {book.ratingCount && <c4>Rated by: {book.ratingCount} people</c4>}{" "}
              </c4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
