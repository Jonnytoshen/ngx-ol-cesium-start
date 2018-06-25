import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import OLCesium from 'ol-cesium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('map') map: ElementRef;

  constructor() {}

  ngOnInit() {

    const map = new Map({
      target: this.map.nativeElement,
      view: new View({
        center: [0, 0],
        zoom: 3
      }),
      controls: [],
      layers: [
        new Tile({
          source: new OSM()
        })
      ]
    });

    const ol3D = new OLCesium({ map });

    ol3D.setEnabled(true);

    const scene = ol3D.getCesiumScene();

    scene.skyBox = new Cesium.SkyBox({
      sources: {
        positiveX : '/assets/images/skyBox/tycho2t3_80_px.jpg',
        negativeX : '/assets/images/skyBox/tycho2t3_80_nx.jpg',
        positiveY : '/assets/images/skyBox/tycho2t3_80_py.jpg',
        negativeY : '/assets/images/skyBox/tycho2t3_80_ny.jpg',
        positiveZ : '/assets/images/skyBox/tycho2t3_80_pz.jpg',
        negativeZ : '/assets/images/skyBox/tycho2t3_80_nz.jpg'
      }
    });

  }

}
