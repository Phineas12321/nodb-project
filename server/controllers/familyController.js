
const family = [{name: 'You', id: 0}]

let id = 1



module.exports = {
    getFamily: (req, res) => {
        res.status(200).send(family)
    },

    addMember: (req, res) => {
        const {member} = req.body
        member.id = id
        id++

        family.push(member)

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