import { Type } from '@angular/core';

export class DetailViewItem {
    constructor(
        public component: Type<any>, public data: any
    ){
        
    }
}