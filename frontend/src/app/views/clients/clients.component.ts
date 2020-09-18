import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Listagem de Clientes',
      routeUrl: '/clients'
    }
  }

  ngOnInit(): void {
  }

  toClientsCreate(): void {
    this.router.navigate(['/clients/create'])
  }
}
