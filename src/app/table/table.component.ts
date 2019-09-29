
import { OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Table[];
  title = 'Namproject';
  @ViewChild("tbl")tblview: ElementRef;
  @ViewChild("mylblphone")labelview: ElementRef;
  @ViewChild("btnsave")btnsave: ElementRef;
  @ViewChild("btneditph")btneditph: ElementRef;
  @ViewChild("btnokph")btnokph: ElementRef;


  @ViewChild("mylblem")labelviewem: ElementRef;
  @ViewChild("btnsaveem")btnsaveem: ElementRef;
  @ViewChild("btneditem")btneditem: ElementRef;
  @ViewChild("btnokem")btnokem: ElementRef;

  constructor(private tservice: TableService,
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
    });
  }

    onClick() {
      this.labelview.nativeElement.value="";
      this.labelview.nativeElement.readOnly = false;
      this.renderer.setStyle(this.btneditph.nativeElement, 'visibility', 'hidden');
      this.labelview.nativeElement.style.backgroundColor = 'white';
      this.labelview.nativeElement.style.border = "thin solid black"
      this.renderer.setStyle(this.btneditph.nativeElement, 'visibility', 'hidden');
      this.renderer.setStyle(this.btnokph.nativeElement, 'visibility', 'visible');
      
    }
  
    onClickok() {
      this.labelview.nativeElement.readOnly = true;
      this.renderer.setStyle(this.btneditph.nativeElement, 'visibility', 'visible');
      this.labelview.nativeElement.style.backgroundColor = '#FAFAFA';
      this.labelview.nativeElement.style.border = "none"
      this.renderer.setStyle(this.btneditph.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.btnokph.nativeElement, 'visibility', 'hidden');
      
    }

    // ---------------------------------

    onClickem() {
      this.labelviewem.nativeElement.value="";
      this.labelviewem.nativeElement.readOnly = false;
      this.renderer.setStyle(this.btneditem.nativeElement, 'visibility', 'hidden');
      this.labelviewem.nativeElement.style.backgroundColor = 'white';
      this.labelviewem.nativeElement.style.border = "thin solid black"
      this.renderer.setStyle(this.btneditem.nativeElement, 'visibility', 'hidden');
      this.renderer.setStyle(this.btnokem.nativeElement, 'visibility', 'visible');
      
    }
  
    onClickokem() {
      this.labelviewem.nativeElement.readOnly = true;
      this.renderer.setStyle(this.btneditem.nativeElement, 'visibility', 'visible');
      this.labelviewem.nativeElement.style.backgroundColor = '#FAFAFA';
      this.labelviewem.nativeElement.style.border = "none"
      this.renderer.setStyle(this.btneditem.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.btnokem.nativeElement, 'visibility', 'hidden');
      
    }

    onsendmail()
    {        
    var email = this.labelviewem.nativeElement.value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

   
    alert('Valid Email Address.Please Wait Sending Email ......');
    location.href='mailto:'+this.labelviewem.nativeElement.value+'?subject=Receipt Invoice&body='+"Hi";
    return true;
    }

    

    onsendsms()

    {
      var reg = /^\+?\d{10}$/;
      var phoneno = this.labelview.nativeElement.value;
      if(reg.test(phoneno) == false)
        {
          alert('Sorry. Please Enter a Valid Phone Number');
          return false;
        }
        
        alert("Hi Dear SMS sending via web to your phone number requires a paid Twilio Account or an AngularFirebase account.I do not have paid membership of these accounts.If an account is created for me I will implement the code and send it again. Thankyou very much.");
        return true;
    }


 
   
    ngAfterViewInit(){
  
      console.log(this.labelview);
      this.labelview.nativeElement.value = "8879374104";
      this.labelviewem.nativeElement.value = "urvi@acegasanalysers.com";
  
    
  }

  

  
  

}