import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http : HttpClient) {  }

sendData(){
  const header={
    'content-type': 'application/json',
    'x-api-key' : 'q2+4AfQ2lBcbrvkVPbd8qQ==BDyLLZI2Ico11bG6'

  }
  return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {headers:header})
}

}
