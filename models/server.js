const express = require('express')
const socket = require('socket.io')
const http = require('http')
const config = require('../config')
const Socket= require('./socket')

// He prefers used Path library when you have to move along folders
const path = require('path')
class Server{

    constructor(){
        this.app=new express(),
        this.server=http.createServer(this.app),
        this.io= socket(this.server)
    }
 
    middleware(){
        this.app.use(express.static(path.resolve(__dirname,'../public'))) 
    }

    socketConfig(){
        new Socket(this.io)
    }

    init(){
        this.middleware()
        this.socketConfig()
        this.server.listen(config.server.port,()=>{
            console.log(`Server on ${config.server.port} port`)
        })
    }
}


module.exports=Server