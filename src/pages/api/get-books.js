export default async function handler(req, res) {
  // const { bookID } = req.query;
  const response = await fetch(`${process.env.API_BASE_URL}books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  res.status(200).json(data);
}
