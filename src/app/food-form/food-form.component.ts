import { Component, OnInit } from '@angular/core';
import { SubmittedFoodService } from 'app/submitted-food.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  possibleFoods = [
    {value: 'Ruti'},
    {value: 'Halwa'},
    {value: 'Pizza'},
    {value: 'Burritos'},
    {value: 'French Fries'},
    {value: 'Doi'}
  ];
  
  selectedFood: string;

  constructor(private _submittedFoodService: SubmittedFoodService) { }

  ngOnInit() {
  }

  addNewFood(food: string, rating: string) {
    this._submittedFoodService.submit({ name: food, rating: rating });
  }
}
