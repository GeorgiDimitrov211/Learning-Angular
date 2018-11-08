import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
    return pipeData.filter((e) => {
      return e['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        e['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
    })
  }
}