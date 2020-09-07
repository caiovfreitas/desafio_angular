import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  cliente: Client = {
    nome: "",
    idade: null,
    cpf: null,
    telefone: null,
    email: ""
  }

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createClient(): void {
    this.clientService.create(this.cliente).subscribe(() => {
      this.clientService.showMessage('Cadastro Realizado')
    })
  }

  cancelClient(): void {
    this.clientService.showMessage('Limpando Informações')
    this.router.navigate(['/clients/create'])
  }

}
