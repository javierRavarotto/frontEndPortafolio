import { ElementRef, EventEmitter, Injectable, Output, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
@Output() dis:EventEmitter<any>= new EventEmitter();
  constructor() { }

}
