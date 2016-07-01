import {Component} from '@angular/core';

import {Dynamic} from './dynamic.component';
import {ToBeInserted} from './to.be.inserted.component';

@Component({
    template: `
      <dynamic [dynamicComponent]="dynamicComponent" [bindings]="dynamicBinding"></dynamic>
    `,
    directives: [Dynamic]
})
export class RoutingComponent {
    private dynamicComponent = ToBeInserted;

    private dynamicBinding = {
        'test': 'test variable 1',
        'test1': 'test variable 2'
    };

    constructor() {
        return undefined;
    }
}
