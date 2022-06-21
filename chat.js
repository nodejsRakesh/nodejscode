const socket=io();
//____________Chalange_______________

socket.on("message",(message)=>{
    console.log(message);
})

document.querySelector("#message-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    //const message= document.querySelector("input").value;
    // input field name define

    const message=e.target.elements.message.value;

    socket.emit("sendMessage",message);
})
// socket.on("countUpdated",(count)=>{
//     console.log("Count has been updated",count);
// })

// document.querySelector("#increment").addEventListener("click",()=>{
//     console.log("clicked");
//     socket.emit("increment");
// })