import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario-service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = []

  constructor(private usuarioService: UsuarioService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios()
    .subscribe(
      data=>{
        this.usuarios = data as Usuario[];
        this.usuarioService.setUsuarios(this.usuarios);
        console.log("Personas obteneidaS: " + this.usuarios);
      }
    );
  }

  irAgregar(){
    this.router.navigate(['./usuarios/agregar']);
  }

}
