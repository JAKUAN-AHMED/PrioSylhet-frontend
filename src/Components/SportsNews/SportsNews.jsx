import React, { useState } from "react";
import img1 from "../../assets/football.jpg"; // Replace with your images
import img2 from "../../assets/football.jpg";
import img3 from "../../assets/football2.webp";
import img4 from "../../assets/cricket.webp";

// Sample news data for each category under 'খেলা'
const sportsNewsData = {
  ফুটবল: [
    {
      image: img1,
      heading: "ফুটবল বিশ্বকাপে মেসির রেকর্ড ভেঙে দিলেন নেইমার",
      description:
        "নেইমার ফুটবল বিশ্বকাপে এক নতুন ইতিহাস সৃষ্টি করেছেন, যেখানে তিনি মেসির রেকর্ড ভেঙে নতুন এক মাইলফলক অর্জন করেন। দেশের ফুটবলে তার অবদান অসীম।",
    },
    {
      image: img1,
      heading: "ব্রাজিল-আর্জেন্টিনার ম্যাচে তুমুল উত্তেজনা",
      description:
        "ব্রাজিল এবং আর্জেন্টিনার ম্যাচটি ছিল এক তুমুল উত্তেজনার, যেখানে দু'দলই অনেক দারুণ খেলেছে। মেসি এবং নেইমার একে অপরের বিরুদ্ধে প্রতিদ্বন্দ্বিতা করেছেন।",
    },
  ],
  ক্রিকেট: [
    {
      image: img2,
      heading: "বিশ্বকাপে বাংলাদেশের শক্তিশালী পরিসমাপ্তি",
      description:
        "বাংলাদেশ ক্রিকেট দলের বিশ্বকাপ যাত্রা শুরুর প্রথম ম্যাচে দুর্দান্ত পারফরমেন্স করেছে, এবং তাদের জয় নিশ্চিত করেছে। দর্শকরা তাদের খেলোয়াড়দের প্রশংসায় ভাসছে।",
    },
    {
      image: img2,
      heading: "ভারত-বাংলাদেশ ম্যাচে হাড্ডাহাডি লড়াই",
      description:
        "ভারত এবং বাংলাদেশ ক্রিকেট দলের মধ্যে এক গুরুত্বপূর্ণ ম্যাচে উত্তেজনা ছিল তুঙ্গে। পুরো ম্যাচটি ছিল আকর্ষণীয় এবং শেষ মুহূর্ত পর্যন্ত ছিল অনিশ্চিত।",
    },
  ],
  "অন্যান্য খেলা": [
    {
      image: img3,
      heading: "অ্যাথলেটিকস চ্যাম্পিয়নশিপে বাংলাদেশের সাফল্য",
      description:
        "বাংলাদেশের অ্যাথলেটরা আন্তর্জাতিক অ্যাথলেটিকস চ্যাম্পিয়নশিপে একাধিক স্বর্ণপদক অর্জন করেছে। দেশের গর্বের বিষয় হয়ে দাঁড়িয়েছে তাদের সাফল্য।",
    },
    {
      image: img3,
      heading: "টেনিস প্রতিযোগিতায় মীরাবা জয়ী",
      description:
        "টেনিস প্রতিযোগিতায় মীরাবা তার সেরা খেলাটা দেখিয়ে জয়লাভ করেছে। তার খেলাটি দারুণ ছিল এবং এর মাধ্যমে সে দেশের টেনিস জগতে এক নতুন উচ্চতায় পৌঁছেছে।",
    },
  ],
  "স্থানীয় খেলা": [
    {
      image: img4,
      heading: "শহরের ফুটবল লিগে হাড্ডাহাডি লড়াই",
      description:
        "শহরের ফুটবল লিগে স্থানীয় খেলোয়াড়রা শক্তিশালী প্রতিদ্বন্দ্বী হিসেবে উপস্থিত হয়েছে। তাদের খেলায় নতুন প্রজন্মের ফুটবল প্রেমীরা অনেক উৎসাহিত।",
    },
    {
      image: img4,
      heading: "স্থানীয় ক্রিকেট প্রতিযোগিতায় উত্তেজনা",
      description:
        "স্থানীয় ক্রিকেট প্রতিযোগিতার ফাইনাল ম্যাচে দুই দলের মধ্যে ব্যাপক উত্তেজনা ছিল। সমর্থকরা তাদের দলের প্রতি প্রচণ্ড উদ্দীপনা দেখিয়েছে।",
    },
  ],
};

const SportsNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("ফুটবল");
  const [sportsNews, setSportsNews] = useState(sportsNewsData["ফুটবল"]);

  // Handle tab click
  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setSportsNews(sportsNewsData[category]);
  };

  // Related news for the aside section
  const relatedNews = [
    {
      image: img2,
      heading: "বাংলাদেশ ক্রিকেট দলের গুরুত্বপূর্ণ জয়",
    },
    {
      image: img3,
      heading: "নতুন সাফল্য আনার পথে ব্রাজিল",
    },
    {
      image: img1,
      heading: "বিশ্বকাপ ফুটবল: ব্রাজিলের জয়ী মূহুর্ত",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="text-center text-xl font-bold mb-6">খেলা নিউজ</h2>

        {/* Tab navigation for subcategories under 'খেলা' */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => handleTabClick("ফুটবল")}
            className={`p-3 md:mx-3 text-sm md:text-xl font-bangla rounded-lg ${
              selectedCategory === "ফুটবল"
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            ফুটবল
          </button>
          <button
            onClick={() => handleTabClick("ক্রিকেট")}
            className={`p-3 md:mx-3 text-sm font-bangla md:text-xl rounded-lg ${
              selectedCategory === "ক্রিকেট"
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            ক্রিকেট
          </button>
          <button
            onClick={() => handleTabClick("অন্যান্য খেলা")}
            className={`p-3 md:mx-3 rounded-lg  font-bangla text-sm md:text-xl ${
              selectedCategory === "অন্যান্য খেলা"
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            অন্যান্য খেলা
          </button>
          <button
            onClick={() => handleTabClick("স্থানীয় খেলা")}
            className={`p-3 md:mx-3 font-bangla text-sm md:text-xl rounded-lg ${
              selectedCategory === "স্থানীয় খেলা"
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            স্থানীয় খেলা
          </button>
        </div>

        {/* Display news for selected subcategory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sportsNews.map((newsItem, idx) => (
            <div key={idx} className="bg-white border shadow-md rounded-lg p-4">
              <img
                src={newsItem.image}
                alt={newsItem.heading}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg text-gray-800">
                {newsItem.heading}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {newsItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Aside section for related news */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold mb-4">সম্পর্কিত সংবাদ</h3>
        {relatedNews.map((item, idx) => (
          <div key={idx} className="flex mb-4 border rounded shadow-md">
            <img
              src={item.image}
              alt={item.heading}
              className="w-20 h-20 object-cover rounded-lg mr-4"
            />
            <div>
              <h4 className="text-sm font-semibold">{item.heading}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsNews;
