const express = require('express')

const app = express()
const port = 5000

app.get('/', (req,res) => {
    res.send([
        {
            name: 'Patient 1',
            age: '60',
            meds: '',
        }
    ])
})

app.listen(port, ()=> {
    console.log('Listening ....')
})