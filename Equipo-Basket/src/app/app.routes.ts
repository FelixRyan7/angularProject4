import { Routes } from '@angular/router';
import { PlayersComponentComponent } from './players-component/players-component.component';
import { CreatePlayerComponent } from './create-player/create-player.component';

export const routes: Routes = [
                                {path: '', component: PlayersComponentComponent},
                                {path: 'add-player', component: CreatePlayerComponent},
                              ];