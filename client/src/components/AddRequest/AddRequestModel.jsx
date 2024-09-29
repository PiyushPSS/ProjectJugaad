import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';
import { nanoid } from 'nanoid';

const AddRequestModel = () => {

    const [Title, setTitle] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [Category, setCategory] = useState('Clothes');


    const sendData = async () => {
        // send the data to the server.

        console.log('Sending Data');

        const createURL = new URL('http://localhost:3000/addRequest?');
        const params = new URLSearchParams(createURL.search);

        //Creating a short ID.
        const shortID = nanoid(5);

        //Adding the data to the URL.
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

            //Show the toast.
            dataAddedToast();
        } else {
            console.log('Jugaad Request Failed');

            //Show the toast.
            dataNotAddedToast();
        }
    }


    //Toast function.
    const dataAddedToast = () => {
        toast.success("Congrats! Your request has been added 💌", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    const dataNotAddedToast = () => {
        toast.error("Oops! Something went wrong 😢", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }


    return (
        <div className="flex items-center justify-center p-8">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Request An Item</h2>
                    <p className="text-center text-gray-600 mb-6">Please fill out the details below to add a Jugaad Request 👇</p>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 flex">Title <pre className='text-red-700'>*</pre> </label>
                            <input
                                type="text"
                                name="title"
                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter the price" required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="flex text-sm font-medium text-gray-700 mb-1">Category <pre className='text-red-700'>*</pre></label>
                            <select
                                id="category"
                                name="category"
                                defaultValue={Category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
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
                            <button type='submit'
                                className="max-w-screen-md bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out" onClick={() => {
                                    //When the user clicks on the submit button.

                                    if (Title === '' || Description === '' || Price === '' || Category === '') {
                                        alert('Please fill out all the fields');
                                        return;
                                    }


                                    //Send the data if it is filled properly.
                                    sendData();

                                }}>
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