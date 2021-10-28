import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, onePieceCharacters: string): string {
    return 'Personal Fighting Style: ' + onePieceCharacters.toUpperCase();
  }
  

}
