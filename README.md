React Native ART Demo

![React Native ART Demo Screen Capture](https://raw.githubusercontent.com/traviskn/reactnativeartdemo/master/ReactNativeART.gif)

Inspired by this tutorial:
http://browniefed.com/blog/getting-react-art-running-on-react-native/

And the react-art VectorWidget example:
https://github.com/reactjs/react-art/tree/master/examples/vector-widget

Clone this project, run `npm i`, and then use `react-native run-ios` or `react-native run-android` to see the demo.

There is existing issue where performing fast animations or transformations with ART will
cause your Android app to crash.  You can track the progress of this issue here:
https://github.com/facebook/react-native/issues/6760

For now I have disabled the rotation animation on Android.

Run the app on iOS to see a rotating React.js logo.  You can press and release
the logo to cause the rotation to "spring" forward.

Run the app on Android to see a static version of the logo without animations.
