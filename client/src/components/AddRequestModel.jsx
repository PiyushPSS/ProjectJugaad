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
                        <input type='text' placeholder='Description of the Request' id='requestDescription' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' />
                        <input type='text' placeholder='How much you are willing to pay?' id='requestPrice' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' />
                        <form class="max-w-sm mx-auto">
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a category</option>
                                <option value="Clothes">Clothes</option>
                                <option value="DailyUse">Daily Use Items</option>
                                <option value="Books">Books</option>
                                <option value="Essentials">Essentials</option>
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                                <option value="PGRooms">PG Rooms</option>
                            </select>
                        </form>
                    </form>

                    <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black' onClick={() => {
                        //Set the data to the mongo DB.

                        
                    }}>Set Data</button>
                </div>
            </div>
        </div>
    )
}

export default AddRequestModel