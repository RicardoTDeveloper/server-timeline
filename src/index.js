const express = require("express");
const cors = require("cors");
// const delay = require("express-delay");
const { mockData, mockData2, mockData3, mockData4 } = require("./mocks");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// app.use(delay(2500));

app.get("/timeline", (req, res) => {
   const page = req?.query?.page;
   const filter = req?.query?.filter;

   if (filter === "fatura") {
      return res.status(200).json(mockData);
   }

   if (filter === "confirmados") {
      return res.status(200).json(mockData2);
   }

   if (page === "0") {
      return res.status(200).json(mockData2);
   }

   if (page === "1") {
      return res.status(200).json(mockData);
   }
});

app.get("/timeline/criticalTransactions", (req, res) => {
   return res.status(200).json(mockData3);
});

app.get("/timeline/detailsTransactions/:eventId", (req, res) => {
   const random = Math.floor(Math.random() * 10);

   if (random === 1) {
      return res.status(200).json(mockData4);
   }

   if (random === 2) {
      return res.status(200).json(mockData4);
   }

   if (random === 3) {
      return res.status(200).json(mockData4);
   }

   if (random === 4) {
      return res.status(200).json(mockData4);
   }

   if (random === 5) {
      return res.status(200).json(mockData4);
   }

   return res.status(200).json(mockData4);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
