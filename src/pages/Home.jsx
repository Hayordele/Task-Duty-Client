import React from "react";
import BRO from "../assets/images/bro.png";

function Home() {
  return (
    <section className="home-section mt-4">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="order-md-2">
          
            <img src={BRO} alt="BRO Image" />
          </div>
          <div className="order-md-1 mt-4 justify-contetnt-between">
            <h2>
              Manage your Tasks on
              <br />
              <p className="bg-purple">TaskDuty</p>
            </h2>
            <div className="w-50 h-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.
            </div>
            <div className="py-3 ">
              <button className="py-1 bg-purple-custom border-0 rounded-3 text-white">
                Go to My Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

