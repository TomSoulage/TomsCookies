import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

//Components
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component'; 
import { CookiesComponent } from './pages/cookies/cookies.component'; 
import { PanierComponent } from './modules/auth/components/panier/panier.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';

//Angular Material imports
import {MatToolbarModule} from '@angular/material/toolbar' 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Angular Fire module
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    CookiesComponent,
    PanierComponent,
    Erreur404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
