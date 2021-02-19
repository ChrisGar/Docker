import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario-service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  idUsuario: number;
  nombreInput:String;
  contraseniaInput: String;
  correoInput: String;


  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const usuarioGuardar = new Usuario(this.idUsuario, this.nombreInput, this.contraseniaInput, this.correoInput);
    console.log("Agregar: " + usuarioGuardar);
    this.usuarioService.agregarUsuario(usuarioGuardar);
    this.router.navigate(['usuarios']);
    
  }
}
