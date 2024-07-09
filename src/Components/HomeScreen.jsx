// HomeScreen.js
import { useState } from "react";
import SignIn from "./SignIn"; // Import the SignIn component
import JoinIn from "./JoinIn"; // Import the JoinIn component

function HomeScreen() {
  const [view, setView] = useState("signIn"); // State to manage the view

  return (
    <div className="flex flex-col lg:flex-row justify-center p-5 mt-20 flex-wrap items-center">
      <div className="flex w-full flex-col lg:w-1/2">
        <div className="px-4 lg:px-8">
          <h1 className="text-3xl font-semibold italic">
            Explore your <span className="text-blue-500">hobby</span> or{" "}
            <span className="text-purple-500">passion</span>
          </h1>
          <p className="text-base leading-6 mb-3 mt-8">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="text-base leading-6">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="mt-6 flex justify-center lg:justify-start">
          <img src="./images/home.png" alt="Home" className="w-full max-w-md lg:max-w-none" />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100 rounded-lg p-8 w-full max-w-md lg:ml-8 mt-7">
        <div className="flex gap-4 w-full mb-4">
        <a
            href="#"
            className={`text-xl font-semibold text-purple-500 border-b-2 ${view === "signIn" ? "border-purple-500" : "border-transparent"}`}
            onClick={() => setView("signIn")}
          >
            Sign In
          </a>
          <a
            href="#"
            className={`text-xl font-semibold text-purple-500 border-b-2 ${view === "joinIn" ? "border-purple-500" : "border-transparent"}`}
            onClick={() => setView("joinIn")}
          >
            Join In
          </a>
        </div>

        {view === "signIn" && <SignIn />}
        {view === "joinIn" && <JoinIn />}
      </div>
    </div>
  );
}

export default HomeScreen;
