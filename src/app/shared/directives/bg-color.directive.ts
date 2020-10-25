import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive(
{
    selector: '[pokeBgColor]'
})
export class BgColorDirective
{

    constructor(private el: ElementRef, private render: Renderer2) { }

    @HostBinding('class.bgColor') backgroundColorItem: string;

}
