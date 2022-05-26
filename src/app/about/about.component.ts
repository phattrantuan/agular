import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = '';
  public password ='';
  constructor() { }

  ngOnInit(): void {
  }
public onSubmit(){
  console.log('alo alo');
  console.log(this.name, this.password);
}
}
