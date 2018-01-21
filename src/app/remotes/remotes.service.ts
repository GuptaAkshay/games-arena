import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemotesService {


  url:string = 'http://starlord.hackerearth.com/gamesarena';

  constructor(private _http:Http) { }

  getAllGames = () : Observable<any> => {
      return this._http.get(this.url)
                  .map((resp: Response) => resp.json())
                  .catch(this.handleError);
  }

  private handleError(err: Response){
    if(err.status){
      return Observable.throw('Looks Like Services are Down');
    }
    return Observable.throw(err || 'Server');
  }

}
