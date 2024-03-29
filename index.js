const jsonServer = require('json-server')
const cors=require('cors')


const videoServer = jsonServer.create()

const router=jsonServer.router('data.json')

const middleware=jsonServer.defaults()


videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

const PORT=4010
videoServer.listen(PORT,()=>{
    console.log("server at :",PORT);
})