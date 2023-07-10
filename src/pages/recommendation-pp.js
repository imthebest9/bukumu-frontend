import React from 'react';

const PopularityBasedRecommendationPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-background">
      <h1 className="text-3xl font-bold mt-8">Popularity-Based Recommendation Algorithm Explanation</h1>
      <div className="container max-w-screen-md mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Algorithm Explanation</h2>
          <p>
            Popularity-based recommendation in the Bukumu project suggests items based on their overall popularity or popularity among the user community. It begins by counting the number of ratings for each book to determine their popularity.
          </p>
          <p>
            The books are sorted in descending order based on the rating count, allowing the system to identify the most popular ones. The final list of popular books is presented to the users, enabling them to explore and discover highly rated books that are likely to be of interest to a wide range of users.
          </p>
        </div>
        {/* Include other sections of the explanation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            Popularity-based recommendation in the Bukumu project leverages the overall popularity and rating counts of books to generate recommendations. By presenting users with a list of highly rated and popular books, the algorithm helps users discover books that have gained traction among the community.
          </p>
          <p>
            Enjoy exploring and diving into the world of popular books with our popularity-based recommendations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularityBasedRecommendationPage;
