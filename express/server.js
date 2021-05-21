const express= require('express')
const app= express()
const port=8080

app.use(addActiveTime =(req, res, next)=> {
    let requestAt= new Date(Date.now()).getHours()
    let requestday=new Date(Date.now()).getDay()

  if((requestAt>=9)&&(requestAt<=17)&&(requestday!=0&&requestday!=6))
  {
    next()

  }
  else{

      res.redirect("./error.html")
  }
    })


app.listen(port,(err)=>{
    err ? console.log(err): console.log("server is running")
})
app.use(express.static('public'));
