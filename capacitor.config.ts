import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AdsUp',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      androidScaleType: 'CENTER_CROP',
      backgroundColor: '#121212',
    },
  },
};

export default config;
