import {  EventEmitter, Injectable, Output, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
@Output() disparador:EventEmitter<any>= new EventEmitter();
  constructor() { }

}
