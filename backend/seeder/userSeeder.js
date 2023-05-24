const bcrypt=require('bcryptjs')

const users=[
    {name:'kevin',
    email:'kmturbobro02@gmail.com',
    password:bcrypt.hashSync('kmturbobro02@gmail.com',10)}]

module.exports=users