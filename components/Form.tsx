'use client'
'use strict'

import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import React, { useState } from 'react';
import axios from "axios";
import { Button } from './ui/button'

const Form = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const webhookUrl = url;

  const isUrlValid = () => {
    const urlCheck = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlCheck.test(url);
  };

  const isNameEmpty = () => {
    return name.trim() !== '';
  };

  const isContentEmpty = () => {
    return contents.trim() !== '';
  };

  const postData = {
    username: name,
    content: contents
  }

  const sendEvent = async () => {
    await axios.post(webhookUrl, postData);

      toast("Sent!", {
        description: "Successfully sent message!",
        action: {
          label: "Close",
          onClick: () => console.log('close'),
        },
      })
    
    
  }
  


  return (
    <div className='flex items-center justify-center flex-col h-screen'>
        <div className="border w-[400px] h-[450px] rounded-xl flex justify-center">
            <h1 className=" text-3xl mt-10 fixed">WebHook Sender</h1>
            <div className="flex flex-col items-center justify-center gap-y-[30px] mt-10">
                <Input value={url} onChange={(event) => setUrl(event.target.value)} className='w-[300px]' placeholder="WebHook URL" />
                <Input value={name} onChange={(event) => setName(event.target.value)} className='w-[300px]' placeholder="Webhook Name" />
                <Input value={contents} onChange={(event) => setContents(event.target.value)} className='w-[300px]' placeholder="Contents" /> 
                <Button disabled={!isUrlValid() || !isNameEmpty() || !isContentEmpty()} onClick={sendEvent} className='w-[200px] mt-5'>Send</Button>
            </div>
        </div>
    </div>
  )
}

export default Form