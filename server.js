const express=require("express")
const app=express()
app.get("/greetings/:username",(req,res)=>{
    res.send(`Hello there, ${req.params.username}`)
})
app.get("/roll/:numId",(req,res)=>{
    const num=Number(req.params.numId)
    if (isNaN(num)==="false"){
        res.send(`You must specify a number ${typeof(req.params.numId)}`)
    }else {
        let randomNum=Math.floor(Math.random()*req.params.numId+1)
    }
    })
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
app.get("/collectibles/:index",(req,res)=>{
    if (req.params.index>collectibles.length-1){
        res.send("this item is not yet in stock check back soon")
    }else{
        res.send(`So you want a ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours`)
    }
})
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
app.get("/shoes",(req,res)=>{
    if (!isNaN(req.query.minprice)){
            res.send(shoes.filter(shoe=>shoes.price>=req.query.minprice))
        
    }else if (!isNaN(req.query.maxprice)){
        res.send(shoes.filter(shoe=>shoes.price<=req.query.maxprice))
    }else if (req.query.type){
        res.send(shoes.filter(shoe=>shoes.type===req.query.type))
    }else{
        res.send(shoes)
    }
})
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})