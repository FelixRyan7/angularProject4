import { Component, EventEmitter, OnInit } from '@angular/core';
import {DatosPlayersService} from '../service/datos-players.service';
import { CommonModule } from '@angular/common';
import { Player } from '../model/player';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NameFilterPipe} from '../pipe/text-filter.pipe';
import { DetailComponentComponent } from '../detail-component/detail-component.component';
import { CreatePlayerComponent } from '../create-player/create-player.component';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [RouterModule,CommonModule, DetailComponentComponent, FormsModule, NameFilterPipe, CreatePlayerComponent],

  templateUrl: './players-component.component.html',
  styleUrl: './players-component.component.css'
})


export class PlayersComponentComponent implements OnInit{
  players: any = [];
  player: any;
  filterSearch ='';
  opcion='Nombre';
  opcion2='Todos';
  rerender: any = true;
  playerId: any = null;
  mensaje: string = '';

  constructor (private datosPlayerService:DatosPlayersService){}

 modalOpenCrear = false;

  ngOnInit():void{
      this.datosPlayerService.getPlayers().subscribe((data: any[]) => {
        this.players = data;
      });
  }

  getPlayers(): void {
      this.players=this.datosPlayerService.getPlayers();
  }

  setPlayer(id: String) {
    console.log("click");
    this.rerender=false;
    this.datosPlayerService.getPlayerById( id ).subscribe( player => {
      this.player = player;
    });
    setTimeout(() => this.rerender = true, 500);
  }

  removePlayer(id: String) {
    this.datosPlayerService.deletePlayer( id );
    this.mensaje = 'El jugador ha sido eliminado exitosamente.';
    setTimeout(() => {
      
      
      this.mensaje = '';
      
    }, 2500);
  }

  openModalCrear() {
  console.log("abrir modal");
  
    this.modalOpenCrear = true; // Abre el modal
    const modal = document.querySelector('.modalCrear');
    if (modal){
      modal.classList.add('d-block');
      
    }
  };

  
}
