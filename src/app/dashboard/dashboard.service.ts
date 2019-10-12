import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashBoardService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='Survey'
    }

    create(data : any)    {
        return this.post('create',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    
}