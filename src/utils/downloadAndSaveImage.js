import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { Platform, Alert, PermissionsAndroid } from "react-native";


export const downloadAndSaveImage = async (url, albumName = "TGC tracker") => {
  try {
    if (
      Platform.OS === "android" &&
      !(await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ))
    ) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("Permission denied");
        return;
      }
    }

    const { status } = await MediaLibrary.requestPermissionsAsync();
    console.log("status", status);

    if (status !== "granted") {
      Alert.alert("Permission denied");
      return;
    }

    const { uri } = await FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + "temp_image.png"
    );

    const asset = await MediaLibrary.createAssetAsync(uri);
    if (asset) {
      const album = await MediaLibrary.getAlbumAsync(albumName)

      if(album === null) {
        console.log('Does not exist');
        await MediaLibrary.createAlbumAsync("TGC tracker", asset, false);

      } else {
        console.log("exist");
        await MediaLibrary.addAssetsToAlbumAsync(asset, album, false);
      }
      Alert.alert("Image saved successfully");
    } else {
      Alert.alert("Failed to save image");
    }

    // Cleanup: Delete the temporary image file
    await FileSystem.deleteAsync(uri, { idempotent: true });

  } catch (error) {
    console.error("Error saving image to camera roll:", error);
  }
};
