import { useState, useEffect } from "react";
// import { fetchRecentlyAddedCards, fetchNewTCGSets } from "../services/api"; // Import the API service functions

const HomeViewModel = () => {
  const [recentlyAddedCards, setRecentlyAddedCards] = useState([]);
  const [newTCGSets, setNewTCGSets] = useState([]);

  //   useEffect(() => {
  //     // Fetch recently added cards
  //     fetchRecentlyAddedCards()
  //       .then((cards) => setRecentlyAddedCards(cards))
  //       .catch((error) =>
  //         console.log("Error fetching recently added cards:", error)
  //       );

  //     // Fetch new Pokémon TCG sets
  //     fetchNewTCGSets()
  //       .then((sets) => setNewTCGSets(sets))
  //       .catch((error) => console.log("Error fetching new TCG sets:", error));
  //   }, []);

  return { recentlyAddedCards, newTCGSets };
};

export default HomeViewModel;
