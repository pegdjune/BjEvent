"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Imgheader1 from "../public/images/header1.jpg";
import Imgheader2 from "../public/images/header2.jpg";
import MyFooter from "./components/Footer";
import BlockEvent from "./components/BlockEvent";
import logo from "../public/images/logo.png";
import event1 from "../public/images/event9.png";
import event2 from "../public/images/event4.png";
import event3 from "../public/images/event3.png";
import OrganizersSection from "./components/OrganizersSection";

export default function Home() {
  const EventList = [
    { title: 'Festchill', events: 'CanalOlympia', image: event1.src },
    { title: 'NBA Final', events: 'Basketball', image: event2.src },
    { title: 'Concerts', events: 'Divertissement', image: event3.src }
  ];

  // Tableau contenant toutes les images du Header
  const headerImages = [Imgheader1, Imgheader2];

  // État pour stocker l'image aléatoire du Header
  const [randomHeaderImage, setRandomHeaderImage] = useState(null);

  // Fonction pour précharger les images
  const preLoadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  // Préchargez les images au chargement de la page
  useEffect(() => {
    preLoadImages([...headerImages, event1.src, event2.src]);
  }, []);

  // Choisissez une image aléatoire pour le Header après le préchargement
  useEffect(() => {
    setRandomHeaderImage(headerImages[Math.floor(Math.random() * headerImages.length)]);
  }, [headerImages]);

  return (
    <>
      <NavBar logoUrl={logo} />
      {randomHeaderImage && <Header urlImg={randomHeaderImage} />}
      {EventList.map((event, index) => (
        <BlockEvent key={index} title={event.title} events={event.events} image={event.image} />
      ))}

      <OrganizersSection />
      <MyFooter settings={EventList} />
    </>
  );
}
