import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer bg-neutral text-neutral-content p-10 max-w-7xl mx-auto">
        <aside>
          <img
            className="w-20 h-20 border rounded-md"
            src="/src/assets/logo image.jpg"
            alt=""
          />
          <p>
            © স্বত্ব প্রিয় সি‌লেট ২০২৪-২০২৫
            <br />
            সম্পাদক: ইয়াহয়া মারুফ
            <br />
            প্রকাশক : ফয়সল আহমদ চৌধুরী। খয়রুন ভবন (নিচ তলা), মিরবক্সটুলা ,
            সি‌লেট-৩১০০।
            <br />
            ইমেইল: priosylhetonline@gmail.com / priosylhet@gmail.com
            <br />
            ফোন : ০৮২১ ৭১৯৪৪২।
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white">সামাজিক মাধ্যম</h6>
          <div className="grid grid-flow-col mb-20">
            <a>
              <FaFacebook className="w-10 h-8"></FaFacebook>
            </a>
            <a>
              <FaLinkedin className="w-10 h-8"></FaLinkedin>
            </a>
            <a>
              <FaInstagram className="w-10 h-8"></FaInstagram>
            </a>
          </div>
          <div>
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                প্রিয় সিলেট
              </p>
            </aside>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;