const express = require('express');
const router = express.Router();


router.post("/getCurrency", async (req, res) => {
    try{
        const { fromCurrency, toCurrency } = req.body;

        // 통화 변환
        const response = await fetch(`https://v6.exchangerate-api.com/v6/57091290c552da35519c7d5b/pair/${fromCurrency}/${toCurrency}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })

        if (response.status === 429) { return res.status(429).send("API 요청 한도가 초과되었습니다.") }
        if (!response.ok) { return res.status(500).send("오류가 발생했습니다.") }

        const data = await response.json();
        console.log(data)
        const amount = data.conversion_rate;
        return res.status(200).json({ amount })
    }
    catch(error){
        console.log(error);
        return res.status(500).send("오류가 발생했습니다.")
    }
});

module.exports = router;