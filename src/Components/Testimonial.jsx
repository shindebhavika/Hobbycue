
import { FaCirclePlus } from "react-icons/fa6";
import { FaQuoteLeft, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';


function Testimonial() {
  return (
    <div className='testimonial flex flex-col justify-center p-5 mt-20 flex-wrap items-center'>
      <section className='bg-blue-50 p-6 w-full  mb-10'>
        <div className='container flex flex-col gap-4 border bg-white p-6 rounded-lg'>
          <div className='flex gap-7 items-center'>
            <FaCirclePlus className='text-2xl text-blue-700' />
            <h1 className='font-extrabold text-lg'>Add Your own</h1>
          </div>
          <div className='mt-6'>
            <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            <button className="px-4 py-2 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white font-semibold mt-6">Add new</button>
          </div>
        </div>
      </section>

      <div className="bg-purple-100 border border-gray-200 p-10 rounded-lg w-full  mb-10">
        <div className="flex items-center mb-4">
          <FaQuoteLeft className="text-purple-500 mr-2 text-2xl" />
          <h2 className="text-xl font-semibold">Testimonials</h2>
        </div>
        <p className="mb-6">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex items-center flex-wrap w-full" >
          <audio controls className="mr-4 w-1/2">
            <source src="path_to_audio_file.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="flex items-center">
            <img src="./images/Ellipse 12.png" alt="Shubha Nagarajan" className="w-12 h-12 rounded-full mr-2" />
            <div>
              <p className="font-semibold">Shubha Nagarajan</p>
              <p className="text-purple-500">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white w-full p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
              <h2 className="font-bold mb-4">Hobbycue</h2>
              <ul>
                <li className="mb-2"><a href="#">About Us</a></li>
                <li className="mb-2"><a href="#">Our Services</a></li>
                <li className="mb-2"><a href="#">Work with Us</a></li>
                <li className="mb-2"><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
              <h2 className="font-bold mb-4">How Do I</h2>
              <ul>
                <li className="mb-2"><a href="#">Sign Up</a></li>
                <li className="mb-2"><a href="#">Add a Listing</a></li>
                <li className="mb-2"><a href="#">Claim Listing</a></li>
                <li className="mb-2"><a href="#">Post a Query</a></li>
                <li className="mb-2"><a href="#">Add a Blog Post</a></li>
                <li><a href="#">Other Queries</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
              <h2 className="font-bold mb-4">Quick Links</h2>
              <ul>
                <li className="mb-2"><a href="#">Listings</a></li>
                <li className="mb-2"><a href="#">Blog Posts</a></li>
                <li className="mb-2"><a href="#">Shop / Store</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
              <h2 className="font-bold mb-4">Social Media</h2>
              <div className="flex space-x-4">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaPinterest /></a>
                <a href="#"><FaGoogle /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaTelegram /></a>
                <a href="#"><FaEnvelope /></a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
              <h2 className="font-bold mb-4">Invite Friends</h2>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="px-4 py-2 border border-purple-500 rounded-l-lg focus:outline-none"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-700">
                  Invite
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p>© Purple Cues Private Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Testimonial;
