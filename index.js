const express = require("express")
const app =express()
const PORT = process.env.PORT || 2000
app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})

app.get("/", (request, response)=>{
    response.json("Welcome To Joshua Server")
})


      app.get('/login', (request, response) => {
        response.json("Login Successful");
       });
       app.get('/user', (request, response) => {
        response.json({
        name: "Joshua Chinonyerem",
        address: {
        street: "123 My Street",
        city: "Owerri",
        state: "Imo State",
        zip: "12345"
        },
        interests: ["Designing", "editing", "coding"]
        });
       });
       app.get('/skills', (request, response) => {
        response.json(["graphic designing", "video editing", "photo editing", "UI/UX", "web development" ]);
       });