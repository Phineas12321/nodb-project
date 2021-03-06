
const family = [{name: 'You', id: 0, isDead: false}]

let id = 1



module.exports = {
    getFamily: (req, res) => {
        res.status(200).send(family)
    },

    addMember: (req, res) => {
        const {name} = req.body

        family.push({name, id, isDead: false})
        id++

        res.status(200).send(family)
    },

    editName: (req, res) => {
        const {id} = req.params
        const {name} = req.body

        let index = family.findIndex((e) => e.id === +id)

        family[index].name = name

        res.status(200).send(family)
    },

    buryMember: (req, res) => {
        const {id} = req.params
        let index = family.findIndex((e) => e.id === +id)
        family.splice(index, 1)
        res.status(200).send(family)
    }
}