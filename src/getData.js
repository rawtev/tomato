const fs=require("fs");
const request=require("requests");



const http = require("http")
const server = http.createServer();

server.on("request",(req,res)=>{
    req.fetch("https://documenu.p.rapidapi.com/restaurants/search/fields?restaurant_phone=5854420444", {
          "method": "GET",
          "headers": {
            "x-api-key": "e91acf096df5c63233c6bc2439fe2297",
            "x-rapidapi-key": "3010f70b90mshec8708346c0f422p199e48jsn4af9510fe474",
            "x-rapidapi-host": "documenu.p.rapidapi.com"
          }
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            // const record = data.data;
            console.log(data);
            // Restaurant(data.data); 
            // dispRest(data.data);
    
          })
    // fs.readFile("readWrite.txt","UTF-8",(err,data)=>{
    //     // console.log(data.toString());
    //     if(err) console.log(err);
    //     else
    //     res.end(data.toString());
    // })
    
    // const rstream = fs.createReadStream("C:/Users/Vikas/Desktop/JS/nodetutorials/readWrite.txt");
    // rstream.on("data",(chunkData)=>{
    //     res.write(chunkData);
    // })
    // rstream.on("end",()=>{
    //     res.end();
    // });
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Response recieved");
});