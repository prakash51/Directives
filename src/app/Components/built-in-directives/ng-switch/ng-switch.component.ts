import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  num:number;
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.num=params['num'];
    });
  }

}
