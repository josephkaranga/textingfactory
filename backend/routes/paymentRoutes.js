// backend/routes/payment.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/stkpush", async (req, res) => {
  try {
    const { phone, amount } = req.body; // Frontend sends these values

    const accessToken = "zNIRAY6BhqCKfsuGekVrMIFmTd3k"; // Your sandbox token
    const shortCode = 174379;
    const password = "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjUxMDIwMjM0NjQx";
    const timestamp = "20251020234641";
    const callbackURL = "https://mydomain.com/path"; // Replace with your actual callback endpoint

    const payload = {
      BusinessShortCode: shortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount || 1, // default 1 for testing
      PartyA: phone || 254740513504,
      PartyB: shortCode,
      PhoneNumber: phone || 254740513504,
      CallBackURL: callbackURL,
      AccountReference: "textfactory",
      TransactionDesc: "Payment of X",
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json({ status: "success", data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ status: "error", message: error.response?.data || error.message });
  }
});

export default router;
