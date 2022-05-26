import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public name = "phat";
  public age;
  public vehicles = ['toyota','honda'];
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {
  }
public tangname(){
  this.common.age++;
  this.age++;
}
public Selectverhicle(){
  console.log();
}

}
