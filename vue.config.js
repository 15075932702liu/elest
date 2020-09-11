let {data} = require("./mock/index")

module.exports = {
    devServer:{
        before(app){
            app.get("/api/list",(req,res)=>{
                res.json({
                    code:0,
                    data:data.list
                })
            })
        }
    }
}