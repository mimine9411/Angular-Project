import { Component, Input, OnInit } from '@angular/core';
import {appareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService:appareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    return this.appareilStatus === 'allumé' ? 'green' : 'red';
  }

  onSwitchOn() {
    this.appareilService.switchOn(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOff(this.indexOfAppareil);
  }
}

