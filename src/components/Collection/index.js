import CollectionView from "./CollectionView";
import useCollectionViewModel from "./CollectionViewModel";

const CollectionScreen = ({ navigation, route }) => {
  const props = useCollectionViewModel(navigation, route);
  return <CollectionView {...props} />;
};

export default CollectionScreen;