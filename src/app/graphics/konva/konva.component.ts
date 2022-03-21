import {AfterViewInit, Component, ElementRef, HostListener, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import Konva from 'konva'

@Component({
  selector: 'app-konva',
  templateUrl: './konva.component.html',
  styleUrls: ['./konva.component.scss'],
})
export class KonvaComponent implements OnInit, AfterViewInit{

  @ViewChild('canvas') canvasContaienr: ElementRef;

  stage: Konva.Stage;
  layer: Konva.Layer;
  rect: Konva.Rect;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.stage = new Konva.Stage({
      container: this.canvasContaienr.nativeElement,
      width: 400,
      height:400
    });
    this.layer = new Konva.Layer();
    this.rect = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });
    this.layer.add(this.rect);
    this.stage.add(this.layer);
    this.stage.draggable(true)

  }



  // @HostListener('window:resize')
  // fitCanvas(){
    // console.log(this.canvasContaienr.nativeElement.offsetHeight)
    // console.log(this.canvasContaienr.nativeElement.offsetWidth)
    // this.stage.width(this.canvasContaienr.nativeElement.offsetWidth)
    // this.stage.height(this.canvasContaienr.nativeElement.offsetHeight)
  // }

  ionViewDidEnter(){
    console.log(this.canvasContaienr.nativeElement.offsetHeight)
    console.log(this.canvasContaienr.nativeElement.offsetWidth)
    this.stage.width(this.canvasContaienr.nativeElement.offsetWidth)
    this.stage.height(this.canvasContaienr.nativeElement.offsetHeight)
  }


  randomInt(max: number) {
    // return Math.floor(Math.random() * max);
  }

  zoomin(event: import('hammerjs').HammerInput) {
    // paper.view.zoom *= 1.01
  }

  zoomout(event: import('hammerjs').HammerInput) {
    // paper.view.zoom *= 0.99;
  }

  test(event: import('hammerjs').HammerInput) {
    // this.toastController.create({
    //   position: 'bottom',
    //   duration: 1000,
    //   message: event.name
    // })
  }

  layerChange(event: any) {
    // const layer = event.detail.value;
    // switch (layer) {
    //   case 'L1':
    //     this.layers.forEach(el => {
    //       if (el.name === 'L1') {
    //         el.addTo(paper.project)
    //       } else {
    //         el.remove()
    //       }
    //     })
    //     break;
    //   case 'L2':
    //     this.layers.forEach(el => {
    //       if (el.name === 'L2') {
    //         el.addTo(paper.project)
    //       } else {
    //         el.remove()
    //       }
    //     })
    //     break;
    //   case 'ALL':
    //     this.layers.forEach(el => el.addTo(paper.project))
    // }
  }

  setShape(event: any) {
    // this.shape = event.detail.value;
  }

  addShape(event: MouseEvent) {
    // console.log(
    //   this.shapeName,
    //   this.shapeX,
    //   this.shapeY,
    //   this.shapeWidth,
    //   this.shapeHeight,
    //   this.shapeRadius,
    //   this.shapeColor
    // )
    //
    // if (!(
    //   this.shapeName.trim() !== '' &&
    //   this.shapeColor.trim() !== '' &&
    //   this.shapeType.trim() !== '' &&
    //   (
    //     (this.shapeRadius > 0) ||
    //     (
    //       (this.shapeWidth > 0) &&
    //       (this.shapeHeight > 0)
    //     )
    //   )
    // )) {
    //   this.toastController.create({
    //     message: 'input values not valid',
    //     position: 'bottom',
    //     duration: 2000
    //   })
    //   return
    // }
    //
    //
    // if (this.shapeType === 'circle') {
    //   const circle = new Path.Circle({
    //     center: {x: this.shapeX, y: this.shapeY},
    //     radius: this.shapeRadius,
    //     fillColor: this.shapeColor
    //   })
    // } else if (this.shapeType === 'rectangle') {
    //   const rect = new Path.Rectangle({
    //     point: [this.shapeX, this.shapeY],
    //     size: [this.shapeWidth, this.shapeHeight],
    //     fillColor: this.shapeColor
    //   })
    // }
    //
    // this.isModalOpen = false
    // this.valid = false
    //
    // this.shapeName = ''
    // this.shapeX = 0
    // this.shapeY = 0;
    // this.shapeWidth = 0
    // this.shapeHeight = 0
    // this.shapeRadius = 0
    // this.shapeColor = ''
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeColor($event: MouseEvent) {
    // this.svgItem.fillColor = this.itemColor;
    // this.isItemModalOpen= false
  }

}
