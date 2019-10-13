import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AnonymousService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='Anonymous'
    }

  
    GetSurveInfo(id : any):Observable<any> {       
        return this.get('GetSurveInfo\?id='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
    GetBySurveyQuestionsUID(id : number):Observable<any>      {
        return this.get('GetBySurveyQuestionsUID\?id='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
   
    
}