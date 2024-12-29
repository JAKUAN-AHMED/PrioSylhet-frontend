import React, { useState } from "react";
import img1 from "../../assets/dryunush.jpeg"; // Replace with your news images
import img2 from "../../assets/saudi-arab-bus.jpg";
import img3 from "../../assets/palestanian-war.jpg";
import img4 from "../../assets/ukraine-russia-war.jpeg";

// Sample news data for each category
const newsData = {
  জাতীয়: [
    {
      image: img1,
      heading: "বাংলাদেশে নতুন উন্নয়ন প্রকল্পের সূচনা",
      description:
        "বাংলাদেশে নতুন প্রকল্প শুরু হতে যাচ্ছে, যা দেশের উন্নয়নে ব্যাপক ভূমিকা রাখতে পারে। এর মধ্যে থাকবে নতুন রাস্তা নির্মাণ, স্বাস্থ্য ব্যবস্থার উন্নয়ন, এবং শিক্ষাক্ষেত্রে বিভিন্ন সংস্কার।",
    },
    {
      image: img2,
      heading: "বিপদে পড়া নদীর তীরবর্তী গ্রামগুলোর সাহায্য",
      description:
        "বাংলাদেশের নদী তীরবর্তী গ্রামগুলোতে বন্যা পরিস্থিতি দিন দিন খারাপ হচ্ছে। সরকার ইতোমধ্যে জরুরি ত্রাণ পাঠিয়েছে এবং স্থানীয় প্রশাসন দুর্গত এলাকার জন্য বিশেষ তৎপরতা শুরু করেছে।",
    },
  ],
  আন্তর্জাতিক: [
    {
      image: img3,
      heading: "ফিলিস্তিনে চলমান যুদ্ধ পরিস্থিতি",
      description:
        "ফিলিস্তিনের গাজা অঞ্চলে যুদ্ধের তীব্রতা বৃদ্ধি পাচ্ছে, যেখানে আন্তর্জাতিক সম্প্রদায় মীমাংসার জন্য বিভিন্ন প্রস্তাব গ্রহণ করেছে। এই সংকটের সমাধান সবার কাছে এখন একটি গুরুত্বপূর্ণ ইস্যু।",
    },
    {
      image: img4,
      heading: "ইউক্রেন-রাশিয়া যুদ্ধ: পরবর্তী পদক্ষেপ",
      description:
        "ইউক্রেন এবং রাশিয়ার মধ্যে যুদ্ধ এখনো চলছে, এবং আন্তর্জাতিক মহল পরিস্থিতি পর্যবেক্ষণ করছে। এতে ইউরোপীয় দেশগুলোর নিরাপত্তা ব্যবস্থা নিয়ে অনেক উদ্বেগ সৃষ্টি হয়েছে।",
    },
  ],
  রাজনীতি: [
    {
      image: img1,
      heading: "বাংলাদেশে নির্বাচনী প্রচারণা শুরু",
      description:
        "বাংলাদেশে আগামী সংসদ নির্বাচন ঘিরে রাজনৈতিক প্রচারণা শুরু হয়েছে। দেশের বিভিন্ন অঞ্চলে দলের সভা ও জনসভার আয়োজন করা হয়েছে, যেখানে নির্বাচনী ইস্যু নিয়ে আলোচনা হচ্ছে।",
    },
    {
      image: img2,
      heading: "রাজনৈতিক দলগুলোর নতুন জোট",
      description:
        "বাংলাদেশের প্রধান রাজনৈতিক দলগুলো নতুন জোট গঠন করছে। এই জোটের লক্ষ্য হল একসাথে কাজ করে দেশের উন্নয়নে গতি আনা। তবে এতে বিরোধী পক্ষের মধ্যে কিছু টানাপোড়েন তৈরি হয়েছে।",
    },
  ],
};

const InsideOutSideNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("জাতীয়");
  const [news, setNews] = useState(newsData["জাতীয়"]);

  // Handle tab click
  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setNews(newsData[category]);
  };

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-center text-xl font-bold mb-4">নিউজ ক্যাটেগরি</h2>

      {/* Tab navigation */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleTabClick("জাতীয়")}
          className={`p-2 mx-2 rounded ${
            selectedCategory === "জাতীয়" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          জাতীয়
        </button>
        <button
          onClick={() => handleTabClick("আন্তর্জাতিক")}
          className={`p-2 mx-2 rounded ${
            selectedCategory === "আন্তর্জাতিক"
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          আন্তর্জাতিক
        </button>
        <button
          onClick={() => handleTabClick("রাজনীতি")}
          className={`p-2 mx-2 rounded ${
            selectedCategory === "রাজনীতি"
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          রাজনীতি
        </button>
      </div>

      {/* Display news for selected category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((newsItem, idx) => (
          <div key={idx} className="bg-white border shadow-md rounded-md p-4">
            <img
              src={newsItem.image}
              alt={newsItem.heading}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg">{newsItem.heading}</h3>
            <p className="text-sm text-gray-700 mt-2">{newsItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsideOutSideNews;
