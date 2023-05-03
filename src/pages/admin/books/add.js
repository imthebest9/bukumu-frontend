import Header from "@/components/header";
import { useRouter } from "next/router";
import { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.API_BASE_URL}books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          author: author,
          genre: genre,
          synopsis: description,
          yearPublished: yearPublished,
          URL: image,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add book");
      }
      // Assuming the book was successfully added, redirect to the admin books page
      router.push("/admin/books");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-background p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Add a Book</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre"
            className="block text-gray-700 font-bold mb-2"
          >
            Genre
          </label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="yearPublished"
            className="block text-gray-700 font-bold mb-2"
          >
            Year Published
          </label>
          <input
            type="text"
            id="yearPublished"
            value={yearPublished}
            onChange={(e) => setYearPublished(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full h-32"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
