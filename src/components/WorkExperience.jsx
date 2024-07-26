import { BriefcaseIcon } from "@heroicons/react/solid";
import skills from "../data";

export default function WorkExperience() {
  return (
    <section
      id="workexperience"
      className="text-gray-400 bg-gray-700 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <div className="flex flex-wrap justify-evenly -m-4">
            {skills.map((skill, index) => (
              <a key={index} className="sm:w-1/2 w-100 p-4">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-100 hover:opacity-50 rounded-lg h-full">
                  <h2 className="title-font text-lg font-medium text-green-500 mb-3">
                    {skill.jobTitle}
                  </h2>
                  <h3 className="title-font text-lg font-medium text-amber-700 mb-3">
                    {skill.company}
                  </h3>
                  <p>{skill.location}</p>
                  <p>{skill.date}</p>
                  <p>
                    Contact Person: {skill.contactPerson.name} –{" "}
                    {skill.contactPerson.phone}
                  </p>

                  <p>
                    {skill.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
