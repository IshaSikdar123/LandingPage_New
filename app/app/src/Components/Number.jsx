import Marquee from "@/components/magicui/marquee";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";

const reviews = [
  { img: p1 },
  { img: p2 },
  { img: p3 },
  { img: p4 },
];

const ReviewCard = ({ img }) => {
  return (
    <div className="flex-shrink-0 p-16 h-full">
      <img alt="Review" src={img} />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 h-10 bg-customCyan z-0 blur"></div>
      <Marquee className="[--duration:5s] relative z-10 gap-10">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeDemo;
