const { Module } = require("module")

let people = [
  {
    name: 'strunk',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus numquam assumenda quas optio natus esse. Quaerat porro ratione repellat, quasi, odio nesciunt blanditiis sunt sequi nemo, expedita quis doloribus.',
    age: 6
  },
  {
    name: 'lairdal',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus numquam assumenda quas optio natus esse. Quaerat porro ratione repellat, quasi, odio nesciunt blanditiis sunt sequi nemo, expedita quis doloribus.',
    age: 8
  },
  {
    name: 'scurm',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus numquam assumenda quas optio natus esse. Quaerat porro ratione repellat, quasi, odio nesciunt blanditiis sunt sequi nemo, expedita quis doloribus.',
    age: 12345
  }
]



module.exports.people = people