import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

const CollectionView = ({ 
    data, 
    isOpen,
    handleToggle,
    navigation 
  }) => {

  const ListHeader = () => (
    <View
      style={{
        paddingHorizontal: 16,
        backgroundColor: "#f0f0f0",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginBottom: 24,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 16 }}>
          My Collection
        </Text>
        <Ionicons
          onPress={handleToggle}
          name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
          size={24}
        />
      </View>

      {isOpen && (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{fontWeight: 600}}>Cards in collection: {data.length}</Text>
          {/* TODO: add filters */}
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ marginRight: 8 }}>All</Text>
            <Text style={{ marginRight: 8 }}>Favorites</Text>
            <Text style={{ marginRight: 8 }}>Wanted</Text>
          </View> */}
        </View>
      )}
    </View>
  );

  const EmptyState = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No Cards in your collection.</Text>
    </View>
  );
 
  const renderCardItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardItemContainer}
        onPress={() => {
          navigation.navigate("CardDetail", { card: item });
        }}
      >
        <Image
          source={{ uri: item.images.small }}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={renderCardItem}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.cardsContainer}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListEmptyComponent={EmptyState}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.4,
    marginBottom: 8,
  },
  setName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  series: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  infoContainer: {
    marginBottom: 16,
  },
  totalCards: {
    fontSize: 16,
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 4,
  },
  legalities: {
    fontSize: 16,
    marginBottom: 4,
  },
  cardsTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardsContainer: {
    flexGrow: 1,
  },
  cardItemContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  cardImage: {
    width: windowWidth * 0.39,
    height: windowWidth * 0.39,
  },
  cardName: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CollectionView