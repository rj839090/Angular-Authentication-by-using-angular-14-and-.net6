import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wholeNumber'
})
export class WholeNumberPipe implements PipeTransform {

  transform(value: number): number {
   let val= !Number.isInteger(value) ?  Math.trunc(value): value;
   return val;


  //  let val1=value * 70
  //  return val1;


  // let val=value.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  // return val;


  }

}
