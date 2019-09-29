import { Input, Renderer2 } from '@angular/core';
import { TableComponent } from './table/table.component';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Namproject';
  // @ViewChild("mylbl")labelview: ElementRef;
  // @ViewChild("inputph")inpphone: ElementRef;
  // @ViewChild("btnsave")btnsave: ElementRef;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  onClick() {
    // this.labelview.nativeElement.innerHTML = "";
    // this.renderer.setStyle(this.inpphone.nativeElement, 'visibility', 'visible');
  }

 
  ngAfterViewInit(){

    // console.log(this.labelview);
    // this.labelview.nativeElement.innerHTML = "Hello Angular 8!";

  
}


}