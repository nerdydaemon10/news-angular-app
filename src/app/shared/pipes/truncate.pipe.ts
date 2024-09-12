import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, max: number = 48) {
    if (!value) return ""
    return value.length > max 
      ? `${value.substring(0, max)}...` 
      : value
  }
}