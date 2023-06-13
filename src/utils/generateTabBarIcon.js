const generateTabBarIcon = (route) => {
  switch (route) {
    case "SetsStack":
      return "grid";
    case "CardsStack":
      return "tablet-portrait";
    case "CollectionStack":
      return "person";
    default:
      return "skull-outline";
  }
};

export default generateTabBarIcon