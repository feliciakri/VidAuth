import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import AccessPhonePageContainer from '../../containers/AccessPhonePage';
import AccessPhonePageComponent from '../components/AccessPhonePage';

import OTPConfirmationContainer from '../../containers/OTPConfirmation';
import OTPConfirmationComponent from '../components/OTPConfirmation';

import EmailConfirmationContainer from '../../containers/EmailConfirmation';
import EmailConfirmationComponent from '../components/EmailConfirmation';

import PassbioContainer from '../../containers/Passbio';
import PassbioComponent from '../components/Passbio';

import TMDContainer from '../../containers/TMDInformation';
import TMDComponent from '../components/TMDInformation';

import FingerprintSetupContainer from '../../containers/FingerprintSetup';
import FingerprintSetupComponent from '../components/FingerprintSetup';

import SetupPageContainer from '../../containers/SetupPage';
import SetupPageVoiceContainer from '../../containers/SetupPageVoice';
import SetupPagePicContainer from '../../containers/SetupPicturePass';
import SetupPageSecureContainer from '../../containers/SetupSecure';

import SetupPageComponent from '../components/SetupPage';
import SetupPageVoiceComponent from '../components/SetupPageVoice';
import SetupPagePictureComponent from '../components/SetupPagePicture';
import SetupPageSecureComponent from '../components/SetupPageSecure';

import LockContainer from '../../containers/Lock';
import LockComponent from '../components/Lock';
import PicpassComponent from '../components/Picpass';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="accessPhonePage"
            title="ACCESS PHONE PAGE"
            {...DefaultProps.navbarProps}
            component={AccessPhonePageContainer}
            Layout={AccessPhonePageComponent}
          />
          <Scene
            back
            key="otpConfirmation"
            title="OTP CONFIRMATION"
            {...DefaultProps.navbarProps}
            component={OTPConfirmationContainer}
            Layout={OTPConfirmationComponent}
          />
          <Scene
            back
            key="emailConfirmation"
            title="EMAIL CONFIRMATION"
            {...DefaultProps.navbarProps}
            component={EmailConfirmationContainer}
            Layout={EmailConfirmationComponent}
          />
          <Scene
            back
            key="passbio"
            title="PASS BIO"
            {...DefaultProps.navbarProps}
            component={PassbioContainer}
            Layout={PassbioComponent}
          />
          <Scene
            back
            key="fingerprintSetup"
            title="PASS BIO"
            {...DefaultProps.navbarProps}
            component={FingerprintSetupContainer}
            Layout={FingerprintSetupComponent}
          />
          <Scene
            back
            key="setupFacial"
            title="SETUP FACIAL"
            {...DefaultProps.navbarProps}
            component={SetupPageContainer}
            Layout={SetupPageComponent}
          />
          <Scene
            back
            key="setupPageVoice"
            title="SETUP VOICE"
            {...DefaultProps.navbarProps}
            component={SetupPageVoiceContainer}
            Layout={SetupPageVoiceComponent}
          />
          <Scene
            back
            key="setupPagePicture"
            title="SETUP PIC"
            {...DefaultProps.navbarProps}
            component={SetupPagePicContainer}
            Layout={SetupPagePictureComponent}
          />
          <Scene
            back
            key="setupPageSecure"
            title="SETUP SECURE"
            {...DefaultProps.navbarProps}
            component={SetupPageSecureContainer}
            Layout={SetupPageSecureComponent}
          />
          <Scene
            back
            key="tmd"
            title="TMD"
            {...DefaultProps.navbarProps}
            component={TMDContainer}
            Layout={TMDComponent}
          />
          <Scene
            back
            key="picpass"
            title="TMD"
            {...DefaultProps.navbarProps}
            component={LockContainer}
            Layout={PicpassComponent}
          />
          <Scene
            back
            key="lock"
            title="TMD"
            {...DefaultProps.navbarProps}
            component={LockContainer}
            Layout={LockComponent}
          />
    </Scene>
  </Stack>
);

export default Index;
