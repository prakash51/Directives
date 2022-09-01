import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
interface movie {
  id:number,
  title:string
}

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})


export class BuiltInDirectivesComponent implements OnInit,movie {
 public addStyle:boolean=false;
 public styleObject:Record<string,boolean>;
 public currentStyles: Record<string, string>;
 public qData:boolean;
  
 public moviesArr: movie[] = [
    {
      "id": 1,
      "title": "Super Man"
    },
    {
      "id": 2,
      "title": "Spider Man"
    },
    {
      "id": 3,
      "title": "Aladdin"
    }, 
    {
      "id": 4,
      "title": "Downton Abbey"
    }
  ];
  constructor( private activeRouter:ActivatedRoute,private router:Router) {
  }
  id: number;
  title: string;
  
  ngOnInit(): void {
    this.activeRouter.params.subscribe(x=>{
      this.qData=x['details'];
      console.log(this.qData);
    })
    
  }
  setCurrentStyle():void{
    this.addStyle=!this.addStyle;
    
    this.styleObject={
      contentcard:this.addStyle,
      content:!this.addStyle,
    }
    this.currentStyles={
      'font-weight':!this.addStyle?'bold':'500',
    }
  }
  routetoSwicth():void
  {
    this.router.navigate(['ng-switch',{num:1}], { relativeTo: this.activeRouter });

  }

  addMovies():void
  {
    this.moviesArr= [
      {
        "id": 1,
        "title": "Super Man"
      },
      {
        "id": 2,
        "title": "Spider Man"
      },
      {
        "id": 3,
        "title": "Aladdin"
      }, 
      {
        "id": 4,
        "title": "Downton Abbey"
      },
      {
        "id": 4,
        "title": "Spider Man"
      },
      {
        "id": 5,
        "title": "Aladdin"
      }, 
      {
        "id": 6,
        "title": "Downton Abbey"
      }
    ]
  }
  trackByMethod(el:any):Element
  {
    return el;
  }
}
