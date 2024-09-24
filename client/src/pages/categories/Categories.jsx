import React from 'react'
import { dummy } from '../../assets/dummy';

const Categories = (props) => {

    const categoryName = props.name;
    props.setCategoryText(categoryName);

    return (
        <>
            {dummy.map((item, index) => {
                if (item.Category.toLowerCase() === categoryName.toLowerCase() || categoryName == 'all') {


                    return (
                        <div class="mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-10 cursor-pointer">
                            <div class="p-6">
                                <h3 class="text-lg font-semibold text-gray-800">{item.Title}</h3>
                                <p class="text-gray-600 mt-2">
                                    {item.Description}
                                </p>
                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-gray-700 font-semibold">Willing to Pay: ₹{item.Price}</span>
                                    <span class="text-sm text-gray-500">User: {item.UserName}</span>
                                </div>
                                <div class="flex items-center justify-between mt-2">
                                    <span class="text-sm text-gray-500">Category: {item.Category}</span>
                                    <span class="text-sm text-gray-400">Requested At: {item.CreatedAt}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}

            <div class="mx-auto bg-transparent border border-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 mb-10 cursor-pointer w-60">
                <div class="p-3">
                    <h3 class="text-lg font-semibold text-gray-800 text-center">view all requests</h3>
                </div>
            </div>

        </>
    )
}

export default Categories;