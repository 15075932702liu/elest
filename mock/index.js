let Mock = require("mockjs")

let data = Mock.mock({
    "list|10":[
        {
            name:"@cname",
            img:"@image(100x100,@color)",
            id:"@id",
            hasActive:"@boolean"
        }
    ]
})
module.exports={
    data
} 