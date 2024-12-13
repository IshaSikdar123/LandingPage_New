import Marquee from "@/components/magicui/marquee";
import sql from "@/assets/sql.png";
import tab from "@/assets/tab.png";
import python from "@/assets/python.png";
import powerbi from "@/assets/powerbi.png";
import excel from "@/assets/excel.png";

const reviews = [
  { img: sql },
  { img: tab },  
  { img: python },
  { img: powerbi },
  { img: excel },
];

const ReviewCard = ({ img }) => {
  return (
    <div className="flex-shrink-0 p-4 h-full">
      <img alt="Review" src={img} />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 h-10 bg-customCyan z-0 blur"></div>
      <Marquee className="[--duration:5s] relative z-10">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeDemo;