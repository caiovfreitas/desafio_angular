import { HeaderService } from './../../template/header/header.service';
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

  client: Client = {
    nome: '',
    idade: null,
    cpf: null,
    telefone: null,
    email: ''
  }

  constructor(private clientService: ClientService,
    private router: Router,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Cliente',
      routeUrl: '/clients/create'
    }
  }

  ngOnInit(): void {

  }

  createClient(): void {
    if (
      this.client.nome === "" ||
      this.client.idade === null ||
      this.client.cpf === null ||
      this.client.telefone === null ||
      this.client.email === ""
    ) {
      this.clientService.showMessage("Por favor, preencha todos os campos.");
      return;
    }
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cadastro Realizado')
      this.router.navigate(['/clients'])
    })
  }

  cancelClient(): void {
    this.router.navigate(['/clients'])
  }

}
