import React, { useState } from "react";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    host: "",
    date: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données d'événement au backend ou faire toute autre logique nécessaire ici
    console.log("Données d'événement soumises :", eventData);
    // Réinitialiser les champs après la soumission
    setEventData({
      title: "",
      host: "",
      date: "",
      location: "",
      price: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6">Créer un Evénement</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="m-3">
            <label htmlFor="title" className="font-semibold">Titre :</label>
            <input
              type="text"
              id="title"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg p-2"
              placeholder="Titre de l'événement"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="host" className="font-semibold">Organisateur :</label>
            <input
              type="text"
              id="host"
              name="host"
              value={eventData.host}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg p-2"
              placeholder="Nom de l'organisateur"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="date" className="font-semibold">Date et heure :</label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="location" className="font-semibold">Lieu :</label>
            <input
              type="text"
              id="location"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg p-2"
              placeholder="Lieu de l'événement"
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="price" className="font-semibold">Prix :</label>
            <input
              type="text"
              id="price"
              name="price"
              value={eventData.price}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg p-2"
              placeholder="Prix de l'événement"
              required
            />
          </div>
        </div>
        <div className="m-3">
          <label htmlFor="description" className="font-semibold">Description :</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full mt-2 border border-gray-300 rounded-lg p-2 resize-none"
            placeholder="Description de l'événement"
            required
          />
        </div>
        <div className="m-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Créer l'événement
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
