import React, { useEffect } from 'react'
import axios from 'axios';

const Categories = (props) => {

    const categoryName = props.name;

    const [JugaadRequests, setJugaadRequests] = React.useState([]);

    useEffect(() => {
        props.setCategoryText(categoryName);

        axios.get('http://localhost:3000/')
            .then((response) => {
                setJugaadRequests(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    });

    let count = 0;

    return (
        <>
            {JugaadRequests.map((item, index) => {
                if (item.Category.toLowerCase() === categoryName.toLowerCase() || categoryName == 'all') {

                    // Show only 5 requests max for each categories.
                    if (++count > 5) {
                        return;
                    }

                    return (
                        <div className="mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-10 cursor-pointer" key={index}>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800">{item.Title}</h3>
                                <p className="text-gray-600 mt-2">
                                    {item.Description}
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-gray-700 font-semibold">Willing to Pay: ₹{item.Price}</span>
                                    <span className="text-sm text-gray-500">User: {item.UserName}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm text-gray-500">Category: {item.Category}</span>
                                    <span className="text-sm text-gray-400">Requested At: {item.CreatedAt}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}

            <div className="mx-auto bg-transparent border border-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-10 cursor-pointer w-60">
                <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-800 text-center">view all requests</h3>
                </div>
            </div>

        </>
    )
}

export default Categories;