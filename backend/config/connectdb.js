const mongoose=require('mongoose')

const connectdb= async ()=>{
    try{
      await  mongoose.connect('mongodb+srv://mohamad:aV8VcEjT24mjnbIj@cluster0.shiusyu.mongodb.net/?retryWrites=true&w=majority')
        console.log('You are connected to database')
    }catch{
        console.log(err)
    }
}




module.exports=connectdb