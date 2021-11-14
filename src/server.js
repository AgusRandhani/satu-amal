import app from "./application";

var server_host = process.env.YOUR_HOST || "0.0.0.0";
var server_port = process.env.APP_PORT || process.env.PORT || 3333;
app.listen(server_port, server_host, () => {
  console.log(`Server is running on :${process.env.APP_URL}`);
});
