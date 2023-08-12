import React, { useState } from "react";

const MyEvents = () => {
  // Exemple de données d'événements (vous pouvez remplacer cela par vos données réelles)
  const eventsData = [
    {
      id: 1,
      title: "Événement 1",
      date: "Date de l'événement 1",
      location: "Lieu de l'événement 1",
      attendees: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "123456789",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          phoneNumber: "987654321",
        },
        // Ajoutez plus de participants ici
      ],
    },
    {
      id: 2,
      title: "Événement 2",
      date: "Date de l'événement 2",
      location: "Lieu de l'événement 2",
      attendees: [
        {
          id: 3,
          firstName: "Alice",
          lastName: "Johnson",
          phoneNumber: "456789123",
        },
      ],
    },
    {
      id: 3,
      title: "Événement 3",
      date: "Date de l'événement 3",
      location: "Lieu de l'événement 3",
      attendees: [
        {
          id: 3,
          firstName: "Alice",
          lastName: "Johnson",
          phoneNumber: "456789123",
        },
      ],
    },
    // Ajoutez plus d'événements ici
  ];

  // État local pour stocker les événements
  const [events, setEvents] = useState(eventsData);

  // État local pour stocker l'ID de l'événement en cours de modification
  const [selectedEventId, setSelectedEventId] = useState(null);

  // État local pour gérer la pagination des participants
  const [currentPage, setCurrentPage] = useState(1);
  const participantsPerPage = 10; // Nombre de participants à afficher par page

  // Fonction pour mettre à jour les informations de l'événement
  const updateEvent = (eventId, newData) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, ...newData } : event
      )
    );
    setSelectedEventId(null); // Réinitialiser l'ID de l'événement sélectionné après la mise à jour
  };

  // Fonction pour annuler la modification de l'événement
  const cancelUpdate = () => {
    setSelectedEventId(null);
  };

  // Index du dernier participant de la page en cours
  const indexOfLastParticipant = currentPage * participantsPerPage;
  // Index du premier participant de la page en cours
  const indexOfFirstParticipant = indexOfLastParticipant - participantsPerPage;
  // Participants à afficher dans la page en cours
  const currentParticipants = events.flatMap((event) => event.attendees).slice(indexOfFirstParticipant, indexOfLastParticipant);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Mes Événements</h2>
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-500 italic">Date: {event.date}</p>
          <p className="text-gray-500 italic">Lieu: {event.location}</p>
          <h4 className="text-md font-semibold mt-4 mb-2">Personnes inscrites à l'événement :</h4>
          <ul className="text-gray-700">
            {currentParticipants.map((attendee) => (
              <li key={attendee.id}>
                {attendee.firstName} {attendee.lastName} ({attendee.phoneNumber})
              </li>
            ))}
          </ul>
          {/* Bouton pour modifier l'événement */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={() => setSelectedEventId(event.id)} // Sélectionner l'ID de l'événement pour la modification
          >
            Modifier l'événement
          </button>
          {/* Formulaire de modification de l'événement */}
          {selectedEventId === event.id && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Modifier l'événement</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Titre</label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full text-black sm:text-sm border-gray-300 rounded-md"
                    value={event.title}
                    onChange={(e) =>
                      setEvents((prevEvents) =>
                        prevEvents.map((ev) =>
                          ev.id === event.id ? { ...ev, title: e.target.value } : ev
                        )
                      )
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={event.date}
                    onChange={(e) =>
                      setEvents((prevEvents) =>
                        prevEvents.map((ev) =>
                          ev.id === event.id ? { ...ev, date: e.target.value } : ev
                        )
                      )
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Lieu</label>
                  <input
                    type="text"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={event.location}
                    onChange={(e) =>
                      setEvents((prevEvents) =>
                        prevEvents.map((ev) =>
                          ev.id === event.id ? { ...ev, location: e.target.value } : ev
                        )
                      )
                    }
                  />
                </div>
                {/* Ajoutez ici d'autres champs pour les autres informations de l'événement */}
                <div className="flex mt-4">
                  <button
                    type="submit"
                    className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => updateEvent(event.id, event)}
                  >
                    Enregistrer les modifications
                  </button>
                  {/* Bouton pour annuler la modification */}
                  <button
                    type="button"
                    className="flex justify-center items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    onClick={cancelUpdate}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <ul className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(events.flatMap((event) => event.attendees).length / participantsPerPage) }, (_, index) => (
          <li key={index}>
            <button
              className={`mx-1 px-4 py-2 rounded ${
                index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyEvents;
