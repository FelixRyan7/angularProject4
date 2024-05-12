import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"equipo-basket-frontenders","appId":"1:299055623733:web:e146e82f17c8e006244b7c","databaseURL":"https://equipo-basket-frontenders-default-rtdb.firebaseio.com","storageBucket":"equipo-basket-frontenders.appspot.com","apiKey":"AIzaSyCyqv9eQFHPDp8Svr_3JmBHNHreD_VZ8xM","authDomain":"equipo-basket-frontenders.firebaseapp.com","messagingSenderId":"299055623733"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage()))]
};
