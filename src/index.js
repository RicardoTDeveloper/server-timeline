const express = require("express");
const cors = require("cors");
const delay = require("express-delay");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(delay(2500));

function gerarNumeroAleatorio() {
   return Math.floor(100000000 + Math.random() * 900000000);
}

const mockDataDiversified = {
   items: [
      {
         date: "2023-10-11",
         events: [
            {
               eventId: 154064101,
               eventDate: "2023-10-11T17:11:58.037Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "Itaú Shop",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "d3efeab2-0ec3-91c7-97c4-a7c76e5b09a7",
            },
            {
               eventId: 154064100,
               eventDate: "2023-10-11T17:11:50.154Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "Udemy.com",
               establishmentMerchantCategoryGroup: "ACADEMIC",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "55edbc53-d1c5-9ed1-9e63-278841983e3c",
            },
            {
               eventId: 154064098,
               eventDate: "2023-10-11T17:11:40.156Z",
               eventType: "TRANSACTION",
               eventCategory: "DECLINED",
               establishmentName: "Amazon.com",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4779",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.12,
               },
               cid: "b6e01c25-f418-9554-9fbd-2155e36e67a1",
            },
            {
               eventId: 154064097,
               eventDate: "2023-10-11T17:10:41.132Z",
               eventType: "TRANSACTION",
               eventCategory: "DECLINED",
               establishmentName: "Posto Ipiranga",
               establishmentMerchantCategoryGroup: "FUEL",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4779",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.12,
               },
               cid: "11a2f651-e9ac-9221-bd62-51f66980196e",
            },
         ],
      },
      {
         date: "2023-10-08",
         events: [
            {
               eventId: gerarNumeroAleatorio(),
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
            {
               eventId: gerarNumeroAleatorio(),
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
            {
               eventId: 153350719,
               eventDate: "2023-10-08T20:15:14.326Z",
               eventType: "TRANSACTION",
               eventCategory: "CANCELLATION",
               establishmentName: "Shopping Iguatemi",
               establishmentMerchantCategoryGroup: "SHOPPING",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  isOwner: null,
               },
               numberOfInstallments: 5,
               amountDetails: {
                  cardholderBillingAmount: 100,
                  contractAmount: 116.3,
               },
               cid: "04c482aa-568d-9aa2-9dab-4fbb317b4285",
            },
         ],
      },
      {
         date: "2023-10-03",
         events: [
            {
               eventId: 154052760,
               eventDate: "2023-10-03T17:43:14.026Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "Mercado Livre",
               establishmentMerchantCategoryGroup: "SHOPPING",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "10e07eaf-8cf9-936d-892e-b13a6c9025f1",
            },
            {
               eventId: 154052759,
               eventDate: "2023-10-03T17:42:49.853Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "FUEL",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.68,
               },
               cid: "a62761ea-b1db-9bf8-89f2-11c97a82be98",
            },
            {
               eventId: 154052758,
               eventDate: "2023-10-03T17:42:43.609Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.68,
               },
               cid: "0cae12ce-f760-9641-8058-8c0cb99f14f7",
            },
         ],
      },
   ],
   paging: {
      hasNextPage: true,
      previous: "_page=3&_size=10",
      next: "_page=3&_size=10",
      actual: {
         page: 0,
         elements: 10,
      },
      total: {
         pages: 9,
         elements: 82,
      },
   },
};

const mockDataTransactions = {
   items: [
      {
         date: "2023-10-11",
         events: [
            {
               eventId: 154064101,
               eventDate: "2023-10-11T17:11:58.037Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA sem JUROS",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "d3efeab2-0ec3-91c7-97c4-a7c76e5b09a7",
            },
            {
               eventId: 154064100,
               eventDate: "2023-10-11T17:11:50.154Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA sem JUROS",
               establishmentMerchantCategoryGroup: "ACADEMIC",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "55edbc53-d1c5-9ed1-9e63-278841983e3c",
            },
            {
               eventId: 154064098,
               eventDate: "2023-10-11T17:11:40.156Z",
               eventType: "TRANSACTION",
               eventCategory: "DECLINED",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4779",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.12,
               },
               cid: "b6e01c25-f418-9554-9fbd-2155e36e67a1",
            },
            {
               eventId: 154064097,
               eventDate: "2023-10-11T17:10:41.132Z",
               eventType: "TRANSACTION",
               eventCategory: "DECLINED",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "FUEL",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4779",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.12,
               },
               cid: "11a2f651-e9ac-9221-bd62-51f66980196e",
            },
         ],
      },
      {
         date: "2023-10-08",
         events: [
            {
               eventId: 153350815,
               eventDate: "2023-10-08T20:21:49.195Z",
               eventType: "TRANSACTION",
               eventCategory: "CANCELLATION",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  isOwner: null,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 33.84,
               },
               cid: "725161e3-b1ce-99b8-b3e6-1c517eb534ab",
            },
            {
               eventId: 153350817,
               eventDate: "2023-10-08T20:21:44.351Z",
               eventType: "TRANSACTION",
               eventCategory: "CANCELLATION",
               establishmentName: "compra a vista_",
               establishmentMerchantCategoryGroup: "FUEL",
               transactionDetails: {
                  orgOperationType: "NATIONAL_PURCHASE",
                  isOwner: null,
               },
               numberOfInstallments: 1,
               amountDetails: {
                  cardholderBillingAmount: 10,
                  contractAmount: 10,
               },
               cid: "a28c6729-a95c-96f7-ba51-6c86df8dd1dc",
            },
            {
               eventId: 153350719,
               eventDate: "2023-10-08T20:15:14.326Z",
               eventType: "TRANSACTION",
               eventCategory: "CANCELLATION",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "SHOPPING",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  isOwner: null,
               },
               numberOfInstallments: 5,
               amountDetails: {
                  cardholderBillingAmount: 100,
                  contractAmount: 116.3,
               },
               cid: "04c482aa-568d-9aa2-9dab-4fbb317b4285",
            },
         ],
      },
      {
         date: "2023-10-03",
         events: [
            {
               eventId: 154052760,
               eventDate: "2023-10-03T17:43:14.026Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA sem JUROS",
               establishmentMerchantCategoryGroup: "SHOPPING",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 110,
                  contractAmount: 110,
               },
               cid: "10e07eaf-8cf9-936d-892e-b13a6c9025f1",
            },
            {
               eventId: 154052759,
               eventDate: "2023-10-03T17:42:49.853Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "FUEL",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.68,
               },
               cid: "a62761ea-b1db-9bf8-89f2-11c97a82be98",
            },
            {
               eventId: 154052758,
               eventDate: "2023-10-03T17:42:43.609Z",
               eventType: "TRANSACTION",
               eventCategory: "AUTHORIZE",
               establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
               establishmentMerchantCategoryGroup: "MARKETPLACE",
               transactionDetails: {
                  orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
                  last4Digits: "4655",
                  isOwner: true,
               },
               numberOfInstallments: 4,
               amountDetails: {
                  cardholderBillingAmount: 30,
                  contractAmount: 35.68,
               },
               cid: "0cae12ce-f760-9641-8058-8c0cb99f14f7",
            },
         ],
      },
   ],
   paging: {
      hasNextPage: true,
      previous: "_page=3&_size=10",
      next: "_page=3&_size=10",
      actual: {
         page: 0,
         elements: 10,
      },
      total: {
         pages: 9,
         elements: 82,
      },
   },
};

const mockDataStatement = {
   items: [
      {
         date: "2024-02-29",
         events: [
            {
               eventId: gerarNumeroAleatorio(),
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
            {
               eventId: gerarNumeroAleatorio(),
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
            {
               eventId: gerarNumeroAleatorio(),
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
               eventId: gerarNumeroAleatorio(),
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
            {
               eventId: gerarNumeroAleatorio(),
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
      {
         date: "2023-10-31",
         events: [
            {
               eventId: gerarNumeroAleatorio(),
               eventType: "STATEMENT",
               eventCategory: "CLOSE",
               eventDate: "2023-10-31T03:00:00Z",
               dueDate: "2023-11-10",
               amountDetails: {
                  localAmount: null,
                  currentBalance: 88.85,
                  previousBalance: 530.22,
                  credits: 530.22,
                  debits: 88.85,
               },
               cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
            },
            {
               eventId: gerarNumeroAleatorio(),
               eventType: "STATEMENT",
               eventCategory: "CLOSE",
               eventDate: "2023-10-31T03:00:00Z",
               dueDate: "2023-11-10",
               amountDetails: {
                  localAmount: null,
                  currentBalance: 88.85,
                  previousBalance: 530.22,
                  credits: 530.22,
                  debits: 88.85,
               },
               cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
            },
            {
               eventId: gerarNumeroAleatorio(),
               eventType: "STATEMENT",
               eventCategory: "CLOSE",
               eventDate: "2023-10-31T03:00:00Z",
               dueDate: "2023-11-10",
               amountDetails: {
                  localAmount: null,
                  currentBalance: 88.85,
                  previousBalance: 530.22,
                  credits: 530.22,
                  debits: 88.85,
               },
               cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
            },
            {
               eventId: gerarNumeroAleatorio(),
               eventType: "STATEMENT",
               eventCategory: "CLOSE",
               eventDate: "2023-10-31T03:00:00Z",
               dueDate: "2023-11-10",
               amountDetails: {
                  localAmount: null,
                  currentBalance: 88.85,
                  previousBalance: 530.22,
                  credits: 530.22,
                  debits: 88.85,
               },
               cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
            },
            {
               eventId: gerarNumeroAleatorio(),
               eventType: "STATEMENT",
               eventCategory: "CLOSE",
               eventDate: "2023-10-31T03:00:00Z",
               dueDate: "2023-11-10",
               amountDetails: {
                  localAmount: null,
                  currentBalance: 88.85,
                  previousBalance: 530.22,
                  credits: 530.22,
                  debits: 88.85,
               },
               cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
            },
         ],
      },
   ],
   paging: {
      hasNextPage: false,
      previous: null,
      next: "_page=1&_size=10",
      actual: {
         page: 1,
         elements: 10,
      },
      total: {
         pages: 9,
         elements: 82,
      },
   },
};

const mockDataLimit = {
   items: [
      {
         date: "2023-11-06",
         events: [
            {
               eventId: 8461454048726499000,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "c846f145-b4f0-4f87-bf26-499149c1c927",
               presentMaxLimit: 8900,
               amountRequest: 12000,
               approvedAmount: 12000,
               lastUpdateDate: "2023-11-06T18:25:51Z",
               creationDate: "2023-11-06T18:25:51Z",
               action: "INCREASE",
               reason: {
                  id: "5357fa6d-017d-45ec-99b1-7c828b96a6f1",
                  description: "Outros",
               },
            },
         ],
      },
      {
         date: "2023-10-06",
         events: [
            {
               eventId: 280324728599427620,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "be028abe-03e2-472c-859e-94c2fb76206d",
               presentMaxLimit: 8800,
               amountRequest: 8900,
               approvedAmount: 8900,
               lastUpdateDate: "2023-10-06T16:18:20Z",
               creationDate: "2023-10-06T16:18:20Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
            {
               eventId: 280324728599427620,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "be028abe-03e2-472c-859e-94c2fb76206d",
               presentMaxLimit: 8600,
               amountRequest: 8800,
               approvedAmount: 8800,
               lastUpdateDate: "2023-10-06T16:17:45Z",
               creationDate: "2023-10-06T16:17:45Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
            {
               eventId: 907068840429193200,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "90ff7068-e8ee-4042-91a9-3a2efcff1e4d",
               presentMaxLimit: 8500,
               amountRequest: 8600,
               approvedAmount: 8600,
               lastUpdateDate: "2023-10-06T14:47:58Z",
               creationDate: "2023-10-06T14:47:58Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
         ],
      },
      {
         date: "2023-10-05",
         events: [
            {
               eventId: 5626704634896218000,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "d5626704-f6f3-4bf8-9621-794ba808b5ca",
               presentMaxLimit: 7600,
               amountRequest: 8500,
               approvedAmount: 8500,
               lastUpdateDate: "2023-10-05T14:32:43Z",
               creationDate: "2023-10-05T14:32:43Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
         ],
      },
      {
         date: "2023-09-29",
         events: [
            {
               eventId: 1339164599479810800,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "eea133c9-b1f6-4e59-9479-c81092180f15",
               presentMaxLimit: 7000,
               amountRequest: 7600,
               approvedAmount: 7600,
               lastUpdateDate: "2023-09-29T19:18:23Z",
               creationDate: "2023-09-29T19:18:23Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
            {
               eventId: 1339164599479810800,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "eea133c9-b1f6-4e59-9479-c81092180f15",
               presentMaxLimit: 6600,
               amountRequest: 7000,
               approvedAmount: 7000,
               lastUpdateDate: "2023-09-29T19:17:19Z",
               creationDate: "2023-09-29T19:17:19Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
         ],
      },
      {
         date: "2023-09-28",
         events: [
            {
               eventId: 1689364368234029000,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "16aeb8e9-36ad-4f36-82d3-4029ecf0f036",
               presentMaxLimit: 6500,
               amountRequest: 6600,
               approvedAmount: 6600,
               lastUpdateDate: "2023-09-28T21:59:11Z",
               creationDate: "2023-09-28T21:59:11Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
         ],
      },
      {
         date: "2023-09-22",
         events: [
            {
               eventId: 6500140394386741,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE",
               status: "IN_PROGRESS",
               accountId: 103343442,
               creditLimitId: "650e0d140d394d3c867a41fe",
               presentMaxLimit: 6500,
               amountRequest: 12000,
               approvedAmount: 0,
               lastUpdateDate: "2023-09-22T21:54:28Z",
               creationDate: "2023-09-22T21:54:28Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
            {
               eventId: 7290022352425593000,
               eventType: "CREDIT_LIMIT",
               eventCategory: "RECEPTIVE_ONLINE",
               status: "APPROVED",
               accountId: 103343442,
               creditLimitId: "7e29c002-2352-4255-9b3c-2f133c431e21",
               presentMaxLimit: 5000,
               amountRequest: 6500,
               approvedAmount: 6500,
               lastUpdateDate: "2023-09-22T16:10:30Z",
               creationDate: "2023-09-22T16:10:30Z",
               action: "INCREASE",
               reason: {
                  id: "5e7aebe65451a8e07f13d572",
                  description: "Outros",
               },
            },
         ],
      },
   ],
   paging: {
      hasNextPage: true,
      previous: null,
      next: "_page=1&_size=10",
      actual: {
         page: 0,
         elements: 10,
      },
      total: {
         pages: 2,
         elements: 15,
      },
   },
};

const mockDataDetailsTransactionRequer = {
   additional: true,
   eventId: 878845454454,
   eventDate: "2023-10-23T13:29:20.008Z",
   eventType: "TRANSACTION",
   eventCategory: "SUSPICION",
   establishmentName: "Renner",
   establishmentMerchantCategoryGroup: "FUEL",
   transactionDetails: {
      orgOperationType: "INTERNATIONAL_PURCHASE",
      orgOperationDescription: "COMPRA INTERNACIONAL",
      cardType: "VIRTUAL",
      network: "MASTERCARD",
      entryModeLiteral: "CHIP",
      last4Digits: "4779",
      isOwner: true,
   },
   numberOfInstallments: 1,
   installmentsDetails: [
      {
         value: 50.42,
         date: "2023-10-31",
      },
   ],
   amountDetails: {
      contractAmount: 53.64,
      cardholderBillingAmount: 250.45,
      localAmount: 12,
      dollarExchange: 4.2015,
      currencyLiteral: "BRL",
      dollarAmount: 12,
   },
   denyDetails: {
      customResponseCode: "FRB",
   },
   cid: "7f664726-1679-9f4b-9e2a-7810383cbcc7",
};

const mockDataDetailsTransactionConfirmado = {
   additional: false,
   eventId: 878845454454,
   eventDate: "2023-10-23T13:29:20.008Z",
   eventType: "TRANSACTION",
   eventCategory: "AUTHORIZE",
   establishmentName: "Mercado Livre",
   establishmentMerchantCategoryGroup: "FUEL",
   transactionDetails: {
      orgOperationType: "INTERNATIONAL_PURCHASE",
      orgOperationDescription: "COMPRA INTERNACIONAL",
      cardType: "PLASTIC",
      network: "MASTERCARD",
      entryModeLiteral: "CHIP",
      last4Digits: "4779",
      isOwner: true,
   },
   numberOfInstallments: 1,
   installmentsDetails: [
      {
         value: 50.42,
         date: "2023-10-31",
      },
   ],
   amountDetails: {
      contractAmount: 53.64,
      cardholderBillingAmount: 145.78,
      localAmount: 12,
      dollarExchange: 4.2015,
      currencyLiteral: "BRL",
      dollarAmount: 12,
   },
   denyDetails: {
      customResponseCode: "FRB",
   },
   cid: "7f664726-1679-9f4b-9e2a-7810383cbcc7",
};

const mockDataDetailsTransactionReferido = {
   additional: false,
   eventId: 878845454454,
   eventDate: "2023-10-23T13:29:20.008Z",
   eventType: "TRANSACTION",
   eventCategory: "REFERRED",
   establishmentName: "Mercado Livre",
   establishmentMerchantCategoryGroup: "FUEL",
   transactionDetails: {
      orgOperationType: "INTERNATIONAL_PURCHASE",
      orgOperationDescription: "COMPRA INTERNACIONAL",
      cardType: "PLASTIC",
      network: "MASTERCARD",
      entryModeLiteral: "CHIP",
      last4Digits: "4779",
      isOwner: true,
   },
   numberOfInstallments: 1,
   installmentsDetails: [
      {
         value: 50.42,
         date: "2023-10-31",
      },
   ],
   amountDetails: {
      contractAmount: 53.64,
      cardholderBillingAmount: 145.78,
      localAmount: 12,
      dollarExchange: 4.2015,
      currencyLiteral: "BRL",
      dollarAmount: 12,
   },
   denyDetails: {
      customResponseCode: "FRB",
   },
   cid: "7f664726-1679-9f4b-9e2a-7810383cbcc7",
};

const mockDataDetailsTransactionNegado = {
   additional: false,
   eventId: 878845454454,
   eventDate: "2023-10-23T13:29:20.008Z",
   eventType: "TRANSACTION",
   eventCategory: "DENIED",
   establishmentName: "Amazon.com",
   establishmentMerchantCategoryGroup: "FUEL",
   transactionDetails: {
      orgOperationType: "INTERNATIONAL_PURCHASE",
      orgOperationDescription: "COMPRA INTERNACIONAL",
      cardType: "VIRTUAL",
      network: "MASTERCARD",
      entryModeLiteral: "CHIP",
      last4Digits: "4779",
      isOwner: true,
   },
   numberOfInstallments: 1,
   installmentsDetails: [
      {
         value: 50.42,
         date: "2023-10-31",
      },
   ],
   amountDetails: {
      contractAmount: 53.64,
      cardholderBillingAmount: 1450.78,
      localAmount: 12,
      dollarExchange: 4.2015,
      currencyLiteral: "BRL",
      dollarAmount: 12,
   },
   denyDetails: {
      customResponseCode: "FRB",
   },
   cid: "7f664726-1679-9f4b-9e2a-7810383cbcc7",
};

const mockDataDetailsStatement = {
   additional: true,
   eventId: 38370974,
   eventType: "STATEMENT",
   eventCategory: "OVERDUE",
   eventDate: "2024-02-29T03:00:00Z",
   dueDate: "2024-03-10",
   amountDetails: {
      localAmount: null,
      currentBalance: 167.1,
      previousBalance: 132.92,
      credits: 0,
      debits: 34.18,
   },
   transactionDetails: {
      orgOperationType: "INTERNATIONAL_PURCHASE",
      orgOperationDescription: "COMPRA INTERNACIONAL",
      cardType: "PLASTIC",
      network: "MASTERCARD",
      entryModeLiteral: "CHIP",
      last4Digits: "4779",
      isOwner: true,
   },
   cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
};

app.get("/timeline", (req, res) => {
   const page = req?.query?.page;
   const filter = req?.query?.filter;

   if (filter === "fatura") {
      return res.status(200).json(mockDataStatement);
   }

   if (filter === "confirmados") {
      return res.status(200).json(mockDataTransactions);
   }

   if (filter === "limite") {
      return res.status(200).json(mockDataLimit);
   }

   if (page === "0") {
      return res.status(200).json(mockDataDiversified);
   }

   if (page === "1") {
      return res.status(200).json(mockDataTransactions);
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
                     eventId: gerarNumeroAleatorio(),
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
                     eventId: gerarNumeroAleatorio(),
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
   const eventId = req.params.eventId;
   const random = Number(eventId.toString().slice(-1));

   if (random <= 1) {
      return res.status(200).json(mockDataDetailsTransactionRequer);
   }

   if (random === 2 || random === 3) {
      return res.status(200).json(mockDataDetailsTransactionConfirmado);
   }

   if (random === 4 || random === 5) {
      return res.status(200).json(mockDataDetailsTransactionReferido);
   }

   if (random === 6 || random === 7) {
      return res.status(200).json(mockDataDetailsTransactionNegado);
   }

   if (random === 8 || random >= 9) {
      return res.status(200).json(mockDataDetailsStatement);
   }
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
