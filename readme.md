# React Native: Intro to Layout and Styling

# Intro

These are the notes accompanying my talk about React Native at BarcelonaJS (November 2019).

## Who am I

Mozafar

- Twitter [@kabaros](https://twitter.com/kabaros/)
- Work at Glovo/Barcelona since September 2019 **<- [Hiring!](https://glovoapp.com/en/jobs)**
- [MigraCode Barcelona](https://migracode.eu) **<- Check them out!**
  - Previously Volunteer/co-founder of CodeYourFuture Glasgow

## My React Native experiences

Three live app:

- [Kindaba](https://kindaba.com/) - Private social network for your family

- [Finmo](https://finmo.co.uk/) - Your Taxes sorted

- [Dawa](https://play.google.com/store/apps/details?id=com.nyala.dawa&hl=en_US) - Medicine in Sudan

- Madrasa: under construction

# Why React Native?

- It is React
  - _Learn once, Write anywhere_
  - all our knowledge of building components, state management, testing applies
- Performance (and native feel)
  - The Native, the JS and the bridge
  - [Hermes](https://engineering.fb.com/android/hermes/)
- Development experience
  - Fast Refresh (live reload + hot reload)
  - Debug with Chrome Dev Tools
- Layout with familiar technology (for web devs)
- OTA updates (ex-codepush, appcenter)
- It's not only startups and small companies using it
  - https://facebook.github.io/react-native/showcase.html

# Why not React Native?

- It is React
  - If you haven't used React, then it is not necessarily easier
- It is _Learn once, Write anywhere_ not _Write once, run everywhere_
- Performance
  - It is still not native
- Naviation/Routing
- Getting Started: Expo vs CRNA vs react-native
  - The documentation for Getting Started is confusing but just use `react-native CLI`
  - `npx react-native init BarcelonaJS`
  - `cd BarcelonaJS` and `npx react-native run-ios`
  - https://facebook.github.io/react-native/docs/getting-started
  - You play with [Snack](https://snack.expo.io/) - a CodePen-like site for React Native - to quickly get a feel of building apps with RN
- Linking native libraries (when it goes wrong)

# Layout in React Native

- Yoga is an open-source, cross-platform layout library that implements Flexbox.
  - Flexbox (with few differences)
- Expressive layout library, not implementing all of CSS.
  - No support for styling properties that have no impact on layout
- RTL is first-class citizen
- https://yogalayout.com/playground

# Styling in React Native

- Styles are normal JS objects (but use StyleSheet.create)
- All of the core components accept a prop named style
- Style inheritance is limited to text subtrees (no cascade)
  - All text has to be inside a <Text /> component

# Scaling Styles

- Styles are normal JS objects (but use StyleSheet.create)
  - Compose / Override styles with arrays (don't overuse it though)
  - (Opinion): Keep the styles with the component. Don't separate in `component.style.js` file.
- Create a component "CustomText" that encapsulates Text and use this component across your app
  - Same for ScreenView (a top-level wrapper around View to use in different Screens)
  - Even when you use a component Library like [React Native Elements]() or [Native Base]()
- Theming techniques
  - Abstract your Fonts, Metrics, Colors in shared modules.
  - Look at [Ignite](https://github.com/infinitered/ignite-andross/tree/master/boilerplate/App/Themes) for inspiration about what should go there
  - Components' libraries such as [React Native Elements](https://react-native-elements.github.io/react-native-elements/docs/customization.html) have more sophisticated theming. Check it out for ideas.
- Scaling font sizes
  - Use a scaling function
  - The idea is implemented in this [library](https://github.com/knowbody/react-native-text) (but it's simple enough to just do it yourself)
- Android vs iOS
  - Use [Platform.select](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module)
  - Use `component.android.js` and `component.ios.js` if differences are more than just stylistic
- [Styled Components in React Native](https://www.styled-components.com/docs/basics#react-native)

> NOTE: Exercise caution as abusing `StyleSheet.flatten` can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Refering to style objects directly will deprive you of these optimizations.
