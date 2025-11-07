import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { environment } from "../../environments/environment.development";
import axios from "axios";


@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient){
        
    }
    //PETICION NORMAL
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
    //PETICION CON AXIOS
    getPersonasAxios(): Promise<any>{
        let urlApi = environment.apiPersonas;
        let request = "api/personas";

        let promise = new Promise((resolve) => {
        axios.get(urlApi + request).then(response => {
            resolve(response.data);
            })
        });

    return promise;
    }
    //PETICION FETCH
    getPersonasFetch():Promise<Array<Persona>>{
        let urlApi = environment.apiPersonas;
        let request = "api/personas";

        let promise = new Promise((resolve) => {
            fetch(urlApi + request)
            .then(response => { return response.json() })
            .then(data => resolve(data))
        });
        return promise
    }
}