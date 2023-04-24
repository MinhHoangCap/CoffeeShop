'use strict'
const util = require('util')
const db = require('../../db/conn.mjs')

module.exports = {
    get: async (req,res) => {
        if(db) console.log("hass db");
        // let collection = await db.collection("customers");
        // let results = await collection.find({})
        // .limit(50)
        // .toArray();
        // if(err) throw err
        // res.json(results).status(200);
    }
}