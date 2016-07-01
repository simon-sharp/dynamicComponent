import {Component, Input} from '@angular/core';

@Component({
    selector: 'to-be-inserted',
    template: `<div>it works: {{test}} {{test1}}</div>`
})
export class ToBeInserted {
    @Input() test: string;
    @Input() test1: string;

    constructor() {
        return undefined;
    }
}
