import Orientation from "react-native-orientation";

async function fetchMovie(files) {
  try {
    const url = `https://archive.org${files}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    const video = await responseJson.result.find(
      item =>
        item.name &&
        item.name.match(
          /([a-zA-Z0-9\s_\\.\-\(\):])+(.mp4|.mpg|.mpeg|.ogg|.avi)$/gi
        )
    );
    const slug = files.replace("/metadata/", "").replace("files", "");
    const finalMovie = `https://archive.org/download/${slug}${video.name}`;
    Orientation.lockToLandscape();
    console.log(finalMovie);

    return finalMovie;
  } catch (error) {
    console.error(error);
    Orientation.lockToPortrait();
  }
}

export { fetchMovie };
