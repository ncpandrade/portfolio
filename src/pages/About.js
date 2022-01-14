import React from 'react';
import useWindowDimensions from "../components/hooks/getWindowDimensions";

function About() {

  const { width } = useWindowDimensions();

  return (
    <div className="w-full min-h-screen bg-middle-blue-green">
        <div className="absolute w-full h-screen flex justify-center">
    <div className="self-center">
        <p className="font-semibold font-dancing text-5xl leading-none"> Hi, </p>
        <p className="font-Dancing text-6xl"> I am Nadine </p>
    </div>
    <div className="mt-2 self-center">
        <p className="text-xl font-serif font-semibold tracking-wider uppercase"> FullStack Web Developer</p>
        <p className="text-gray-600 text-lg font-semibold text-justify"> based in the DMV area, USA </p>
    </div>
    <div className='mt-8 self-center px-4 text-lg font-semibold tracking-wider text-center'>
      <p> I am passionate about creating beautiful fullstack applications, while learning new technologies. </p>
    </div>
</div>
</div>

  );
}

export default About;