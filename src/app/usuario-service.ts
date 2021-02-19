import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { Usuario } from "./usuario.model";

@Injectable()
export class UsuarioService {
    usuarios:Usuario[]=[];

    constructor(private dataService: DataService){}
    
    setUsuarios(usuarios:Usuario[]){
        this.usuarios = usuarios;
    }

    obtenerUsuarios(){
        return this.dataService.cargarUsuario();
    }

    agregarUsuario(usuario:Usuario){
        console.log('usuario agregar: ' + usuario.usuario);

        this.dataService.agregarUsuario(usuario)
            .subscribe(            
                (data) => {
                    console.log('se agrega al arreglo')
                    this.usuarios.push(data as Usuario);
            }
        );

        
    }
}
