const jwt =require('jsonwebtoken');
const manager = require('./managersBll');
const user = require('./usersBll');


 const Login=(userName,password)=>{
    return new Promise(async (resolve,reject)=>
    {
      const users=await user.getAll().then(data=>{ return data});
      const managers=await manager.getAll().then(data=>{ return data});

        const u= users.find(u=>{return u.userName==userName && u.password==password});
        const m = managers.find(u=>{return u.userName==userName && u.password==password});


        if(u||m){
            const accessTokenSecret="somerandomaccesstoken";
            let refreshTokens=[];  
            let accessToken;
            let currentUser
            if(u){
                 accessToken=jwt.sign({userName:user.userName,role:'user'},accessTokenSecret);
                 currentUser=u;
            }
            if(m){
                 accessToken=jwt.sign({userName:user.userName,role:'manager'},accessTokenSecret);
                 currentUser=m;
            }
            refreshTokens.push(accessToken)
        resolve({
          accessToken,
          currentUser
        })
        }

        else{
            console.log("userName or password incorrect");
            return;
          }

       
     
    })
}
module.exports = { Login};
