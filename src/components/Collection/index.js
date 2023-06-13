import CollectionView from "./CollectionView";
import useCollectionViewModel from "./CollectionViewModel";

const CollectionScreen = () => {
    const props = useCollectionViewModel()
    return <CollectionView {...props} />
}

export default CollectionScreen;