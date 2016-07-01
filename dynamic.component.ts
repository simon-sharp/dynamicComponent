import {Component, Input, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';

@Component({
    selector: 'dynamic',
    template: `<span #dynComp></span>`
})
export class Dynamic {
    @ViewChild('dynComp', {read: ViewContainerRef}) dynComp;

    @Input() dynamicComponent: any;
    @Input() bindings: JSON;
    @Input() events: JSON;

    constructor(
        public view: ViewContainerRef,
        public compResolver: ComponentResolver
    ) {
        return undefined;
    }

    ngAfterViewInit() {
        this.compResolver.resolveComponent(this.dynamicComponent).then(
            factory => {
                let component = this.dynComp.createComponent(factory);

                if (this.bindings !== undefined) {
                    let bindingKeys = Object.keys(this.bindings);
                    for (let bindingName of bindingKeys) {
                        component.instance[bindingName] = this.bindings[bindingName];
                    }
                }

                if (this.events !== undefined) {
                    let eventKeys = Object.keys(this.events);
                    for (let eventName of eventKeys) {
                        component.instance[eventName] = this.events[eventName];
                    }
                }
            }
        );
    }
}
