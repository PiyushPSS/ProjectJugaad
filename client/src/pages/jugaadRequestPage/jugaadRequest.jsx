import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Share2, MoreVertical, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import { toast, Bounce } from 'react-toastify';
import { calendarMonth } from '../../assets/assets';
import { user } from '../../assets/user';
import Chat from '../chat/chat';
// import ShareItemBox from '../../components/ShareItemBox/ShareItem';

const Jugaadrequest = () => {

  // This id comes from the URL of the page.
  //Using this id i can retrieve the data from the database.
  let { id } = useParams();

  const [requestData, setRequestData] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const [userData, setUserData] = useState({});

  // const [isShareBoxOpen, setIsShareBoxOpen] = useState(false);

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  // const toggleShareBox = () => {
  //   setIsShareBoxOpen(!isShareBoxOpen);
  // }

  const toggleChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  }

  const toggleTerms = () => setIsTermsOpen(!isTermsOpen)

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

    setUserData(user);

    window.history.replaceState(null, null, "/jugaad-req/" + data[0]._id);
  }

  if (requestData.length === 0) {
    return <div>Loading...</div>
  } else {

    const { _id, Title, Description, CreatedAt, Price, Category, ShortID } = requestData[0];

    const { UserFirstName, UserLastName, ProfileImage } = userData;

    //Destructure the date format.
    const dateObj = new Date(CreatedAt);

    const year = dateObj.getFullYear();
    const month = calendarMonth(dateObj.getMonth());
    const day = dateObj.getDate();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let completeTime;
    if (hours > 12) {
      completeTime = day + " " + month + ", " + year + " at " + (hours - 12) + ":" + minutes + " PM";
    }
    else if (hours === 12) {
      completeTime = day + " " + month + ", " + year + " at " + hours + ":" + minutes + " PM";
    }
    else {

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
                  <img src={ProfileImage} className="w-full h-full object-cover" />
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
                Share This Request
              </button>

              {/* Send the photo of your item button */}

              {/* <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" onClick={() => {
                toggleShareBox();
              }}>
                <Share className="w-4 h-4 mr-2" />
                Share Photo of Item
              </button> */}


              <button className='flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors' onClick={() => {
                toggleChatBox();
              }}>
                Chat with {UserFirstName}
              </button>
            </div>
          </div>
        </div>

        {/* {isShareBoxOpen && <ShareItemBox />} */}

        {isChatBoxOpen && <Chat userRecogID = {userData._id} />}


        {/* User Terms and Conditions Aggrement */}

        <div className="my-8">
          <div
            className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg overflow-hidden"
            role="region"
            aria-labelledby="terms-title"
          >
            <button
              onClick={toggleTerms}
              className="w-full p-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-expanded={isTermsOpen}
              id="terms-title"
            >
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                <h2 className="text-lg font-semibold text-yellow-800">Important: Keep this in mind while sharing an item.</h2>
              </div>
              {isTermsOpen ? (
                <ChevronUp className="h-5 w-5 text-yellow-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-yellow-600" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isTermsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-4 space-y-4 text-yellow-800">
                <section>
                  <h3 className="font-semibold">Peer-to-Peer Transaction Platform</h3>
                  <p>Project Jugaad only facilitates connections between users and does not directly participate in transactions or agreements between individuals.</p>
                </section>
                <section>
                  <h3 className="font-semibold">Use of Products at Your Own Risk</h3>
                  <p>Users assume all risks associated with the use or rental of items listed. The platform is not liable for any damages or issues arising from product usage.</p>
                </section>
                <section>
                  <h3 className="font-semibold">No Guarantees on Availability</h3>
                  <p>We do not guarantee the availability of products at any given time. All listings are subject to the users' discretion and can be removed without notice.</p>
                </section>
                <section>
                  <h3 className="font-semibold">Disputes Between Users</h3>
                  <p>Any disputes or disagreements that arise from transactions must be resolved between the involved users. Project Jugaad team is not responsible for mediating or resolving disputes.</p>
                </section>
                <section>
                  <h3 className="font-semibold">Adherence to Legal Guidelines</h3>
                  <p>All transactions must comply with local laws. Any illegal activities, such as the sale of prohibited items, will result in immediate account suspension.</p>
                </section>
                <section>
                  <h3 className="font-semibold">Non-Commercial Use</h3>
                  <p>Project Jugaad is intended for non-commercial use, focused on sharing and renting everyday essentials. Any commercial use of the platform will lead to account termination.</p>
                </section>
                <section>
                  <h3 className="font-semibold">Limited Liability</h3>
                  <p>Project Jugaad shall not be held responsible for any monetary loss, fraud, or damages related to transactions made on the platform.</p>
                </section>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }


}

export default Jugaadrequest