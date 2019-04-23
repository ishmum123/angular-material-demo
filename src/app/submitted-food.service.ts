import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Entity } from './core';

@Injectable({
  providedIn: 'root'
})
export class SubmittedFoodService {
  
  private _entityWiseSubject = new Map<Entity, BehaviorSubject<any>>([
    [Entity.FOOD, new BehaviorSubject<any>(null)],
    [Entity.DRINK, new BehaviorSubject<any>(null)],
  ])
  
  submit(entityType: Entity, entity: any): void {
    this.getSubject(entityType).next(entity);
  }
  
  getSubject(entityType: Entity): any {
    return this._entityWiseSubject.get(entityType).pipe(filter(entity => !!entity));
  }
}
