import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='Question'
    }

    create(data : any):Observable<any>    {
        return this.post('create',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    GetById(id : number):Observable<any>      {
        return this.get(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }
    
}