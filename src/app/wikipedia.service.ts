import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient ) { }


  search(term:string){
    return this.http.get('https://en.wikipedia.org/w/api.php'),{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf: '1',
        srsearch: term,
        origin: '*'
      }
    }
  }
}
