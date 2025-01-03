// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Logo } from "./logo";

// export function Footer() {
//   const solutions = [
//     { title: "Source Code", href: "#" },
//     { title: "Cloud Platform", href: "#" },
//     { title: "Consulting", href: "#" },
//   ];

//   const resources = [
//     { title: "Documentation", href: "#" },
//     { title: "API Reference", href: "#" },
//     { title: "Community", href: "#" },
//   ];

//   const aboutfrozen = [
//     { title: "About Us", href: "#" },
//     { title: "Roadmap", href: "#" },
//     { title: "Contact", href: "#" },
//     { title: "Legal", href: "#" },
//   ];

//   const getstarted = [
//     { title: "Sign Up", href: "#" },
//     { title: "Pricing", href: "#" },
//     { title: "Demonstration", href: "#" },
//   ];

//   return (
//     <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
//       <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
//         <div>
//           <div className="mr-0 md:mr-4 md:flex mb-4">
//             <Logo />
//           </div>
//           <div className="mt-2 ml-2">
//             &copy; copyright Frozen 2024. All rights reserved.
//           </div>
//         </div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
//           <div className="flex justify-center space-y-4 flex-col w-full">
//             <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
//               Solutions
//             </p>
//             <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
//               {solutions.map((solution, idx) => (
//                 <li key={"solutions" + idx} className="list-none">
//                   <Link
//                     className="transition-colors hover:text-text-neutral-800"
//                     href={solution.href}
//                   >
//                     {solution.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center space-y-4 flex-col">
//             <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
//               Resources
//             </p>
//             <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
//               {resources.map((resource, idx) => (
//                 <li key={"social" + idx} className="list-none">
//                   <Link
//                     className="transition-colors hover:text-text-neutral-800"
//                     href={resource.href}
//                   >
//                     {resource.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center space-y-4 flex-col">
//             <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
//               About
//             </p>
//             <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
//               {aboutfrozen.map((about, idx) => (
//                 <li key={"aboutfrozen" + idx} className="list-none">
//                   <Link
//                     className="transition-colors hover:text-text-neutral-800"
//                     href={about.href}
//                   >
//                     {about.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center space-y-4 flex-col">
//             <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
//               Get Started
//             </p>
//             <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
//               {getstarted.map((start, idx) => (
//                 <li key={"getstarted" + idx} className="list-none">
//                   <Link
//                     className="transition-colors hover:text-text-neutral-800"
//                     href={start.href}
//                   >
//                     {start.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* <p className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
//         Frozen
//       </p> */}
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { menuData } from "@/constant/homePage";

export function Footer() {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>
          <div className="mt-2 ml-2">
            &copy; copyright Frozen 2024. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          {Object.entries(menuData).map(([category, links]) => (
            <div key={category} className="flex justify-center space-y-4 flex-col w-full">
              <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                {category}
              </p>
              <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                {links.map((link, idx) => (
                  <li key={`${category}-${idx}`} className="list-none">
                    <Link
                      className="transition-colors hover:text-text-neutral-800"
                      href={link.url || "#"}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}