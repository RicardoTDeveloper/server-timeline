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
   return res.status(200).json([
      {
         items: [
            {
               date: "2024-02-29",
               events: [
                  {
                     eventId: 38370974,
                     eventType: "STATEMENT",
                     eventCategory: "CLOSE",
                     eventDate: "2024-02-29T03:00:00Z",
                     dueDate: "2024-03-10",
                     amountDetails: {
                        localAmount: null,
                        currentBalance: 167.1,
                        previousBalance: 132.92,
                        credits: 0,
                        debits: 34.18,
                     },
                     cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
                  },
               ],
            },
            {
               date: "2023-12-21",
               events: [
                  {
                     eventId: 0,
                     eventType: "STATEMENT",
                     eventCategory: "OVERDUE",
                     eventDate: "2023-12-21T06:00:44.014Z",
                     dueDate: "2023-12-10",
                     amountDetails: {
                        localAmount: 0,
                        currentBalance: 0,
                        previousBalance: 0,
                        credits: 0,
                        debits: 0,
                     },
                     cid: "5ca53449-6958-4a30-b32d-a11119eba8e4",
                  },
               ],
            },
         ],
      },
   ]);
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
