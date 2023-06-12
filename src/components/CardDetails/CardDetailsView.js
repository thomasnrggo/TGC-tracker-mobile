import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const CardDetail = ({
  card,
  handleAddOwned,
  handleAddToWishlist,
  handleSaveImage,
}) => {

  if (!card) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: card.images.large }}
        style={styles.cardImage}
        resizeMode="contain"
      />

      <View style={styles.infoContainer}>
        <InfoRow title="Artist" value={card.artist} />
        <InfoRow title="Set" value={card.set.name} />
        <InfoRow title="Type" value={card.types && card.types.length ? card?.types[0] : card.subtypes[0]} />
        <InfoRow title="Supertype" value={card.supertype} />
        <InfoRow title="Rarity" value={card.rarity} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddOwned}>
          <Text style={styles.buttonText}>Add as Owned</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddToWishlist}>
          <Text style={styles.buttonText}>Add to Wishlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

    const InfoRow = ({ title, value }) => {
        return (
            <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>{title}</Text>
            <Text style={styles.infoValue}>{value}</Text>
            </View>
        );
    };

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      cardImage: {
        marginTop: 24,
        width: screenWidth,
        height: screenHeight / 2,
      },
      infoContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
      },
      infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      },
      infoTitle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      infoValue: {
        fontSize: 16,
        color: "#666",
      },
      buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 16,
      },
      button: {
        backgroundColor: "#6a51ae",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 8,
        width: "100%",
        maxWidth: 400,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
      },
    });

export default CardDetail;
