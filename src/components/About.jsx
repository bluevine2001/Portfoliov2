import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          dolore delectus doloribus tempora non ut inventore quod autem,
          incidunt, quaerat et cupiditate nesciunt ea unde sapiente nihil
          consequuntur animi minus quia aliquid praesentium fugiat. Similique
          laboriosam beatae repellendus aliquid, sapiente ullam repudiandae
          doloribus officia fugit eum veritatis sunt qui nam.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          dolore delectus doloribus tempora non ut inventore quod autem,
          incidunt, quaerat et cupiditate nesciunt ea unde sapiente nihil
          consequuntur animi minus quia aliquid praesentium fugiat. Similique
          laboriosam beatae repellendus aliquid, sapiente ullam repudiandae
          doloribus officia fugit eum veritatis sunt qui nam.
        </p>
      </div>
    </div>
  );
};

export default About;
