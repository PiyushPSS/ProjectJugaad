import React from 'react'
import './chat.css'
import { Chatbox, Session } from "@talkjs/react";

const Chat = () => {
  return (
    <div className='h-auto'>
      <Session appId="tDWNIfmG" userId="sample_user_alice">
        <Chatbox conversationId="sample_conversation" className='h-[600px]' />
      </Session>
    </div>
  )
}

export default Chat;