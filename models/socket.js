class Socket{
    constructor(io){
        this.io=io,
        this.socketEvents()
    }

    socketEvents(){
        this.io.on('connection',(client)=>{
            console.log(client.id)
            console.log('listening')
    
            client.on('new-message',(payload)=>{
                console.log(payload)
                this.io.emit('new-message',payload)
            })
        })
    }

}

module.exports=Socket