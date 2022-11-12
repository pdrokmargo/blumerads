import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()
export class MasterDetailService {

  private _viewModeObservable: BehaviorSubject<MasterDetailViewMode> = 
  new BehaviorSubject<MasterDetailViewMode>(MasterDetailViewMode.MASTER);

  get viewModeObservable():any {
    return this._viewModeObservable.asObservable();
  }

  set setViewModeObservable(viewMode: MasterDetailViewMode) {
    this._viewModeObservable.next(viewMode);
  }

  constructor() { }
}


export enum MasterDetailViewMode {
  MASTER = 'MASTER',
  DETAIL = 'DETAIL'
}
