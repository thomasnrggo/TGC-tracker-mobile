import { useState, useEffect, useMemo } from "react";
import { useModel as useSetsModel } from "../../models/setsModel";

const useHomeViewModel = () => {
  const [recentlyAddedCards, setRecentlyAddedCards] = useState([]);
  const [TGCSets, setTGCSets] = useState([]);
  const { get } = useSetsModel()

  useEffect(() => {
    get()
    .then(res => {
      setTGCSets(res?.data)
    })
    .catch(error => console.log('Error fetching TCG sets:', error))
  }, [])

  const sortByReleaseDate = (sets) => {
    return sets.sort((a, b) => {
      const dateA = new Date(a.releaseDate.replace(/\//g, "-"));
      const dateB = new Date(b.releaseDate.replace(/\//g, "-"));
      return dateB - dateA;
    });
  };

  const recentTGCSets = useMemo(() => {
    const filteredSets = TGCSets.filter(
      (set) => set.releaseDate.slice(0, 4) >= "2022"
    )
    const sortedSets = sortByReleaseDate(filteredSets);
    return sortedSets;
  }, [TGCSets]);

  return { recentlyAddedCards, TGCSets: recentTGCSets };
};

export default useHomeViewModel;
