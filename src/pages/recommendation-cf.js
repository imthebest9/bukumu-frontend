import React from 'react';

const CollaborativeFilteringExplanationPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-background">
      <h1 className="text-3xl font-bold mt-8">Collaborative Filtering Algorithm Explanation</h1>
      <div className="container max-w-screen-md mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Algorithm Explanation</h2>
          <p>
            Collaborative filtering in the Bukumu project relies on the preferences and behaviors of similar users to generate recommendations. It utilizes Singular Value Decomposition (SVD), a matrix factorization technique, to decompose the user-item ratings matrix into three matrices: U, Sigma, and Vt.
          </p>
          <p>
            The U matrix captures latent factors in user preferences, while the Sigma matrix represents the importance of each latent factor. The Vt matrix captures item characteristics. By applying dimensionality reduction and truncating the matrices, a reconstructed ratings matrix is obtained, approximating the original ratings while preserving important information.
          </p>
          <p>
            This reconstructed matrix, combined with the mean ratings of each user, is used to predict missing ratings for new books. Collaborative filtering identifies similarities between users and items, enabling personalized recommendations based on these similarities.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Matrix Factorization and Latent Factors</h2>
          <p>
            Singular Value Decomposition (SVD) is a technique used to factorize a matrix into its constituent parts. In collaborative filtering, SVD is applied to the user-item ratings matrix to extract latent factors that capture user preferences and item characteristics.
          </p>
          <p>
            The U matrix contains user vectors representing user preferences for different latent factors. The Sigma matrix is a diagonal matrix that represents the importance of each latent factor. The Vt matrix contains item vectors representing item characteristics for different latent factors.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Missing Rating Prediction</h2>
          <p>
            The reconstructed ratings matrix obtained from the truncated U, Sigma, and Vt matrices, along with the mean ratings of each user, is used to predict missing ratings for new books. By estimating the missing ratings, collaborative filtering can provide personalized recommendations to users.
          </p>
        </div>
        {/* Include other sections of the explanation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            Collaborative filtering in the Bukumu project leverages user preferences and behaviors to generate personalized recommendations. By employing Singular Value Decomposition (SVD) and matrix factorization techniques, the algorithm identifies similarities between users and items to provide tailored book recommendations.
          </p>
          <p>
            Enjoy exploring new books with our collaborative filtering-based recommendations!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default CollaborativeFilteringExplanationPage;
