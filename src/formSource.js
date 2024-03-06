export const userInputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      placeholder: "example@example.com",
    },
    {
        id: "selectedCrypto",
        label: "Choose Cryptocurrency ",
        type: "select",
        options: [
          { value: "btc", label: "Bitcoin (BTC)" },
          { value: "eth", label: "Ethereum (ETH)" },
          { value: "doge", label: "Dogecoin (DOGE)" },
        ],
      },
    {
      id: "amount",
      label: "Amount",
      type: "number",
      placeholder: "10000",
    },
    {
      id: "cardNumber",
      label: "Card Number",
      type: "number",
      placeholder: "1234567891011120",
    },

    {
      id: "expiryDate",
      label: "Expiry Date",
      type: "text",
      inputMode: "numeric",
      placeholder: "01/2025",
    },
    {
        id: "cvv",
        label: "CVV",
        type: "number",
        placeholder: "777",
      },
    {
      id: "pin",
      label: "PIN",
      type: "password",
      placeholder: "0000",
    }
  ];
  