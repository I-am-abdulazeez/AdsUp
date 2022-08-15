This is an [Ionic 6 app](https://ionicframewrok.com) project bootstrapped with ionic vue

## AdsUp.

An ionic/vue app. An app that allows users to view and post ads

First, run the development server:

```bash
npm run dev
# or
ionic serve
```

This is going to run the app under [http://localhost:8100](http://localhost:8100). Open the link with your browser to see result.

You can start editing by modifying the `src` folder.

To run the dev server with an emulator:

First download and install Android Studio [https://developer.android.com/studio](https://developer.android.com/studio). Please make sure to let android studio download all required plugins and SDK(Software Development Kit) Tools.

Then go to [https://www.oracle.com/java/technologies/javase/jdk16-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk16-archive-downloads.html) to download and install JDK(Java Developemnt Kit) 16 on your machine.

Then:

```bash
npm cap add android / ios
```

To add a platform if it does not exist.

Then: -l=livereload,

```bash
ionic cap run android/ios -l --external
```

To build on android or ios,

```bash
ionic cap build android/ios
```

This will build the project using vue-cli-service build. Then open android studio, Navigate to build tab then Click on Generate Signed Build or APK.
