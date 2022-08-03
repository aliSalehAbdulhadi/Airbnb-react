import React from "react";

const HostInfo = () => {
  return (
    <div className="mt-10 border-t-[1px] pt-10 font-cerealNormal">
      <div className="flex mb-5">
        <div className="h-14 w-14 rounded-[50%] overflow-hidden mr-3">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="/images/image.webp"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-cerealMedium text-xl">Hosted by Bardley-Anne</h1>
          <h2 className="text-sm opacity-60">Join in April 2015</h2>
        </div>
      </div>
      <div className="flex">
        <div className="w-[45%] mr-[7rem]">
          <div className="flex">
            <div className="flex mr-5">
              <img
                className="mr-2 mt-[.1rem] h-5"
                src="/svg/star.svg"
                alt="star"
              />
              <h1>40 review</h1>
            </div>
            <div className="flex mr-5">
              <img
                className="mr-2 mt-[.1rem] h-5"
                src="/svg/shieldFilled.svg"
                alt="shield"
              />
              <h1>Identity verified</h1>
            </div>
            <div className="flex mr-5">
              <img
                className="mr-2 h-6"
                src="/svg/badgeFilled.svg"
                alt="badge"
              />
              <h1>Superhost</h1>
            </div>
          </div>

          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem quae atque error itaque nostrum doloremque est odit?
            Adipisci, maxime ad.
          </p>

          <div className="mt-5">
            <h1 className="font-cerealMedium">Co-hosts</h1>
            <div className="flex items-center">
              <div className="flex items-center mt-3 mr-5">
                <div className="h-10 w-10 rounded-[50%] overflow-hidden mr-3">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src="/images/image.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h1>Ali Saleh</h1>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div className="h-10 w-10 rounded-[50%] overflow-hidden mr-3">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src="/images/image.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h1>Fatima Saleh</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="font-cerealMedium mb-2">During your stay</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                laudantium velit doloribus aut quas, placeat natus, voluptatibus
                nobis ullam quae optio quos, omnis minus. Doloribus voluptatum
                voluptatibus veniam, voluptas placeat maiores quam ullam velit.
                Mollitia nobis quam officia soluta ullam?
              </p>
            </div>

            <div className="mt-3">
              <h1 className="font-cerealMedium mb-2">Ali is a Superhost</h1>
              <p>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[55%]">
          <div>
            <h1>
              Languages: Dansk, English, Français, Deutsch, Norsk, Español,
              Svenska
            </h1>
            <h1 className="my-5">Response rate: 100%</h1>
            <h1>Response time: within an hour</h1>
          </div>
          <div>
            <button className="border-[1px] border-black py-3 px-4 rounded-lg mt-5 hover:bg-gray-50">
              Contact Host
            </button>
            <p className="font-cerealLight text-xs w-[40%] mt-4">
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
