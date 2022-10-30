import { Component, OnInit } from '@angular/core';
import { Combos } from 'src/app/interfaces/combos.interface';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css'],
})
export class CombosComponent implements OnInit {
  combos: Combos[];
  imgCombo: string;

  constructor(private combosService: ComboService) {
    this.combos = [];
    this.imgCombo = '/assets/img/combos/imgCombo.png';
  }

  ngOnInit(): void {
    this.combosService.buscarCombos().subscribe(data =>{
      this.combos = data;
      console.log(this.combos)
    });
  }
}
