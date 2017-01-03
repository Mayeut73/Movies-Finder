import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
    apikey:string;

    constructor(private _jsonp:Jsonp){
        this.apikey = 'ef4d06e932f9c18f365112338ddafad4';
        console.log("MovieService Initiliaze");
        this.getPopular();
    }

    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
        .map(result => result.json());
    }

    getInTheaters(){
        var date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDay();
        var year = date.getUTCFullYear();

        var primary_release_date = year + "-" + month + "-" + day;
        var secondary_release_date = `${year-1}-${month}-${day}`;

        //return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte='+ primary_release_date + '&primary_release_date.lte=' + secondary_release_date+ '&api_key='+this.apikey)
        //.map(result => result.json());
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-12-15&primary_release_date.lte=2017-01-15&api_key='+this.apikey)
        .map(result => result.json());
    }

    searchMovies(searchStr:string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
        .map(result => result.json());
    }

    getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
        .map(result => result.json());
    }
}