import { Plus } from 'lucide-react'
import React from 'react'

const ShareItemBox = () => {
    const fileInputRef = React.useRef(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div
            className='mt-10 rounded-lg bg-gray-50 p-10 border-dashed border-spacing-10 border border-black flex items-center justify-center hover:bg-gray-300 cursor-pointer'
            onClick={handleClick}
        >
            <Plus />
            <h1 className='ml-3'>Share Your Item</h1>
            <input
                type="file"
                accept='image/png, image/jpeg, image/jpg'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                    // We have got the files here.

                    console.log(e.target.files[0]);

                }}
            />
        </div>
    );
}

export default ShareItemBox