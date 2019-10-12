import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='user'
    }

    getUserDetails(id : number)    {
            return this.get(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }
}