const express=require("express");
const { getTopHundredCryptocurrencies, getConvertedCurrency } = require("../controller/currencyController");
const router=express.Router();

router.route("/getTopHundredCryptocurrencies").get(getTopHundredCryptocurrencies);
router.route("/getConvertedCurrency").post(getConvertedCurrency);

module.exports=router;