import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {map, Observable, tap} from 'rxjs';

@Injectable()
export class MesureDurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startDate: number = Date.now();
    return next.handle().pipe(
        tap(valueFromRouterHandler =>
                console.log(`\n\t Duration : ${Date.now() - startDate}ms`),
        ),
    );
  }
}
