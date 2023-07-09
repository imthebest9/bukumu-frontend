import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function BookCarousel({ books }) {
  return (
    <Carousel showThumbs={false}>
      {books.map((book, index) => (
        <Link key={index} href={`/books/${book?._id}`}>
          <div className="flex flex-col bg-white lg:mx-16 rounded-3xl drop-shadow-2xl mb-4">
            <div className="flex justify-center mt-4">
              <h3>Featured</h3>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col w-2/3 p-8 mt-1">
                <div className="grow">
                  <div className="flex flex-col mb-4 space-y-3">
                    <h1>
                      {book?.title.replace(/Â¡Â¯/g, "'").replace(/\?Â\?/g, "'")}
                    </h1>
                    <div className="h-36">
                      <p className="line-clamp-4">{book?.synopsis}</p>
                      <p className="underline cursor-pointer">See more...</p>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                      <div className="items-center justify-center w-10 p-1 text-center bg-black rounded-full h-9">
                        <h3 className="text-white">
                          {book?.author?.charAt(0).toUpperCase()}
                        </h3>
                      </div>
                      <h3>{book?.author}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <img
                  src={book ? book?.image : "/images/loading.jpg"}
                  alt="teluk intan"
                  fill="true"
                  className="object-contain h-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
