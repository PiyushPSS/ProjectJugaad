import React from 'react'

const ImageListBox = (props) => {

    const ImageDataList = props.imageDataList;

    // console.log(ImageDataList);

    if(ImageDataList.length === 0) {
        return (
            <div className='mt-10'>
                <h2 className='text-center text-2xl'>No Shared Images Found</h2>
            </div>
        )
    }

    return (
        <>
            <div className="mt-10 bg-gray-100 rounded-lg">
                <ol className='list-none'>
                    {ImageDataList.map((imageData) => {
                        return (
                            <li key={imageData._id} className='flex items-center justify-between p-5 border-b border-gray-300'>
                                <div className='flex items-center'>
                                    <img
                                        src={imageData.ImageURL}
                                        alt='Uploaded Image'
                                        className='w-20 h-20 rounded-lg cursor-pointer'
                                        onClick={() => window.open(imageData.ImageURL, '_blank')}
                                    />
                                    <p className='ml-5'>{imageData.PhotoUploadedBy}</p>
                                </div>
                                <div>
                                    FILE WAS UPLOADED AT: <strong>{new Date(imageData.createdAt).toLocaleString()}</strong>
                                </div>
                                <div>
                                    <button className='bg-blue-500 hover:bg-blue-800 text-white pl-3 pr-3 pb-2 pt-2 rounded-lg mr-4'>Rent This Item</button>
                                    <button className='bg-red-500 hover:bg-red-800 text-white pl-3 pr-3 pt-2 pb-2 rounded-lg'>Reject</button>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}

export default ImageListBox