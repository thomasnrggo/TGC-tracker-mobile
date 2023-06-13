const generateTabBarIcon = (route) => {
  switch (route) {
    case "Sets":
      return "grid";
    case "Cards":
      return "tablet-portrait";
    case "Collection":
      return "person";
    default:
      return "skull-outline";
  }
};

export default generateTabBarIcon