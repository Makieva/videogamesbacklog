import React, { useEffect, useState } from "react";
import "./Home.css";
import CategButton from "./components/CategButton";
import Cards from "./components/Cards";

const Home = () => {
    return (
        <>
        <section>
            <h1>Page d'Accueil</h1>
        </section>
        <section className="sectionCards">
            <CategButton></CategButton>
            <Cards></Cards>
        </section>
        </>
    )
};
export default Home;
