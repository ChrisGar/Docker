import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Usuario } from "./usuario.model";
@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient){}

    urlBase = "http://localhost:8080/DockerFinal/webservice/usuarios";
    cargarUsuario(){
        return this.httpClient.get(this.urlBase);
    }

    agregarUsuario(usuario:Usuario){
        return this.httpClient.post(this.urlBase, usuario);
    }
}
