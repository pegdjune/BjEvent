import { Card } from "flowbite-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

const LeftComponent = () => {
  return (
    <div className="flex flex-col justify-center mr-2">
      <button className="rounded-full bg-primary">
        <FaArrowLeft className="text-white" />
      </button>
    </div>
  );
};

const RightComponent = () => {
  return (
    <div className="flex flex-col justify-center">
      <button className="rounded-full bg-primary">
        <FaArrowRight className="text-white" />
      </button>
    </div>
  );
};

const BlockEvent = ({ title, events, image }) => {
  function onWheel(apiObj, ev) {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  const eventsData = [
    {
      id: 1,
      title: "Événement 1",
      host: "Nom de l'hôte 1",
      date: "Date et heure de l'événement 1",
      location: "Lieu de l'événement 1",
      price: "Prix de l'événement 1",
      image: "chemin/vers/votre/image1.jpg",
    },
    {
      id: 2,
      title: "Événement 2",
      host: "Nom de l'hôte 2",
      date: "Date et heure de l'événement 2",
      location: "Lieu de l'événement 2",
      price: "Prix de l'événement 2",
      image: "chemin/vers/votre/image2.jpg",
    },
    {
        id: 3,
        title: "Événement 3",
        host: "Nom de l'hôte 3",
        date: "Date et heure de l'événement 3",
        location: "Lieu de l'événement 3",
        price: "Prix de l'événement 3",
        image: "chemin/vers/votre/image3.jpg",
      },
      {
        id: 4,
        title: "Événement 4",
        host: "Nom de l'hôte 4",
        date: "Date et heure de l'événement 4",
        location: "Lieu de l'événement 4",
        price: "Prix de l'événement 4",
        image: "chemin/vers/votre/image4.jpg",
      },
      {
        id: 5,
        title: "Événement 5",
        host: "Nom de l'hôte 5",
        date: "Date et heure de l'événement 5",
        location: "Lieu de l'événement 5",
        price: "Prix de l'événement 5",
        image: "chemin/vers/votre/image5.jpg",
      },
      {
        id: 6,
        title: "Événement 6",
        host: "Nom de l'hôte 6",
        date: "Date et heure de l'événement 6",
        location: "Lieu de l'événement 6",
        price: "Prix de l'événement 6",
        image: "chemin/vers/votre/image6.jpg",
      },
      {
        id: 7,
        title: "Événement 7",
        host: "Nom de l'hôte 7",
        date: "Date et heure de l'événement 7",
        location: "Lieu de l'événement 7",
        price: "Prix de l'événement 7",
        image: "chemin/vers/votre/image7.jpg",
      },
      {
        id: 8,
        title: "Événement 8",
        host: "Nom de l'hôte 8",
        date: "Date et heure de l'événement 8",
        location: "Lieu de l'événement 8",
        price: "Prix de l'événement 8",
        image: "chemin/vers/votre/image8.jpg",
      },
    // Ajoutez plus d'événements ici
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Informations d'événement que vous souhaitez transmettre au modal
  const eventData = {
    title,
    events,
  };

  // Fonction pour gérer l'ouverture du modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour gérer la fermeture du modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Fonction pour gérer la soumission du formulaire dans le modal
  const handleSubmit = (formData) => {
    // Faites ce que vous voulez avec les données soumises par l'utilisateur, par exemple, les envoyer à l'API
    console.log(formData);
  };

  return (
    <section className="my-20">
      <div className="flex justify-between items-center">
        <div className="text-black mx-10 text-3xl font-bold">{title}</div>
        <a
          href=""
          className="flex items-center text-primary font-semibold mx-10 text-xl text-gray-800"
        >
          Voir plus
          <FaAngleRight className="inline" />
        </a>
      </div>
      <div className="p-6">
        <ScrollMenu
          LeftComponent={LeftComponent}
          RightComponent={RightComponent}
          onWheel={onWheel}
        >
          {eventsData.map((event) => (
            <Card
              key={event.id}
              className="w-[260px] h-[550px] mr-3 overflow-hidden"
              style={{ padding: 0 }}
            >
              <div className="w-full h-3/5 overflow-hidden">
                <img
                  src={image}
                  alt={`Image de ${event.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-1">{event.host}</p>
                <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                <p className="text-lg font-bold text-blue-500">{event.price}</p>
              </div>
              <div className="bg-gray-800 rounded-lg text-center w-32 mx-auto">
                <Link href="" className="text-white" onClick={handleOpenModal}>
                  Participer
                </Link>
              </div>
            </Card>
          ))}
        </ScrollMenu>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default BlockEvent;
