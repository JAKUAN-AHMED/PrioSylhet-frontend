import React, { useEffect, useState } from "react";
import img1 from "../../assets/dryunush.jpeg";
import img2 from "../../assets/saudi-arab-bus.jpg";
import img3 from "../../assets/palestanian-war.jpg";
import img4 from "../../assets/ukraine-russia-war.jpeg";
import { FaClock } from "react-icons/fa";

const images = [
  {
    image: img1,
    text: "ড: ইউনুস হয়েছেন  বাংলাদেশের নতুন উপদেষ্টা",
  },
  {
    image: img2,
    text: "সৌদি বিশ্ব বাণিজ্যে নিয়ে আসছে নতুন বাস",
  },
  {
    image: img3,
    text: "ফিলিস্তিন ইস্যুতে কথা বলতেছেন নাহ মুসলীম বিশ্বের নেতারা",
  },
  {
    image: img4,
    text: "ইউক্রেন-রাশিয়া যুদ্ধ কোনোভাবেই যেনো থামছে না",
  },
  {
    image: img1,
    text: "আগামীকাল থেকে শৈত্যপ্রবাহের আশঙ্কা",
  },
  {
    image: img2,
    text: "আগামীকাল থেকে শৈত্যপ্রবাহের আশঙ্কা",
  },
  {
    image: img3,
    text: "আগামীকাল থেকে শৈত্যপ্রবাহের আশঙ্কা",
  },
  {
    image: img4,
    text: "আগামীকাল থেকে শৈত্যপ্রবাহের আশঙ্কা",
  },
];

const Highlight = () => {

  const [currentDateTime, setCurrentDateTime] = useState("");

  const updateDateTime = () => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("bn-BD", {
      weekday: "long", // 
      day: "numeric",
      month: "long",
      year: "numeric",
    });

   
    const formattedTime = date.toLocaleTimeString("bn-BD", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, 
    });

    
    setCurrentDateTime(`${formattedDate} ${formattedTime}`);
  };

  
  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <section className="pt-20">
      <div className="flex items-center gap-1 font-bangla font-bold p-1">
        <FaClock />
        {currentDateTime}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
        {/* First Section */}
        <div className="col-span-1 space-y-4">
          {/* Image with text */}
          <div
            style={{
              backgroundImage: "url(/src/assets/firstimage.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "350px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              padding: "10px",
            }}
            className="w-full" // Increase the width here for a bigger image
          >
            <h2 className="text-white font-bangla font-bold">
              ভারতে একটি ট্রেন বিধ্বস্ত হয়েছে
            </h2>
          </div>

          {/* Four Images in 2 Columns and 2 Rows */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 4).map((el, idx) => (
              <div
                key={idx}
                className="w-full h-[210px] bg-cover bg-center p-2 flex items-end justify-start"
                style={{
                  backgroundImage: `url(${el.image})`,
                }}
              >
                <h2 className="text-white font-bangla font-bold">{el.text}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-1 space-y-4">
          <div className="space-y-2">
            {images.map((el, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 gap-1 border rounded-md shadow-md"
              >
                <div>
                  <img
                    className="w-[150px] border rounded-lg p-1"
                    src={el.image}
                    alt=""
                  />
                </div>
                <h2>{el.text}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Last Section */}
        <div className="col-span-1 space-y-4">
          <div>
            <h2 className="font-bangla font-bold text-2xl text-center">
              নির্বাচিত
            </h2>
            <div className="grid grid-cols-1 border-t-4 border-t-gray-400 rounded-md shadow-md p-2 gap-2">
              {images.slice(0, 2).map((el, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2  border-b-[1px] border-gray-400"
                >
                  <h2>{el.text}</h2>
                  <div className="md:ml-16">
                    <img
                      className="w-36 border rounded-lg p-1"
                      src={el.image}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bangla font-bold text-2xl text-center">
              মতামত
            </h2>
            <div className="grid grid-cols-1 border-t-4 border-t-gray-400 rounded-md shadow-md p-2 gap-2">
              {images.slice(2, 4).map((el, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2  border-b-[1px] border-gray-400"
                >
                  <h2>{el.text}</h2>
                  <div className="md:ml-16">
                    <img
                      className="w-36 border rounded-lg p-1"
                      src={el.image}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 p-1">
            <label className="label">
              <span className="label-text font-bold text-gray-400 font-jost">
                Archive
              </span>
              <input type="date" name="" id="" />
            </label>
          </div>
          <div>
            <h2 className="font-bangla font-bold text-xl text-center text-blue-400 ">
              পাঠকের লেখা
            </h2>
            <div className="grid grid-cols-1 border-t-4 border-t-gray-400 rounded-md shadow-md p-2 gap-2">
              {images.slice(6, 8).map((el, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2  border-b-[1px] border-gray-400"
                >
                  <h2>{el.text}</h2>
                  <div className="md:ml-16">
                    <img
                      className="w-36 border rounded-lg p-1"
                      src={el.image}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
