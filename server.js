const app = require("./app");



app.listen(process.env.PORT, () => {
  console.log("Server is runing on Port : " + process.env.PORT);
});