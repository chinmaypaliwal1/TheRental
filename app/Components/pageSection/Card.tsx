import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface CardProp {
  title: string | null;
  pay: string | null;
  imgUrl: string | StaticImageData | null; // Allow both string and StaticImageData
}

const Card: React.FC<CardProp> = ({
  title,
  pay,
  imgUrl,
}) => {

  
    return (
      <li className="mb-12 m-10 text-center">
        <div className="group relative pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {imgUrl && (
            <Image
              className="m-auto z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 mb-4 lg:mb-0"
              src={imgUrl}
              alt={title || "Image"}
              width={200}
              height={200}
            />
          )}
  
          <div className="mt-8 ">
            <h3 className="font-medium leading-snug text-slate-200 text-lg mb-2">
              <Link
                href={`/cards/${encodeURIComponent(title || "detail")}`}
                aria-label={title || ""}
                className="inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              >
                {title}
              </Link>
            </h3>
            {pay && (
              <p className="mt-2 text-sm leading-normal text-slate-300 bold">
                Rate:{pay}
              </p>
            )}
            <button className=" mt-4 bg-green-500 w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200">
               Book Now
            </button>
          
          </div>
        </div>
      </li>
    );
  };

export default Card;

// interface SkillProp {
//   skills: string[];
// }
// const SkillList: React.FC<SkillProp> = ({ skills }) => {
//   return (
//     <ul className="mt-2 flex flex-wrap">
//       {skills.map((item) => (
//         <li className="mr-1.5 mt-2" key={item}>
//           <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
//             {item}
//           </span>
//         </li>
//       ))}
//     </ul>
//   );
// };
