import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import { adal } from 'adal-angular';
import * as AuthenticationContext from 'adal-angular/lib/adal'
import { environment } from 'src/environments/environment';

// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdalService {

  private _config: adal.Config;
  private _context: adal.AuthenticationContext;

  constructor(private http: HttpClient) {
    this._config = environment.adalConfig;
    this._context = new AuthenticationContext(this._config);
  }

  get config(): adal.Config {
    return this._config;
  }

  get context(): adal.AuthenticationContext {
    return this._context;
  }
  
  get isLogged(): boolean {
    const user = this._context.getCachedUser();
    const token = this._context.getCachedToken(this._config.clientId);
    return !!user && !!token;
  }
}