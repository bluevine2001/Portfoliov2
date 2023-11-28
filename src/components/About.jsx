import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:mt-20">
          Ma passion pour le développement web a commencé dès le lycée, en
          classe de 1ère STI2D, où j'ai découvert le monde fascinant du code
          avec le C/C++. Ce qui m'a captivé, c'est la capacité de transformer
          mes idées en réalités tangibles, de créer de toutes pièces et de
          relever des défis de plus en plus complexes. Mon parcours s'est
          enrichi lors de mon BTS SNIR, où j'ai approfondi mes connaissances en
          programmation orientée objet, C++, PHP/JS, HTML/CSS, et infrastructure
          réseau, notamment avec le CCNA1 de Cisco. Cette expérience m'a conduit
          à embrasser pleinement le développement web, me lançant dans un
          apprentissage autodidacte rigoureux à travers des plateformes comme
          OpenClassrooms, Udemy et YouTube.
        </p>

        <br />

        <p className="text-xl">
          Actuellement en alternance en tant que Webmaster dans une agence
          immobilière, je travaille sur un CRM immobilier interne, mettant en
          pratique mes compétences en PHP procédural, JS et MySQL. Cette
          expérience pratique, cumulée à ma formation en licence RPI et ma
          première année de mastère, enrichit sans cesse mon expertise. Je suis
          particulièrement fier de mes projets personnels diversifiés, allant de
          la création d'un système de signature électronique en React à la
          réalisation de blogs et de sites e-commerce avec Vue, Laravel, et
          React/Firebase. Ce qui me motive au quotidien, c'est la quête
          constante de l'excellence et le désir de progresser, en m'attaquant à
          des projets de plus en plus ambitieux et en apportant les meilleures
          solutions à des problématiques complexes.
        </p>
      </div>
    </div>
  );
};

export default About;
