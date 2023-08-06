import React, { useState } from 'react'

const ChatApp = () => {
    
    const [Chat, setChat] = useState([]);

    const addChat = (e) =>{
        if(e.code === 'Enter'){
            console.log('send message');
            let message = e.target.value;
            if(!message.trim()) return;

            e.target.value = "";
            setChat([...Chat, {msg:message}]);
            console.log(Chat);
        }

    }
  return (
    <div>
        <h1 className='text-center display-4 fw-bold my-5'>ChatApp</h1>
        <div className='container'>
            <div className='card chatbox '>
                <div className='card-body '>
                    <ul className='list-group float-end'>
                        {
                            Chat.map((chatapp)=>( 
                               <p className='sentmsg'> {chatapp.msg} </p>
                            )

                            )

                        }
                    </ul>
                </div>
                <div className='card-footer'>
                    <input type="text" className='form-control' onKeyDown={addChat} />
                </div>

            </div>

        </div>
    </div>
  )
}

export default ChatApp