import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'titleLink'
})
export class TitleLinkPipe implements PipeTransform {
  transform(id: number, args: string[]): string {
    if (args?.length) {
      const link = [...args];
      const idx = link.findIndex((arg: string) => arg.includes('id'));

      if (id !== -1) {
        link[idx] = id.toString();
      }

      return link.join('/');
    }
    return '';
  }
}
