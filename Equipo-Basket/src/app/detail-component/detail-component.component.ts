import { Component, Input, OnInit } from '@angular/core';
import { DatosPlayersService } from '../service/datos-players.service';
import { CommonModule } from '@angular/common';
import { MediaComponentComponent } from '../media-component/media-component.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';






@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [MediaComponentComponent, CommonModule, EditPlayerComponent],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})
export class DetailComponentComponent {
  @Input() player: any;
  modalOpen = false;
  
  

  constructor(private datosPlayersService: DatosPlayersService) {}

  
  
  openModal(id: string) {
    this.datosPlayersService.getPlayerById(id).subscribe(player => {
      this.player = player;
     
      this.modalOpen = true; // Abre el modal
      const modal = document.querySelector('.modalEditar');
      if (modal){
        modal.classList.add('d-block');
      }
    });
  }


}


