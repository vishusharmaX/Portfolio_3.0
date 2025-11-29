import React, { useState } from "react";

const CategoryIcons = {
  "Full-Stack Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5Z"></path>
    </svg>
  ),

  "Frontend Engineering & UI/UX": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998Z"></path>
    </svg>
  ),

  "Backend Development & APIs": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 5H21V19H3V5ZM5 7V17H19V7H5Z"></path>
    </svg>
  ),

  "Databases & DevOps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C7 2 3 3.79 3 6V18C3 20.21 7 22 12 22C17 22 21 20.21 21 18V6C21 3.79 17 2 12 2ZM12 4C16.42 4 19 5.5 19 6C19 6.5 16.42 8 12 8C7.58 8 5 6.5 5 6C5 5.5 7.58 4 12 4ZM5 10C6.69 11.05 9.53 11.57 12 11.57C14.47 11.57 17.31 11.05 19 10V12C19 12.5 16.42 14 12 14C7.58 14 5 12.5 5 12V10ZM5 16C6.69 17.05 9.53 17.57 12 17.57C14.47 17.57 17.31 17.05 19 16V18C19 18.5 16.42 20 12 20C7.58 20 5 18.5 5 18V16Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Full-Stack Web Development": [
      "Building scalable full-stack apps with React.js & Next.js",
      "Creating responsive SPA and dashboard applications",
      "Developing production-grade platforms like Spott, EarPluse & NextGenCareer",
      "Version control using Git & GitHub",
    ],

    "Frontend Engineering & UI/UX": [
      "Modern UI engineering using React, Next.js & TailwindCSS",
      "Animations with Framer Motion",
      "Pixel-perfect UI with Figma prototyping",
      "Optimizing UX for conversion & engagement",
    ],

    "Backend Development & APIs": [
      "Building REST APIs using Node.js & Express",
      "User authentication (JWT, Clerk Auth)",
      "Real-time features using Convex",
      "Payment integrations (Stripe)",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="block truncate text-[var(--white)] text-lg">
                    {category}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <span className="pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
