module.exports={
    home(req,res){
        let obj={
            name:"李华",
            age:20,
            sex:"男"
        }
        res.end(JSON.stringify(obj))

    },

    login(req,res){
        res.end("login")
    }
}