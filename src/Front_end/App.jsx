import React from "react";
import { Link } from "react-scroll";

import "./design.css";
function App() {
  return (
    <>
      {/* Home page */}
      <div className="homepage w-full h-[100vh]">
        <nav className="bg-gray-800 p-4 fixed w-full">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
            <div className=" sm:ml-6 sm:block">
              <div className="flex space-x-4  justify-center items-center lg:gap-20 z-50">
                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="Home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="Team"
                  spy={true}
                  smooth={true}
                >
                  Team
                </Link>

                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="Achivements"
                  spy={true}
                  smooth={true}
                >
                  Achivements
                </Link>

                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="Mission"
                  spy={true}
                  smooth={true}
                >
                  Mission
                </Link>

                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="events"
                  spy={true}
                  smooth={true}
                >
                  Events
                </Link>

                <Link
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  to="Location"
                  spy={true}
                  smooth={true}
                >
                  Location
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div id="Home" className=" flex  items-center lg:ml-40 h-full">
          <div>
            <h2 className=" text-6xl text-white font-bold  mt-20">
              Dignity Coding Club
            </h2>
            <h3 className=" italic  text-white text-3xl mt-10">
              ”Everybody can be great because everybody can serve.” <br /> –
              Martin Luther King, Jr.
            </h3>
            <p className=" lg:w-[35rem] text-xl mt-7 text-white">
              Our coding club is dedicated to fostering a collaborative
              environment where students come together to share ideas,
              knowledge, and passion for coding and technology.
            </p>
          </div>
        </div>
      </div>
      <p id="Team" className="mb-20"></p>
      {/*  Team */}
      <h1 className=" text-center  text-4xl  m-5 font-bold mb-10 ">
        {" "}
        Our Team{" "}
      </h1>
      <div className=" flex flex-col gap-6 lg:flex-row justify-center items-center lg:gap-40 ">
        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
          <img
            className=" h-80"
            src="https://fabrice-dev.vercel.app/myimg.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MBARUSHIMANA Fabrice</div>
            <p className="text-gray-700 text-xl font-thin">
              I am a Full Stack web developer with 3 years of experience. In my
              daily coding, I use the MERN stack to develop various projects at
              Dignity Coding Club. Additionally, I am a backend trainer.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://fabrice-dev.vercel.app"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg  focus:ring-4 focus:outline-none focus:text-gray-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
          <img
            className=" h-80"
            src="https://media.licdn.com/dms/image/D4D03AQFy7BWIofJIqw/profile-displayphoto-shrink_800_800/0/1706555218362?e=1712793600&v=beta&t=bCP8__qcIf3DWiugFZMmBoN8y4XAhb8jS_joFkCqIm4"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Digne di confiance NURUKUNDO
            </div>
            <p className="text-gray-700 text-xl font-thin">
              I am a front-end web developer with 3 years of experience. In my
              daily coding, I use HTML, CSS, and JavaScript to develop various
              projects at Dignity Coding Club. Additionally, I am a front-end
              trainer.
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <a
              href="https://www.linkedin.com/in/digne-di-confiance-nurukundo-98295929a/"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg  focus:ring-4 focus:outline-none focus:text-gray-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p id="Achivements" className=" mb-20"></p>
      {/* Achivements */}
      <h1 className=" text-center text-4xl font-bold mt-10 mb-10">
        Achivemtents
      </h1>
      <div className=" flex flex-col gap-5 lg:flex-row justify-center items-center lg:gap-10 ">
        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
          <img
            className=" h-80"
            src="achiv1.png"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              IRAGUHA Anualite
            </div>
            <p className="text-gray-700 text-xl font-thin">
              Anualite is a member of Dignity Coding Club. She participated in
              the Inter-TVET competition prepared by RTB and MTN, and her
              project became the second runner-up.
            </p>
          </div>
        </div>

        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
          <img
            className=" h-80"
            src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/10/18/31895.jpg"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4 pb-6">
            <div className="font-bold text-xl mb-2">
              Digne di confiance NURUKUNDO
            </div>
            <p className="text-gray-700 text-xl font-thin">
              Digne di confiance NURUKUNDO is a member of Dignity Coding Club.
              He participated in the E-shuri competition, and his project became
              the first among more than 74 projects.
            </p>
          </div>
        </div>
        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
          <img
            className=" h-80"
            src="https://pbs.twimg.com/media/F1Gq6dRX0AEhe5o?format=jpg&name=medium"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4 pb-6">
            <div className="font-bold text-xl mb-2">MBARUSHIMANA Fabrice</div>
            <p className="text-gray-700 text-xl font-thin">
              MBARUSHIMANA Fabrice is a member of Dignity Coding Club. He
              participated in the Skills competition prepared by RTB and
              Swisscontact, and he became the second-best performer among six
              competitors.{" "}
            </p>
          </div>
        </div>
      </div>

      <section
        id="Mission"
        className="flex items-center bg-stone-100 xl:h-screen font-poppins mt-10 dark:bg-gray-100 "
      >
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <img
                  src="https://yetiacademy.com/wp-content/uploads/2020/09/5-Fantastic-Coding-Games-For-Students-scaled.jpeg"
                  alt="aboutimage"
                  className=" z-0 object-cover w-full rounded h-96"
                />
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-gray-500 ">
                <h1 className="mt-2  text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700">
                  Our Mission{" "}
                </h1>
              </div>
              <p className="mb-6 leading-7  dark:text-gray-700  text-xl">
                Our coding club is dedicated to fostering a collaborative
                environment where students come together to share ideas,
                knowledge, and passion for coding and technology. We aim to
                provide a platform for members to explore various programming
                languages, engage in meaningful discussions, and work on
                projects that inspire creativity and innovation. Through our
                activities and events, we strive to cultivate a community that
                encourages learning, problem-solving, and personal growth in the
                field of computer science. Join us as we embark on a journey to
                explore the endless possibilities of coding and make a positive
                impact through technology
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="events">
        <h2 className=" text-center text-4xl font-bold mb-10">Events</h2>
        <div className=" grid grid-cols-3  gap-10 place-items-center">
           
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV85EKVyu2Nj7QLE1uRtuoRJThwjG_z1cfnAxalV4eBM7XeCxbho9DrBoblJKnNXl5PTpDY8vDtn2_I44YlYOfQa1MDyfXHPERKK9mz3lGhOtYwkqLss5tgNuxYGAzisZybBBPZYaRi6uNv-NZ1a64oRk=w997-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV87ocPNgQBol7UfMmNxKD_95qWzOnYXkKtj82vvYdUel95s5tMN88qV8dwBclbQqkVdn1NI8XJVJZ5Km59KXOdzqMaZ3wynzyZUpf32cJtGOyWM1Lp2Q2lJjpj_fAh8SpsgELmaMjyNc-qaQUs5SE6dT=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV87Nn2pTzcROaLb2Xi1K-LH_SJk-5ZiXXz4cSjsA0y9r6bfmGL-Tb5jdw7ZomSV0fxM1H8zlPkUKL_qBryWkz-B9nSX3ZrXafDrVN9Y4VPhgA5y35FadpOORISjleT2EtGaVPavGV6KIWkz_9t_9etRz=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV85ZruF67qFKCfh64bBB3Rw8b3HvruRIssXqmZ4iya8BrSCUoXTiXP2mFuj1eP8MVnzXjAUTV76kVAkiIH6YzieNOr5zl8Z9sSkNGmZZz4TrA8uorPXSbCkif8cTBnude12dmBuLmqtPsEEaZtS3qevS=w997-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV84v3DpUWIWQoaNmfNbtl6dv5tYGcqrGNckIHzeSxP7QmJBeZ3fR1k4fxdIVUUKwBvx4wsdXv5hd8LW9zwO75C_G7tq5KmSqnWGbrSlmMYJQ7dVe-QcFX2RMjlIZoGFh_WopbRTdoaHKbEtpoJviRxYd=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV85cuewJz_pDn5i5GYFG0YJJCv8hbW_4jcIOGnrlHENSFFzGgvaQJGEooj2DUuumiSPFUpazKotuD03VH1PaU9JUz6zoaYmNHho-jSoRRxhsw71bZykJEE4siK98Lsv2yojNU-VRqpILHctE3k9U71Dx=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV860vIMhjajhSPXtwV5sUk7-MhY6SldTmeE2f_W2UTNbcS2Xoz6hw5fsP632X4jivJ6WgoJ8_sBstuZDvpXglrVRWeleXNVlIkMbbE-nX42vb8zJmedr3BBM3nfCDuefQNd8l33u0rrDvuyjL5c-uNYK=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV87ib0TN_9caR_ukwP0MOBoPFA2BywpTuuE8NqxX8opSfIEqPwn6n0ps5UsT9jr7JCsJ5gnel2IRBT5xMMZzzAUdV90-DFxae_vvMrvrGpi_vU3mcsVOzyes2UqI9DgmfA1WODkqUpyNg4DhczWcxM3M=w997-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV85273-fA9eOTpGSxtpiY9IHc2kPcPoUfaUjx-iQU50SAstjQ93cpSewrmHjqIy5EPYpPFK2mgUBngSPZ_C1Rw1uYjJQBpKgOEuIJA0RgsXssTFOgv20tqlk0U9AnxvvkXBkAKCOe1-Zpjz-SF9x1aun=w997-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          
          <img
            class=" h-96 w-96 max-w-md rounded-lg shadow-xl dark:shadow-gray-400"
            src="https://lh3.googleusercontent.com/pw/ABLVV85rr6a5lxGeg9Ua1reo2YrTtO9VfZ2BgTgEBXqf6SzVpyh2X-5boG3PdiwlahIFyYdt9QnOFP6ToI8q_YwNxfid9C6mRaGQ9fdK4wrCgm9EbOngwBksNUIqhveoTB_D3jTnGVTsPmi2KrlR2sdi1M8t=w561-h748-s-no-gm?authuser=0"
            alt="image description"
          />
          <a href="https://photos.google.com/share/AF1QipOf_1W1i6cTvLmHfUqHunwpi3pqme8rHVafbEIjAhLBrZ4xfQS3fxnK0TQVNmbIFg?key=R0RHQVZYMUFncVVReWNCbFp6aGFfMlhsOG95MWRB">
<button type="button" class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
More image
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
          </a>

</div>
      </section>

      <p id="Location" className=" mt-32"></p>
      <h1 className=" text-center  text-4xl  m-5 font-bold mb-10 ">
        {" "}
        Our Location{" "}
      </h1>
      <div className=" w-full  absolute">
        <iframe
          className=" mt-8 w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15952.348316590727!2d29.2486805!3d-1.6879344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0593e27e02b9%3A0x54cbd0c1c7a140b8!2sEcole%20Secondaire%20Technique%20de%20Gisenyi%20-%20ESTG!5e0!3m2!1sen!2srw!4v1707517057530!5m2!1sen!2srw"
          width="1578"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4  relative">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="#"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Diginity Coding Club
                </span>
              </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Diginity Coding Club
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
