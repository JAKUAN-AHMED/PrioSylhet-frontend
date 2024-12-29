import React from 'react';
import img1 from "../../assets/s1.jpg";
import img2 from "../../assets/s2.jpg";
import img3 from "../../assets/s3.jpg";
import img4 from "../../assets/s4.webp";
import img5 from "../../assets/s5.jpg";
import img6 from "../../assets/s6.jpeg";
import { IoIosArrowRoundForward } from 'react-icons/io';


const images = [
  {
    image: img1,
    text: "আকাশ চৌধুরীর সম্পাদনায় প্রকাশিত হলো ‘বিজয় চিরন্তন",
  },
  {
    image: img2,
    text: "সৌদি বিশ্ব বাণিজ্যে নিয়ে আসছে নতুন বাস",
  },
  {
    image: img3,
    text: "বারাকা পাওয়ার লিমিটেডের ১৭তম সাধারণ সভা অনুষ্ঠিত",
  },
  {
    image: img4,
    text: "ইউক্রেন-রাশিয়া যুদ্ধ কোনোভাবেই যেনো থামছে না",
  },
  {
    image: img5,
    text: "শনিবার সিলেটের ২৫ এলাকায় বিদ্যুৎ থাকবে না",
  },
  {
    image: img6,
    text: "সিলেট সীমান্তে ফের খাসিয়ার গুলিতে বাংলাদেশি নিহত",
  },
];

const newsTexts = [
  { text: "ঢাকায় শুরু হলো আন্তর্জাতিক বইমেলা ২০২৪" },
  { text: "স্মার্টফোন বাজারে নতুন মডেল নিয়ে এলো স্যামসাং" },
  { text: "চট্টগ্রামে ৩ দিনব্যাপী প্রযুক্তি মেলা শুরু" },
  { text: "বাংলাদেশ দলের বিপক্ষে দুর্দান্ত জয় পেলো ভারত" },
  { text: "আন্তর্জাতিক নারী দিবস উপলক্ষে বিশেষ আয়োজন চলছে" },
  { text: "পদ্মা সেতুতে আজ থেকে টোল আদায় শুরু" },
  { text: "বন্যার্তদের জন্য ত্রাণ কার্যক্রম শুরু করেছে সরকার" },
  { text: "অর্থনৈতিক উন্নয়নে নতুন কর্মসূচি ঘোষণা" },
  { text: "সিলেট বিমানবন্দরে উড়োজাহাজের জরুরি অবতরণ" },
  { text: "ঢাকা বিশ্ববিদ্যালয়ে রোবটিক্স প্রতিযোগিতা অনুষ্ঠিত" },
  { text: "রাজধানীতে চলছে খাদ্য উৎসব" },
  { text: "বিদ্যুৎ সমস্যার সমাধানে নতুন প্রকল্প হাতে নিয়েছে সরকার" },
  { text: "বাংলাদেশের বিপক্ষে পাকিস্তানের ঐতিহাসিক জয়" },
  { text: "বরিশালে নতুন শিল্পপার্ক উদ্বোধন" },
  { text: "আন্তর্জাতিক পর্যটন মেলায় বাংলাদেশ অংশগ্রহণ করছে" },
  { text: "প্রযুক্তি উন্নয়নে আরও ৫ হাজার কোটি টাকা বরাদ্দ" },
  { text: "দেশজুড়ে শৈত্যপ্রবাহের প্রভাব বৃদ্ধি পাচ্ছে" },
  { text: "বাংলাদেশে প্রথমবারের মতো হাইপারলুপ পরীক্ষামূলক চালু" },
  { text: "জাতীয় বিশ্ববিদ্যালয়ে সেশনজট নিরসনে নতুন সিদ্ধান্ত" },
  { text: "চট্টগ্রামে দেশের প্রথম স্মার্ট হাসপাতাল উদ্বোধন" },
];

const Sylhet = () => {
    return (
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-3">
            <div className="border-indigo-500 border-l-4 rounded shadow-md">
              <h2 className="font-bangla text-3xl text-start font-bold pl-2">
                সিলেট
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {images.map((news, idx) => (
                <div
                  className="w-[300px] h-[350px] border rounded shadow-md bg-base-200 text-center"
                  key={idx}
                >
                  <figure className=" items-center flex justify-center p-2">
                    <img
                      src={news.image}
                      className="w-[300px] h-[250px] bg-center bg-cover"
                      alt=""
                    />
                  </figure>
                  <h2 className="font-bangla text-black text-xl p-1">
                    {news.text}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <div>
              <div className="grid grid-cols-2 border rounded shadow-md h-16 gap-1">
                <button className="text-center bg-gray-400 font-bangla text-xl">
                  সর্বশেষ
                </button>

                <button className="text-center bg-blue-400 text-white font-bangla text-xl">
                  জনপ্রিয়
                </button>
              </div>
              <div className="h-[680px] overflow-y-scroll">
                <div className="grid-cols-1 space-y-4">
                  {newsTexts.map((text, idx) => (
                    <div className="border rounded shadow-md" key={idx}>
                      <p className="flex items-center text-md font-bangla gap-2">
                        <IoIosArrowRoundForward className="text-xl" />{" "}
                        {text.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Sylhet;