export default async function handler(req, res) {
  // const { bookID } = req.query;
  const response = await fetch("https://bukumu-backend.herokuapp.com/books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  res.status(200).json(data);
}
