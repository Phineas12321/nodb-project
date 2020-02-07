const express = require('express')

const family = [{name: 'You', id: 0}]

let id = 1



module.exports = {
    getFamily: (req, res) => {
        res.status(200).send(family)
    },

    addMember: (req, res) => {

    },

    editName: (req, res) => {

    },

    buryMember: (req, res) => {
        let index = family.findIndex((e) => e.id === +id)
        family.splice(index, 1)
        res.status(200).send(family)
    }
}