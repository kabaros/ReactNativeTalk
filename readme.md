# React Native: Intro to Layout and Styling

These are the notes accompanying my talk about React Native at BarcelonaJS (November 2019).

## Who am I

Mozafar

- Twitter [@kabaros](https://twitter.com/kabaros/) (Politics > Tech)
- Work at Glovo/Barcelona since September 2019 **<- [Hiring!](https://glovoapp.com/en/jobs)**
- [MigraCode Barcelona](https://migracode.eu) **<- Check them out!**
  - Previously Volunteer/co-founder of CodeYourFuture Glasgow
- My commercial React Native experiences: [Kindaba](https://kindaba.com/),
  [Finmo](https://finmo.co.uk/), [Dawa](https://play.google.com/store/apps/details?id=com.nyala.dawa&hl=en_US), Madrasa (under construction)

# Why React Native?

- It is React
  - _Learn once, Write anywhere_
  - all our knowledge of building components, state management, testing applies
- Performance (and native feel)
  - The Native, the JS and the bridge
  - Read about [Hermes](https://engineering.fb.com/android/hermes/) - the new JS engine optimised for RN.
  - Read this [blog post](https://engineering.fb.com/android/divthee-into-react-native-performance/) for an overview of RN architecture and the performance tweaks added.
- Development experience
  - [Fast Refresh](https://facebook.github.io/react-native/blog/2019/09/18/version-0.61) (live reload + hot reload)
  - Debug with Chrome Dev Tools
- Layout with familiar technology (for web devs)
- OTA updates (ex-codepush, appcenter)
- It's not only startups and small companies using it
  - https://facebook.github.io/react-native/showcase.html
  - The usecase from [Discord](https://blog.discordapp.com/why-discord-is-sticking-with-react-native-ccc34be0d427) provides a great overview. [UberEats](https://eng.uber.com/ubereats-react-native/) is also interesting.

# Why not React Native?

- It is React
  - If you haven't used React, then it is not necessarily easier
- It is _Learn once, Write anywhere_ not _Write once, run everywhere_
- Performance
  - It is still not native
  - Long lists can become an issue if you don't take care
- Navigation/Routing
  - [React Navigation](https://reactnavigation.org/) vs [React Native Navigation](https://wix.github.io/react-native-navigation/#/) vs [React Router](https://reacttraining.com/react-router/native/guides/quick-start) vs ...
  - It's important because Navigation (and animation through screens) is the most observable symptom when performance decreases
  - (I still don't have answers on this one)
- Getting Started: Expo vs CRNA vs react-native
  - tldr; just use [React Native CLI](https://facebook.github.io/react-native/docs/getting-started)
    - `npx react-native init BarcelonaJS`
    - `cd BarcelonaJS` and `npx react-native run-anroid` (or `npx react-native run-ios`)
    - Check out the new [React Native Doctor](https://facebook.github.io/react-native/blog/2019/11/18/react-native-doctor) - a tool to help you with setting iOS and android dev
  - (opinion) The documentation for [Getting Started](https://facebook.github.io/react-native/docs/getting-started) as it implies that Expo is the best way to Get Started. While Expo is indeed quick to get going, you will hit its limit too soon.
  - You can play with [Snack](https://snack.expo.io/) - a CodePen-like tool for React Native - to quickly get a feel of building apps with RN and test them on your phone.
  - For your real app, do check [Ignite](https://github.com/infinitered/ignite) at least for ideas on how to structure a big app.
- Linking native libraries (when it goes wrong)

# Layout in React Native

- Yoga is an open-source, cross-platform layout library that implements Flexbox.
  - Flexbox (with few differences)
- Expressive layout library, not implementing all of CSS.
  - No support for styling properties that have no impact on layout
- RTL is first-class citizen
- Play on https://yogalayout.com/playground

# Styling in React Native

- All of the core components accept a prop named `style`
- You can create styles in three ways: Inline styles, JS objects, or using `StyleSheet.create`
- All dimensions in React Native are unitless, and represent density-independent pixels.

  - This [blog post](https://blog.fluidui.com/designing-for-mobile-101-pixels-points-and-resolutions/) has a general useful explanation of pixels, points and resolutions

- All text has to be inside a <Text /> component
- Style inheritance is limited to text subtrees (no cascade)
- You can pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

# Scaling Styles

- Use `StyleSheet.create`
  - `StyleSheet.create` optimises memory allocation of style objects and their transfer between the Native <> JS bridge
- Don't overuse overriding styles with arrays.
- (Opinion): Keep the styles with the component. Don't separate in `component.style.js` file.
- Create a component "CustomText" that encapsulates Text and use this component across your app
  - Same for ScreenView (a top-level wrapper around View to use in different Screens)
  - Even when you use a component Library like [React Native Elements](https://react-native-elements.github.io/react-native-elements/) or [Native Base](https://nativebase.io/). It is worth it to wrap the Library's `Text` component and use the wrapper
- Theming techniques
  - Abstract your Fonts, Metrics, Colors in shared modules to start with. Don't litter the components for a lot of magic numbers for styling.
  - Look at [Ignite](https://github.com/infinitered/ignite-andross/tree/master/boilerplate/App/Themes) for inspiration about what should go there in these "theme" files.
  - Components' libraries such as [React Native Elements](https://react-native-elements.github.io/react-native-elements/docs/customization.html) have more sophisticated theming. Check it out for ideas.
- Scaling font sizes
  - Use a scaling function
  - The idea is implemented in this [library](https://github.com/knowbody/react-native-text) (but it's simple enough to just do it yourself)
- Android vs iOS
  - Use [Platform.select](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module)
  - Use `component.android.js` and `component.ios.js` if differences are more significant than a small style change
- [Styled Components in React Native](https://www.styled-components.com/docs/basics#react-native)
