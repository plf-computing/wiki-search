import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

interface WikipediaResponse {
  query: {
    search: {
      title:string;
      snippet:string;
      pageid: number;
    }[];
  }
}

// const observable = new Observable<number>((observer) =>{
//   observer.next(1);
// });
// observable.subscribe(value => {
//   console.log(value);
// });


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  

  constructor(private http: HttpClient ) { }


  search(term:string){
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params: {
        action:'query',
        format:'json',
        list:'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }

    }).pipe(
      map(WikipediaResponse =>WikipediaResponse.query?.search)
    );
    
  }
}
