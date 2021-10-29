'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "departments", deps: []
 * createTable "products", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial",
    "created": "2021-10-25T20:06:00.932Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "departments",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "products",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
