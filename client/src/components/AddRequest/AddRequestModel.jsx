import React from 'react'
import { CircleX } from 'lucide-react';
import { nanoid } from 'nanoid';

const AddRequestModel = (props) => {

    const [Title, setTitle] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [Category, setCategory] = React.useState('');

    const sendData = async () => {
        // send the data to the server.

        const createURL = new URL('http://localhost:3000/addRequest?');
        const params = new URLSearchParams(createURL.search);

        const shortID = nanoid(5);

        params.append('Title', Title);
        params.append('Description', Description);
        params.append('UserID', "1");
        params.append("CreatedAt", new Date().toISOString());
        params.append('Price', Price);
        params.append("UserFirstName", "Sai");
        params.append('Category', Category);
        params.append('ShortID', shortID);

        let request = await fetch(createURL + params.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (request.ok) {
            console.log('Jugaad Request Sent');
        } else {
            console.log('Jugaad Request Failed');
        }
    }

    return (
        // <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        //     <div className='mt-10 flex flex-col gap-5 text-white'>
        //         <button className='place-self-end' onClick={() => {
        //             props.onClose();
        //         }}><CircleX size={30} /></button>
        //         <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-centermx-4'>
        //             <form>
        //                 <input type='text' placeholder='Title' id='requestTitle' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' value={Title} onChange={(e) => setTitle(e.target.value)} />
        //                 <input type='text' placeholder='Description of the Request' id='requestDescription' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' value={Description} onChange={(e) => setDescription(e.target.value)} />
        //                 <input type='text' placeholder='How much you are willing to pay?' id='requestPrice' required className='w-full px-4 py-3 text-black border-gray-300 rounded-md mb-5' value={Price} onChange={(e) => setPrice(e.target.value)} />
        //                 <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Category} onChange={(e) => setCategory(e.target.value)}>
        //                     <option value="no-option">Select a category</option>
        //                     <option value="Clothes">Clothes</option>
        //                     <option value="Daily Use">Daily Use Items</option>
        //                     <option value="Books">Books</option>
        //                     <option value="Projects">Projects</option>
        //                     <option value="Car">Car</option>
        //                     <option value="Bike">Bike</option>
        //                     <option value="PG Rooms">PG Rooms</option>
        //                 </select>
        //             </form>

        //             <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black' onClick={() => {
        //                 //Set the data to the mongo DB.

        //                 sendData();

        //             }}>Set Data</button>
        //         </div>
        //     </div>
        // </div>

        <div className="flex items-center justify-center p-8">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Request An Item</h2>
                    <p className="text-center text-gray-600 mb-6">Please fill out the details below to add a Jugaad Request 👇</p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1 flex">Title <pre className='text-red-700'>*</pre> </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter the title of your request" required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="flex text-sm font-medium text-gray-700 mb-1">Describe your request <pre className='text-red-700'>*</pre></label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Provide details about your request" required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price" className="flex text-sm font-medium text-gray-700 mb-1">Price <pre className='text-red-700'>*</pre></label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter the price"required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="flex text-sm font-medium text-gray-700 mb-1">Category <pre className='text-red-700'>*</pre></label>
                            <select
                                id="category"
                                name="category"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required
                            >
                                <option value="">Select a category</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Books">Books</option>
                                <option value="Daily Use">Daily Use</option>
                                <option value="Projects">Projects</option>
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                                <option value="PG Rooms">PG Rooms</option>
                            </select>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="max-w-screen-md bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddRequestModel