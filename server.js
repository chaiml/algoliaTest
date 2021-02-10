const express = require("express");
const algoliasearch = require("algoliasearch");

const app = express();

const APPLICATIONID = "NGTNBA9J44";
const ADMINID = "50f2665452a5c29c054e6b2fa3e01a34";

const client = algoliasearch(APPLICATIONID, ADMINID);
const index = client.initIndex("prod_FIRST_NAME_LAST_NAME_STREET");

// Example:
// http://localhost:5000/users/?q=Gill
app.get("/users", (req, res) => {
  if (req.query.q) {
    index
      .search(req.query.q)
      .then(({ hits }) => {
        const response = hits.map(curr => {
          return {
            id: curr.id,
            firstName: curr.firstName,
            lastName: curr.lastName,
            street: curr.street,
            city: curr.city,
            state: curr.state,
            zip: curr.zip,
          };
        })
            
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
