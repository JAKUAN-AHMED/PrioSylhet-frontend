import React, { useState } from "react";
import img1 from "../../assets/dryunush.jpeg"; // Replace with your city-specific images
import img2 from "../../assets/saudi-arab-bus.jpg";
import img3 from "../../assets/palestanian-war.jpg";
import img4 from "../../assets/ukraine-russia-war.jpeg";

// Sample news data for different cities
const cityNews = {
  সুনামগঞ্জ: [
    {
      image: img1,
      text: "সুনামগঞ্জে বন্যার প্রভাব বৃদ্ধি পাচ্ছে",
    },
    {
      image: img2,
      text: "সুনামগঞ্জে নতুন সেতু নির্মাণের কাজ শুরু",
    },
    {
      image: img3,
      text: "সুনামগঞ্জের শিক্ষা ব্যবস্থা নিয়ে নতুন উদ্যোগ",
    },
    {
      image: img2,
      text: "সুনামগঞ্জে নতুন সেতু নির্মাণের কাজ শুরু",
    },
    {
      image: img3,
      text: "সুনামগঞ্জের শিক্ষা ব্যবস্থা নিয়ে নতুন উদ্যোগ",
    },
    {
      image: img2,
      text: "সুনামগঞ্জে নতুন সেতু নির্মাণের কাজ শুরু",
    },
    {
      image: img3,
      text: "সুনামগঞ্জের শিক্ষা ব্যবস্থা নিয়ে নতুন উদ্যোগ",
    },
  ],
  মৌলভীবাজার: [
    {
      image: img4,
      text: "মৌলভীবাজারে উচ্চমাত্রার তাপমাত্রা রেকর্ড",
    },
    {
      image: img1,
      text: "মৌলভীবাজারে কৃষকদের সহায়তা কর্মসূচি শুরু",
    },
    {
      image: img2,
      text: "মৌলভীবাজারের পর্যটন কেন্দ্রে নতুন উন্নয়ন",
    },
    {
      image: img1,
      text: "মৌলভীবাজারে কৃষকদের সহায়তা কর্মসূচি শুরু",
    },
    {
      image: img2,
      text: "মৌলভীবাজারের পর্যটন কেন্দ্রে নতুন উন্নয়ন",
    },
  ],
  হবিগঞ্জ: [
    {
      image: img3,
      text: "হবিগঞ্জে নতুন রাস্তা নির্মাণের কাজ শুরু",
    },
    {
      image: img4,
      text: "হবিগঞ্জে সুষ্ঠু ভোটের জন্য প্রশাসনিক প্রস্তুতি",
    },
    {
      image: img1,
      text: "হবিগঞ্জের রাস্তায় যানজট মোকাবেলায় নতুন উদ্যোগ",
    },
    {
      image: img4,
      text: "হবিগঞ্জে সুষ্ঠু ভোটের জন্য প্রশাসনিক প্রস্তুতি",
    },
    {
      image: img1,
      text: "হবিগঞ্জের রাস্তায় যানজট মোকাবেলায় নতুন উদ্যোগ",
    },
  ],
};

const Districts = () => {
  const [selectedCity, setSelectedCity] = useState("সুনামগঞ্জ");
  const [news, setNews] = useState(cityNews["সুনামগঞ্জ"]);

  // Handle city selection
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setNews(cityNews[city]); // Update news based on selected city
  };

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-center text-xl font-bold mb-4">
        আপনার শহর পছন্দ করুন
      </h2>

      {/* Dropdown for selecting city */}
      <div className="mb-6 text-center">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="p-2 rounded border border-gray-300"
        >
          <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
          <option value="মৌলভীবাজার">মৌলভীবাজার</option>
          <option value="হবিগঞ্জ">হবিগঞ্জ</option>
        </select>
      </div>

      {/* Displaying news for selected city */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((newsItem, idx) => (
          <div key={idx} className="bg-white border shadow-md rounded-md p-4">
            <img
              src={newsItem.image}
              alt={newsItem.text}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg">{newsItem.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;
