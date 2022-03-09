import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Color, PaperScope, Path, Point, Project, Rectangle, Size, View} from 'paper'
import * as paper from 'paper'

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
  }

  ngAfterViewInit(): void {
    // console.log(this.canvas.nativeElement);
    paper.setup(this.canvas.nativeElement);
    const rect = new Rectangle(new Point(20, 20), new Size(60, 60))
    const path = new Path.Rectangle(rect);
    path.fillColor = new Color('red')
    paper.view.onFrame = function (event){
      // path.rotate(20)
    }

    paper.view.onResize = this.onResize
  }

  onResize(): void{
    console.log('resize event')
  }

}
