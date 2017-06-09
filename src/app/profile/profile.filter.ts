import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'SearchFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (val: any) {
                return val.firstName.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}