import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import {map, Observable} from 'rxjs';

@Injectable()
/**
 * Interceptor qui transforme la réponse en majuscule et retourne un objet en réponse
 * qui contient le contenu avant transformation (toLocaleUpperCase()), après transformation,
 * et sa longueur (length).
 */
export class EnrichResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
        map(valueFromRouterHandler => {
          return {
            initialContent: valueFromRouterHandler,
            editedContent: valueFromRouterHandler.toLocaleUpperCase(),
            response_length: valueFromRouterHandler.length,
          }
        })
    );
  }
}
