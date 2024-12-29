import React from 'react';

const AdsSection = () => {
    return (
      <div className="grid grid-cols-2 mt-4 mb-4 border rounded shadow-md gap-4">
        <div className="bg-sky-300 p-2 text-center">
          <marquee
            behavior="scroll"
            direction="left"
            className="font-bangla  font-bold"
          >
            আপনার প্রতিষ্ঠানের বিজ্ঞাপনটি বিশ্বব্যাপী প্রচার করুন
          </marquee>
        </div>
        <div className="bg-sky-300 p-2 text-center font-bangla font-bold">
          <marquee
            behavior="scroll"
            direction="left"
            className="font-bangla  font-bold"
          >
            আপনার প্রতিষ্ঠানের বিজ্ঞাপনটি বিশ্বব্যাপী প্রচার করুন
          </marquee>
        </div>
      </div>
    );
};

export default AdsSection;