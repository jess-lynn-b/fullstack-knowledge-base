import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native are also options
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement')element: {type: string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  Constructor() {
    console.log('constructor called!');
  }
  ngOnChanges (changes: SimpleChanges){
    console.log('ngOnChanges called!');
  }
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content:' + this.header.nativeElement.textContent);//Can't see it
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent); //Can't see it
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);// Now we can see it
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content:' + this.header.nativeElement.textContent);// Now we see it
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
 }

