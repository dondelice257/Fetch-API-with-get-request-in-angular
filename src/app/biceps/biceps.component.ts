import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.css']
})
export class BicepsComponent implements OnInit {
datas:any[]=[]
constructor(private service : ExerciseService){}

ngOnInit(): void {
 this.receiveData()

}

receiveData(){
 return this.service.sendData().subscribe((res:any)=>{
    this.datas=res
  })
}

}
