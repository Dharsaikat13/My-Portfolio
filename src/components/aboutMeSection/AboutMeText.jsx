import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-orange mb-10">About Me</h2>
      <p>
        I’m Saikat Dhar, I’m a passionate and results-driven software engineer.I have a strong foundation 
        in list a few key technologies like JavaScript, Python, Java, React, etc.
        I specialize in React and front-end development.
        When I’m not coding, you’ll find me experimenting with new technologies, 
        contributing to open-source projects, or sharing knowledge with the tech community. 
        My goal is to build software that not only meets user needs but also pushes the 
        boundaries of what’s possible.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-orange transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
