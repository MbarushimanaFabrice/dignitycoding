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
              MBARUSHIMANA Fabrice is a member of Dignity Coding Club. He participated in the Skills competition prepared by RTB and Swisscontact, and he became the second-best performer among six competitors.{" "}
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
