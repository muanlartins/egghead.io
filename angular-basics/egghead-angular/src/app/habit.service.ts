import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents once a week'
    },
    {
      id: 2,
      title: 'Record 2 videos per day'
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week'
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day'
    },
  ];

  constructor() { }

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit($event: any) {
    $event.id = this.habits.length+1;
    this.habits.push($event);
  }
}
