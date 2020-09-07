import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

  }

  createClient(): void {
    this.clientService.showMessage('Teste')
  }

}
