import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class ApiAuthService {

    public baseApiUrl: string = 'https://092d4775.ngrok.io';
    private headers = new HttpHeaders();

    constructor(private _http: HttpClient) {
        this.headers.append("Content-Type", "application/json; charset=utf-8");
    }

    get(queryParams, url): Observable<any> {
        let params = new HttpParams();
        for (var key in queryParams) {
            params = params.append(key, queryParams[key]);
        }
        return this._http.get(this.baseApiUrl + url, { headers: this.headers, params: params });

    }

    post(data, url): Observable<any> {
        return this._http.post(this.baseApiUrl + url, data)
            .pipe(
                tap((response: any) => {
                    return response;
                }),
                catchError(this._errorHandler));
    }

    private _errorHandler(error: Response) {
        return Observable.throw(error.json() || "Server Error");
    }




}
