const http = require("http");
const host = 'localhost';
const port = 8989;
const requestListener = function (request,response){
    var date = new Date()
    let responseMessage = "<h1> Current Time and Date </h1>"+date;
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);

});