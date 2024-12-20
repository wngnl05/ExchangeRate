const express = require('express');
const router = express.Router();


router.get("/", async (req, res) => {
    // const response = await fetch("https://v6.exchangerate-api.com/v6//pair/USD/INR", {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    // }).then(response => response.json());
    
    // if (!response.conversion_rate) {
    //     alert("오류가 발생했습니다.");
    //     return;
    // }

    // const convertedAmount = amount * response.conversion_rate;
    // console.log(`Converted Amount: ${convertedAmount} INR`);

    res.status(200).json({})
});

module.exports = router;