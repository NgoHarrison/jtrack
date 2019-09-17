import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from "rxjs";
import {API_URL} from '../env';
import {job} from './job.model';
import {catchError} from "rxjs/operators";

@Injectable()
export class JobApiService {

  constructor(private _http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return throwError(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getJobs(): Observable<job[]> {
    return this._http.get <job[]>('http://localhost:5000').pipe(catchError(JobApiService._handleError));
  }


}
