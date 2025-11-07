import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { environment } from "../../environments/environment.development";


@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient){
        
    }

    getPersonas(): Promise<any>{
        let urlApi = environment.apiPersonas;
        let request = "api/personas";
        let promise = new Promise((resolve) =>{
            this._http.get(urlApi+request).subscribe(response => {
                resolve (response)
            })
        })
        return promise
    }
}

