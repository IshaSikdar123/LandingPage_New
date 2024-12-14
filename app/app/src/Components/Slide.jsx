import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import back from '@/assets/back.mp4';

const reviews = [
  {
    name: "Shivani",
    
    body: "It was a pleasure interacting with you, thank you for conducting the interview, and I appreciate your evaluation of my interview. Unfortunately, I am not selected for the position at his company due to two main reasons: my inability to clearly explain the content of my resume and my insufficient project explanation. From my perspective, the interview went very well. He not only provided feedback after the interview but also offered valuable insights on how I can improve in specific areas. His assessment covered various aspects of the interview, including behavioral, technical, coding, case studies, and general resume-based questions. Thank you, Satvik, for your time and effort in helping us all. I am grateful for whatever you are doing.",
    showStars: true,
  },
  {
    name: "Swati",
    
    body: "I had a mock interview today And I could not thank more for how much insightful the interview and feedback was. The mock interview covered technical round, case study and the elaborated feedback and how to work on your gaps. Thank you #satvik on lending a helping hand beyond the expectation. Your feedback has given me confidence and clarity to work on my weak areas. Will surely recommend to those who are willing to prepare for interview to go through the mock interview with data sense once.",
    showStars: true,
  },
  {
    name: "Supriya",
   
    body: "The workshop was really great. Hands-on experience and step-by-step explanation of code made it more clear and interesting. Also the examples given for clearing the new concepts were industry relevant which gives us the real-time data-driven applications of NLP in real world. Thank you Data Sense for clearing all the doubts. Looking forward to attend more such workshops in future.",
    showStars: true,
  },
  {
    name: "Lavanya",
   
    body: "I wanted to take a moment to express my gratitude to Data Sense for conducting an incredibly systematic and thorough mock interview today. His feedback was precise and highly insightful, offering valuable guidance that I believe will greatly enhance my preparation. I highly recommend that others take advantage of this opportunity. Interviewer's approach not only highlights areas for improvement but also boosts confidence through constructive criticism. Thank you, Data Sense, for your time and effort in helping us all become better prepared. Your dedication to supporting us is truly appreciated.",
    showStars: true,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const MARQUEE_DURATION = {
  base: "[--duration:40s]",
  sm: "[--duration:30s]",
  md: "[--duration:25s]",
  lg: "[--duration:20s]",
};

const ReviewCard = ({ name, username, body, showStars }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4 bg-zinc-800",
        "w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw]",
        "transition-all duration-300 hover:shadow-xl"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-xs sm:text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white opacity-75 flex items-center">
            {showStars && (
              <span className="flex text-yellow-400"> 
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
              </span>
            )}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs sm:text-sm text-white line-clamp-6 sm:line-clamp-none">
        {body}
      </blockquote>
    </figure>
  );
};

export function Slide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          src={back}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full min-h-screen py-8 sm:py-12 lg:py-16 flex flex-col justify-center gap-6 sm:gap-8 lg:gap-12">
        {/* Title Section */}
        <div className="text-white flex flex-col w-full text-center px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Success Stories
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
            Hear from our satisfied students
          </h2>
          <button
            className="mt-4 sm:mt-6 lg:mt-8 mx-auto px-4 py-2 w-auto sm:w-48 md:w-56 lg:w-64 text-sm sm:text-base lg:text-lg text-black bg-white font-semibold rounded-md shadow-lg transition-all duration-300 hover:bg-gray-100"
          >
            Read More <span className="arrow ml-1">&gt;</span>
          </button>
        </div>

        {/* Marquee Sections */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {/* First Row */}
          <Marquee className={cn(MARQUEE_DURATION.base, MARQUEE_DURATION.sm, MARQUEE_DURATION.md, MARQUEE_DURATION.lg)}>
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Second Row */}
          <Marquee
            reverse
            className={cn(MARQUEE_DURATION.base, MARQUEE_DURATION.sm, MARQUEE_DURATION.md, MARQUEE_DURATION.lg)}
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Slide;
