const axios=require("axios");
exports.getTopHundredCryptocurrencies=async(req,res)=>{

    try {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        });   
        const top100 = data?.data?.map((crypto) => ({
          id:crypto?.id,
          name: crypto?.name,
          symbol: crypto?.symbol,
          current_price: crypto?.current_price,
          market_cap: crypto?.market_cap,
        }));
    
        res.status(200).json(top100);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }    
}

exports.getConvertedCurrency=async(req,res)=>{
    const { sourceCrypto, amount, targetCurrency } = req.query;
  try {
   const sourceUrl= `https://api.coingecko.com/api/v3/simple/price?ids=${sourceCrypto}&vs_currencies=usd`;
   const targetUrl= `https://api.coingecko.com/api/v3/simple/price?ids=${targetCurrency}&vs_currencies=usd`;
    const sourceData = await axios.get(sourceUrl);
    const targetData = await axios.get(targetUrl);
    const exchangeRate = (targetData?.data[targetCurrency]["usd"]/sourceData?.data[sourceCrypto]["usd"]);   
    const convertedAmount = (amount * exchangeRate).toFixed(6);
    res.status(200).json({ sourceCrypto, amount, targetCurrency, convertedAmount });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }

}