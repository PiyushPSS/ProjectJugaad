import React from 'react'
import { CircleX } from 'lucide-react';

const AddRequestModel = (props) => {

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button className='place-self-end' onClick={() => {
                    props.onClose();
                }}><CircleX size={30} /></button>
                <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-centermx-4'>
                    <form>
                        <input type='text' placeholder='Title of Request' id='requestTitle' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' />
                        <input type='text' placeholder='Description of the Request' id='requestDescription' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md' />
                    </form>

                    <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'>Set Data</button>
                </div>
            </div>
        </div>
    )
}

export default AddRequestModel