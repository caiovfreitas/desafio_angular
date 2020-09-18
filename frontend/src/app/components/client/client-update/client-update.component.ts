import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Informação de Cliente',
      routeUrl: '/clients/update'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client
    })
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Dados Atualizados')
      this.router.navigate(['/clients'])
    })
  }

  cancelClient(): void {
    this.router.navigate(['/clients'])
  }
}
