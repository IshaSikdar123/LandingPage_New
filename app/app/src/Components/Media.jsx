import Marquee from "@/components/magicui/marquee";

import twitter from '@/assets/twitter.png';
import fb from '@/assets/fb.png';
import insta from '@/assets/insta.png';
import linkedin from '@/assets/linkedin.png';
import whatsapp from '@/assets/whatsapp.png';

const reviews = [
  { img: twitter, link: "https://twitter.com" },
  { img: fb, link: "https://facebook.com" },
  { img: insta, link: "https://instagram.com" },
  { img: linkedin, link: "https://linkedin.com" },
  { img: whatsapp, link: "https://web.whatsapp.com" }
];

const ReviewCard = ({ img, link }) => {
  return (
    <div className="min-w-screen-2xl flex-shrink-0 p-16 -mt-14 bg-black">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img alt="Review" src={img} className="cursor-pointer" />
      </a>
    </div>
  );
};

const firstRow = reviews.slice(0, reviews.length / 2);

export function Media() {
  return (
    <div className="relative flex w-full h-20 flex-col items-center justify-center overflow-hidden bg-black">
      <Marquee pauseOnHover className="[--duration:2s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

export default Media;
