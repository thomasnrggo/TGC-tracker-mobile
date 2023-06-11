import { useEffect, useState } from "react";
import { useModel as useSetModel } from "../../models/setsModel";
import { useModel as useCardsModel } from "../../models/ cardsModel";

const SetDetailViewModel = (setId) => {
  const [set, setSet] = useState(null);
  const [cards, setCards] = useState([]);
  const { getById } = useSetModel();
  const { getBySetId, loading} = useCardsModel();

  useEffect(() => {
    getById(setId)
    .then(res => {
      setSet(res);
    })
    getBySetId(setId)
    .then((res) => {
      setCards(res);
    });
  }, [setId]);

  return {
    set,
    cards,
    loading,
  };
};

export default SetDetailViewModel;
