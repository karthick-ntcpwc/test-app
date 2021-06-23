import { Injectable } from "@angular/core";
import { HttpClient} from "selenium-webdriver/http";
import { environment } from "src/environments/environment";

@Injectable()


export class RestAPI {
    constructor(public http:HttpClient){

    }
    apiDomain = environment.URL;
    // apiCall(req:any){
    //    if(req.method == 'get') {
    //        return this.http.get(this.apiDomain+req.url),{
    //         headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*')
    //       });
    //    }
    // }

}