import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Layer, Color, Path, Point, Rectangle, Size, Tool, Raster} from "paper";
import * as paper from 'paper';
import {ToastController} from "@ionic/angular";

@Component({
  templateUrl: './paperjs.component.html',
  styleUrls: ['./paperjs.component.scss'],
})
export class PaperjsComponent implements OnInit, AfterViewInit, OnChanges {

  layers: any = [];
  @ViewChild('canvas') canvas: ElementRef;
  isModalOpen = false;
  shape: string;

  svgColor:string;
  editMode:boolean=false;
  shapeName: string = '';
  shapeType: string = '';
  shapeColor: string = '';
  shapeX: number = 0;
  shapeY: number = 0;
  shapeRadius: number = 0;
  shapeWidth: number = 0;
  shapeHeight: number = 0;
  valid: boolean = false;
  isItemModalOpen: boolean = false;
  itemColor:string=''
  svgItem:any;

  constructor(public toastController: ToastController) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    // console.log(this.canvas.nativeElement);

    const colors = ['red', 'green', 'blue', 'yellow', 'pink']
    paper.setup(this.canvas.nativeElement);
    const image = new Raster('https://www.grundriss-butler.de/img/grundrissdesigns/modern_e8e2d3.jpg')
    image.name = 'image'
    const rect = new Rectangle(new Point(20, 20), new Size(60, 60))
    const path = new Path.Rectangle(rect);
    path.fillColor = new Color('red')
    let layer = new paper.Layer()
    layer.name = 'L1'
    this.layers.push(layer)

    const circle = new Path.Circle({
      center: {x: 50, y: 50},
      radius: 40,
      fillColor: 'green',
    })
    paper.view.onFrame = function (event) {
      // path.rotate(20)
    }

    layer = new paper.Layer()
    this.svgItem = paper.project.importSVG('<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 23h2v1h-20v-1h2v-23h16v23zm-1-22h-14v22h14l-10-1.954v-18.015l10-2.031zm-7 11h-2v1h2v-1z"/></svg>')
    this.svgItem.position = this.svgItem.position.add(new Point(10,10));
    this.svgItem.name = 'door'
    this.svgItem.scale(4)
    layer.name = 'L2'
    this.layers.push(layer)
    const circle2 = new Path.Circle({
      center: {x: 100, y: 100},
      radius: 50,
      fillColor: 'pink',
    })

    // paper.view.onResize = function (event) {
    // }

    const hitOptions = {
      segments: true,
      stroke: true,
      fill: true,
      tolerance: 5
    };
    let current = null;
    let segment = null;
    const tool = new Tool();

    let lastMousePoint;
    tool.onMouseDown = event => {
      const res = paper.project.hitTest(event.point, hitOptions)
      lastMousePoint = event.point
      if (res) {
        current = res.item;
      }
      paper.project.activeLayer.selected = false
      this.layers.forEach(el => el.selected = false)
      if(event.item.name === 'door'){
        if(!this.editMode){
          this.isItemModalOpen = true
        }else{
          event.item.selected = true;
        }
      }else if (event.item && event.item.name !== 'image') {
        event.item.selected = true
      }
    }

    tool.onMouseDrag = event => {
      if (current && current.selected) {
        current.position = current.position.add(event.delta)
      }else{
        // The first lastMousePoint comes from onMouseDown.
        const lastViewCenter = paper.view.center;
        paper.view.center = paper.view.center.add(lastMousePoint.subtract(event.point));
        lastMousePoint = event.point.add(paper.view.center.subtract(lastViewCenter));
      }
    }
  }

  randomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  zoomin(event: import('hammerjs').HammerInput) {
    paper.view.zoom *= 1.01
  }

  zoomout(event: import('hammerjs').HammerInput) {
    paper.view.zoom *= 0.99;
  }

  test(event: import('hammerjs').HammerInput) {
    this.toastController.create({
      position: 'bottom',
      duration: 1000,
      message: event.name
    })
  }

  layerChange(event: any) {
    const layer = event.detail.value;
    switch (layer) {
      case 'L1':
        this.layers.forEach(el => {
          if (el.name === 'L1') {
            el.addTo(paper.project)
          } else {
            el.remove()
          }
        })
        break;
      case 'L2':
        this.layers.forEach(el => {
          if (el.name === 'L2') {
            el.addTo(paper.project)
          } else {
            el.remove()
          }
        })
        break;
      case 'ALL':
        this.layers.forEach(el => el.addTo(paper.project))
    }
  }

  setShape(event: any) {
    this.shape = event.detail.value;
  }

  addShape(event: MouseEvent) {
    console.log(
      this.shapeName,
      this.shapeX,
      this.shapeY,
      this.shapeWidth,
      this.shapeHeight,
      this.shapeRadius,
      this.shapeColor
    )

    if (!(
      this.shapeName.trim() !== '' &&
      this.shapeColor.trim() !== '' &&
      this.shapeType.trim() !== '' &&
      (
        (this.shapeRadius > 0) ||
        (
          (this.shapeWidth > 0) &&
          (this.shapeHeight > 0)
        )
      )
    )) {
      this.toastController.create({
        message: 'input values not valid',
        position: 'bottom',
        duration: 2000
      })
      return
    }


    if (this.shapeType === 'circle') {
      const circle = new Path.Circle({
        center: {x: this.shapeX, y: this.shapeY},
        radius: this.shapeRadius,
        fillColor: this.shapeColor
      })
    } else if (this.shapeType === 'rectangle') {
      const rect = new Path.Rectangle({
        point: [this.shapeX, this.shapeY],
        size: [this.shapeWidth, this.shapeHeight],
        fillColor: this.shapeColor
      })
    }

    this.isModalOpen = false
    this.valid = false

    this.shapeName = ''
    this.shapeX = 0
    this.shapeY = 0;
    this.shapeWidth = 0
    this.shapeHeight = 0
    this.shapeRadius = 0
    this.shapeColor = ''
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeColor($event: MouseEvent) {
     this.svgItem.fillColor = this.itemColor;
     this.isItemModalOpen= false
  }
}
