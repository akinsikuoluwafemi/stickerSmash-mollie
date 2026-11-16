# StickerSmash

A cross-platform photo sticker app built with [Expo](https://expo.dev) and React Native, following the official [Expo tutorial](https://docs.expo.dev/tutorial/introduction/). Pick a photo from your library and decorate it with emoji stickers.

Built with Expo SDK 58, Expo Router (native tabs) and `@expo/ui`, which renders native SwiftUI controls on iOS and Jetpack Compose on Android.

## Get started

```bash
npm install
npx expo start
```

Then open the app in one of these:

- **Expo Go**: scan the QR code with your phone camera
- **iOS Simulator**: press `i`
- **Web**: press `w`

## Development builds

The app has three variants, set by `APP_VARIANT` in [`app.config.js`](app.config.js). Each has its own bundle ID, so they can be installed side by side.

| Variant | Bundle ID | EAS profile |
| --- | --- | --- |
| Development | `com.femiii.StickerSmash.dev` | `development`, `ios-simulator` |
| Preview | `com.femiii.StickerSmash.preview` | `preview` |
| Production | `com.femiii.StickerSmash` | `production` |

```bash
# Build a development client for the iOS Simulator
eas build --platform ios --profile ios-simulator

# Start the dev server for the development build
npm run dev
```

Installing builds on a physical iPhone requires an Apple Developer Program membership.

## Project structure

```
src/
  app/              Routes (Expo Router)
    (tabs)/         Home and About tabs
  components/       Shared components, with .ios / .android variants
assets/images/      App icons, background and sticker images
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the dev server |
| `npm run dev` | Start the dev server for the development build |
| `npm run lint` | Lint with ESLint |
| `npx tsc --noEmit` | Typecheck |
