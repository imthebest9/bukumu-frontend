import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Books({ count, column }) {
  const [books, setBooks] = useState(null);
  async function getAllBooks(count) {
    if (!count) count = 100;
    const res = await fetch(
      `https://bukumu-backend.herokuapp.com/books/random/${count}`,
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
    getAllBooks(count);
  }, []);
  return (
    <div className={`gap-6 space-y-8 columns-${column}`}>
      {books?.map((book) => (
        <Link href={`/books/${book?._id}`}>
          <div className="mb-6 cursor-pointer break-inside-avoid">
            <div className="flex justify-center mb-3">
              <img
                src={book.image ? book.image : "/images/loading.jpg"}
                alt="teluk intan"
                fill="true"
                className="object-contain h-full rounded-3xl hover:drop-shadow-2xl"
              />
            </div>
            <h6>{book?.title}</h6>
            <c4>{book?.author}</c4>
          </div>
        </Link>
      ))}
    </div>
  );
}
