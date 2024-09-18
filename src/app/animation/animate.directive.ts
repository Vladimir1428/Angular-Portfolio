import { Directive, Input, ElementRef, forwardRef, NgZone } from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { AnimateService } from './animate.service';

@Directive({
  selector: '[wmAnimateView]',
  providers: [
    { provide: AnimateService, useExisting: forwardRef(() => AnimateDirective) },
  ]
})
export class AnimateDirective extends AnimateService {

  @Input() set useElement(value: boolean) { this.element = coerceBooleanProperty(value); }
  private element: boolean = false;

  @Input() top: number;

  @Input() left: number;

  @Input() bottom: number;

  @Input() right: number;

  protected get viewRect(): DOMRect {
    const rt = this.element ? this.elref.nativeElement.getBoundingClientRect()
      : this.viewPort.getViewportRect();
    const top = rt.top + coerceNumberProperty(this.top, 0);
    const left = rt.left + coerceNumberProperty(this.left, 0);
    const bottom = rt.bottom + coerceNumberProperty(this.bottom, 0);
    const right = rt.right + coerceNumberProperty(this.right, 0);
    return { top, left, bottom, right, height: bottom - top, width: right - left,x: left, y: top, toJSON: () => ({ top, left, bottom, right, height: bottom - top, width: right - left })
    };
  }

  constructor(private elref: ElementRef<HTMLElement>, readonly viewPort: ViewportRuler, scroll: ScrollDispatcher, zone: NgZone) {
    super(scroll, viewPort, zone);
  }
}
