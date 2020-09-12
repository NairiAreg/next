// const fs = require('fs');

// // fs.readFileSync("user.json","UTF-8",)

// let obj = {
//   name: 'Someone',
//   age: 96
// }
// export default (req, res) => {  
//   console.log(req);
//   if(req.method == 'GET'){
//     res.json(fs.readFileSync('users.json','utf-8'))
//   }
//   if(req.method == 'POST'){
//     let rfs = JSON.parse(fs.readFileSync('users.json','utf-8'))
//     rfs.push(req.body)
//     fs.writeFileSync('users.json',JSON.stringify(rfs),"utf-8")
//     res.json({ name: req.body })
//   }
//   if(req.method == 'PUT'){
//     res.json(req.body)
//   }
//   if(req.method == 'DELETE'){
//     res.json({ name: 'Delete John Doe' })
//   }
// }
export default (req,res)=>{
  res.json({
    message: 'A message from backend'
  })
}