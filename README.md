React Native ART Demo

![React Native ART Demo Screen Capture](https://raw.githubusercontent.com/traviskn/reactnativeartdemo/master/ReactNativeART.gif)

Inspired by this tutorial:
http://browniefed.com/blog/getting-react-art-running-on-react-native/

And the react-art VectorWidget example:
https://github.com/reactjs/react-art/tree/master/examples/vector-widget

For iOS you will need to manually install the ART libraries.

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native/Libraries/ART/` and add `ART.xcodeproj`
3. In XCode, in the project navigator, select your project. Under the `Libraries` directory select the dropdown for `ART.xcodeproj`.  You should see a subfolder called `Products` that contains `libArt.a`. Add `libArt.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`

For Android you will not need to perform any manual steps.  However, there is an
existing issue where performing fast animations or transformations with ART will
cause your Android app to crash.  You can track the progress of this issue here:
https://github.com/facebook/react-native/issues/6760

For now I have disabled the rotation animation on Android.

Run the app on iOS to see a rotating React.js logo.  You can press and release
the logo to cause the rotation to "spring" forward.

Run the app on Android to see a static version of the logo without animations.
