import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='User'
    }

    login(data : any)    {
            return this.post('authenticate',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    register(data : any)    {
        return this.post('register',data,this.COMMON_JSON_HEADER_REQUEST);
    }
}