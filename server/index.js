const express = require('express')
const familyCtrl = require('./controllers/familyController')

const app = express()

const PORT = 4040

app.use(express.json())

app.get('/api/family', familyCtrl.getFamily)
app.post('/api/family', familyCtrl.addMember)
app.put('/api/family/:id', familyCtrl.editName)
app.delete('/api/family/:id', familyCtrl.buryMember)

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))