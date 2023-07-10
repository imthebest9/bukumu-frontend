import React from "react";

const RecommendationExplanationPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-background">
      <h1 className="text-3xl font-bold mt-8">
        Book Recommendation Algorithm Explanation
      </h1>
      <div className="container max-w-screen-md mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Algorithm Explanation</h2>
          <p>
            Our recommendation algorithm utilizes a content-based approach to
            suggest books to our users. It analyzes various attributes of books,
            such as genre, author, and synopsis, to determine their similarity
            and relevance to your interests.
          </p>
          <p>To achieve this, the algorithm follows several key steps:</p>
          <ul className="list-disc ml-8">
            <li>
              Data Preprocessing: Cleaning and preparing the book data for
              analysis.
            </li>
            <li>
              Feature Extraction: Extracting relevant features from each book,
              such as genre and author information.
            </li>
            <li>
              Similarity Calculation: Comparing the features of different books
              to calculate their similarity scores.
            </li>
            <li>
              Recommendation Generation: Generating a list of recommended books
              based on their similarity scores and relevance to your
              preferences.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Book Features Considered</h2>
          <p>
            Our algorithm takes into account various book features to determine
            similarity and relevance. Some of the features we consider include:
          </p>
          <ul className="list-disc ml-8">
            <li>
              Genre: Analyzing the genre of a book to identify similar genres
              that might interest you.
            </li>
            <li>
              Author: Considering the author of a book to recommend other books
              by the same author or authors with similar writing styles.
            </li>
            <li>
              Synopsis: Analyzing the synopsis or summary of a book to
              understand its themes and recommend books with similar themes or
              topics.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Similarity Measurement</h2>
          <p>
            In order to measure the similarity between books, our algorithm
            employs the cosine similarity metric. It calculates the cosine of
            the angle between the feature vectors of two books, providing a
            measure of their similarity.
          </p>
          <p>
            The algorithm assigns similarity scores to different books based on
            their cosine similarity values, enabling us to identify the most
            similar books for recommendation.
          </p>
        </div>
        {/* Include other sections of the explanation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            Our content-based recommendation algorithm considers various book
            attributes, calculates their similarity, and generates personalized
            recommendations. We hope this explanation helps you understand how
            our algorithm works to suggest books tailored to your interests.
          </p>
          <p>Happy reading and discovering new books!</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationExplanationPage;
