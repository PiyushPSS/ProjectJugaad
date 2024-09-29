import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Share2, MessageCircle, MoreVertical, UserRound } from "lucide-react"
import { toast, Bounce } from 'react-toastify';
import { calendarMonth } from '../../assets/assets';

const Jugaadrequest = () => {

  // This id comes from the URL of the page.
  //Using this id i can retrieve the data from the database.
  let { id } = useParams();

  const [requestData, setRequestData] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    //As soon as the page loads, retreive the data from the database.
    fetchData();

  }, []);

  const shareToast = () => {
    toast("Request link has been copied to clipboard⚡", {
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


  const fetchData = async () => {

    //fetch the data from the database using the id.
    let response;

    if (id.length > 5) {
      response = await fetch('http://localhost:3000/search?_id=' + id);
    } else {
      response = await fetch('http://localhost:3000/short/?ShortID=' + id);
    }
    const data = await response.json();

    setRequestData(data);

    window.history.replaceState(null, null, "/jugaad-req/" + data[0]._id);
  }

  if (requestData.length === 0) {
    return <div>Loading...</div>
  } else {

    const { _id, Title, Description, CreatedAt, Price, UserFirstName, UserLastName, Category, ShortID } = requestData[0];

    //Destructure the date format.
    const dateObj = new Date(CreatedAt);

    const year = dateObj.getFullYear();
    const month = calendarMonth(dateObj.getMonth() + 1); // Months are 0-indexed, so add 1
    const day = dateObj.getDate();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    if(minutes < 10) {
      minutes = "0" + minutes;
    }

    let completeTime;
    if (hours > 12) {
      completeTime = day + " " + month + ", " + year + " at " + (hours - 12) + ":" + minutes + " PM";
    } else {

      if (hours === 0) {
        hours = 12;
      }
      completeTime = day + " " + month + ", " + year + " at " + hours + ":" + minutes + " AM";
    }

    return (
      <div className="container mx-auto p-4 mt-5">

        <h1 className="text-3xl font-bold mb-4">{Category} Item Requested</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <UserRound className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{UserFirstName + " " + UserLastName}</h2>
                  <p className="text-sm text-gray-500">{completeTime}</p>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => {

                        // When the user clicks on the request report button.

                        console.log('Report clicked')
                        setIsMenuOpen(false)
                      }}
                    >
                      Report Request
                    </button>
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">{Title}</h1>
            <p className="text-gray-600 mb-6">
              {Description}
            </p>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-lg">Willing to pay: Rs. {Price}</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{Category}</span>
            </div>
            <div className="flex justify-between">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors" onClick={() => {
                shareToast();
                navigator.clipboard.writeText('http://localhost:5173/short/' + ShortID);
              }}>
                <Share2 className="w-4 h-4 mr-2" />
                Share Item
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with {UserFirstName}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default Jugaadrequest