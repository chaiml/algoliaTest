const express = require("express");
const algoliasearch = require("algoliasearch");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const client = algoliasearch(
  process.env.ALOGLIA_APPLICATION_ID,
  process.env.ALOGLIA_ADMIN_ID
);
const index = client.initIndex("prod_FIRST_NAME_LAST_NAME_STREET");

// Example:
// http://localhost:5000/users/?q=Gill
app.get("/users", (req, res) => {
  if (req.query.q) {
    index
      .search(req.query.q)
      .then(({ hits }) => {
        const response = hits.map((curr) => {
          return (({ id, firstName, lastName, street, city, state, zip }) => ({
            id,
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
          }))(curr);
        });
        return res.json(response);
      })
      .catch((err) => {
        console.log(err); // Here for developers
        res.status(500).json({ error: "Server Error" });
      });
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
