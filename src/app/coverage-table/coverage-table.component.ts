import {Component, Input} from '@angular/core';
import {UniPDBData} from './coverage-table.models';

@Component({
  selector: 'app-coverage-table',
  templateUrl: './coverage-table.component.html',
  styleUrls: ['./coverage-table.component.css']
})
export class CoverageTableComponent {

  @Input() data: UniPDBData;
  iconClassMapping: object;
  iconSymbolMapping: object;
  viewLimit: number;
  defaultViewLimit = 6;

  constructor() {
    this.viewLimit = this.defaultViewLimit;

    this.iconClassMapping = {
      'experiments': 'icon icon-generic',
      'complex': 'icon icon-conceptual',
      'nucleicAcids': 'icon icon-conceptual',
      'ligands': 'icon icon-conceptual',
      'literature': 'icon icon-generic',
    };

    this.iconSymbolMapping = {
      'experiments': ';',
      'complex': 'y',
      'nucleicAcids': 'd',
      'ligands': 'b',
      'literature': 'P',
    };
  }

  getClass(icon: any) {
    return this.iconClassMapping[icon['type']];
  }

  getStyle(icon: any) {
    return {
      'background-color': icon['background'],
      'color': '#fff',
      'padding': '2px',
      'margin': '0px 2px 0px 2px',
      'font-size': '150%',
    };
  }

  getSymbol(icon: any) {
    return this.iconSymbolMapping[icon['type']];
  }

  showAll() {
    this.viewLimit = this.data['tracks'][0]['data'].length;
  }

  showLess() {
    this.viewLimit = this.defaultViewLimit;
  }
}
