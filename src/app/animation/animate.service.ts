import { Injectable, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject, combineLatest, of, iif, OperatorFunction } from 'rxjs';
import { tap, map, startWith, distinctUntilChanged, first, scan, switchMap, debounceTime, shareReplay } from 'rxjs/operators';

export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
  return source => {
    return new Observable( observer => {
      return source.subscribe(
        (value: T) => zone.run(() => observer.next(value)),
        (e: any) => zone.run(() => observer.error(e)),
        () => zone.run(() => observer.complete())
      );
    });
  };
}

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  private view$: Observable<DOMRect>;

  protected get viewRect(): DOMRect {
    return this.viewPort.getViewportRect();
  }

  constructor(readonly scroll: ScrollDispatcher, readonly viewPort: ViewportRuler, private zone: NgZone) {

    this.view$ = viewPort.change(100).pipe(
      startWith( null ),
      map( () => this.viewRect ),
      shareReplay(1)
    );
  }

  public trigger(elm: ElementRef<HTMLElement>, threshold: number): OperatorFunction<boolean, boolean> {

    return source => this.zone.onStable.pipe(
      first(),
      switchMap( () => source ),
      switchMap( trigger => threshold > 0 ? this.aos(elm, threshold) : of(trigger) )
    );
  }

  private aos(elm: ElementRef<HTMLElement>, threshold: number): Observable<boolean> {
        console.log(elm)
        
    return this.scroll.ancestorScrolled(elm, 0).pipe(
      startWith(0),
      switchMap( () => this.visibility(elm) ),
      scan((result, visiblility) => (visiblility >= threshold) || (result && visiblility > 0), false),
      distinctUntilChanged(),
      runInZone(this.zone)
    
    );
  }
  private visibility(elm: ElementRef<HTMLElement>): Observable<number> {

    return this.view$.pipe( map( view => {

      const rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();
      if(!rect) { return 0; }

      if(rect.left > view.left - 1 && rect.top > view.top - 1 && rect.right < view.right + 1 && rect.bottom < view.bottom + 1) {
        return 1;
      }

      const a = Math.round(rect.width * rect.height);
      const b = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
      const c = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top));

      return Math.round(b * c / a * 10) / 10;
    }));
  }
}
