import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: 'readabletime',
  standalone: true
})
export class ReadableTime implements PipeTransform {
  transform(value: any) {
    return DateTime.fromISO(value).toRelative()
  }
}