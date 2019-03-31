const app = require('express')()

const PORT = process.env.PORT || 4444

app.get('/', (req,res) => {
    res.send('Hello! This is a sample app')
})

app.listen(PORT, () =>{
    console.log('server started')
})



