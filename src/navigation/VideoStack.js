import { createStackNavigator, createAppContainer } from "react-navigation";
import VideoScreen from "~/src/screens/VideoPlayer";

const VideoStack = createStackNavigator(
  {
    Video: VideoScreen
  },
  {
    headerMode: "none"
  }
);

export default VideoStack;
