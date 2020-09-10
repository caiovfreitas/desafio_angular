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
    private router: Router) { }

  ngOnInit(): void {

  }

  createClient(): void {
    if (
      this.client
    )

      this.clientService.create(this.client).subscribe(() => {
        this.clientService.showMessage('Cadastro Realizado')
        this.router.navigate(['/clients'])
      })
  }

  cancelClient(): void {
    this.clientService.showMessage('Limpando Informações')
    this.router.navigate(['/clients/create'])
  }

}
