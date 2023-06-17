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
import TypeFilter from "../reusables/TypeFilter";

const windowWidth = Dimensions.get("window").width;

const SetDetailView = ({ set, cards, loading, navigation }) => {
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

  if (!set & cards.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const ListHeader = () => (
    <View>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: set?.images?.logo }}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* <Text style={styles.setName}>{set?.name}</Text>
        <Text style={styles.series}>{set?.series}</Text> */}
      </View>
      {/* <TypeFilter selectedTypes={[]} onSelectType={(type) => console.log('type', type)} /> */}
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.cardsTitleContainer}>
          <Text style={styles.cardsTitle}>Set Cards</Text>
          <Text style={styles.cardsTitle}>{`Total: ${cards.length}`}</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={cards}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={renderCardItem}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.cardsContainer}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
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
    paddingHorizontal: 24,
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

export default SetDetailView;
