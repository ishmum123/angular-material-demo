import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubmittedFoodService {

  private _submittedFood = new BehaviorSubject<any>(null);

  submittedFood = this._submittedFood.asObservable().pipe(filter(food => !!food));

  submit(food: any) {
    this._submittedFood.next(food);
  }
}
