import { LoaderService } from './../loader/loader.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    public LoaderService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.LoaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.LoaderService.isLoading.next(false);
        }
      )
    );
  }
}
