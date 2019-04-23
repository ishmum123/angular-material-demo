import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'app/food.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SubmittedFoodService } from 'app/submitted-food.service';
import { Entity } from 'app/core';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit {
  
  foods: MatTableDataSource<any>;
  
  displayedColumns = ['position', 'name', 'rating'];
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _foodService: FoodService,
    private _submittedFoodService: SubmittedFoodService) { 
      this.foods = new MatTableDataSource(_foodService.getFoods());  
      _submittedFoodService.getSubject(Entity.FOOD).subscribe(food => this.addNewFood(food.name, food.rating));
    }
    
    ngOnInit() {
      this.foods.sort = this.sort;
    }
    
    addNewFood(food: string, rating: string) {
      const data = this.foods.data;
      data.push({ name: food, rating: rating });
      this.foods.data = data;
    }
    
    applyFilter(filterValue: string) {
      this.foods.filter = filterValue.trim().toLowerCase();
    }
  }
  