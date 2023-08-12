import React, { useState } from "react";

const SearchEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Effectuer une recherche d'événements en utilisant la requête de recherche (searchQuery)
    console.log("Recherche d'événements pour :", searchQuery);
    // Réinitialiser la requête après la recherche
    setSearchQuery("");
    // Remplacer le code ci-dessus par la logique de recherche réelle
    // Vous pouvez utiliser une API pour effectuer la recherche et mettre à jour les résultats ici
    // Pour l'exemple, nous utiliserons des données statiques
    const staticSearchResults = [
      { id: 1, title: "Événement 1", date: "Date de l'événement 1", location: "Lieu de l'événement 1" },
      { id: 2, title: "Événement 2", date: "Date de l'événement 2", location: "Lieu de l'événement 2" },
      { id: 3, title: "Événement 3", date: "Date de l'événement 3", location: "Lieu de l'événement 3" },
      // Ajoutez plus de résultats de recherche ici
    ];
    setSearchResults(staticSearchResults);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Rechercher des événements</h1>
      <form className="flex mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Entrez votre recherche..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Rechercher
        </button>
      </form>
      <div className="space-y-4">
        {searchResults.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-500 italic">Date: {event.date}</p>
            <p className="text-gray-500 italic">Lieu: {event.location}</p>
            {/* Ajoutez ici d'autres informations sur l'événement si nécessaire */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchEvents;
