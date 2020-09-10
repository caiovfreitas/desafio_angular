import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientReadTableDataSource } from './client-read-table-datasource';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read-table',
  templateUrl: './client-read-table.component.html',
  styleUrls: ['./client-read-table.component.css']
})
export class ClientReadTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Client>;
  dataSource: ClientReadTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'telefone', 'email'];

  //Passar os dados do db.json para a tabela. P1
  clients: Client[]

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.dataSource = new ClientReadTableDataSource();
    //Passar os dados do db.json para a tabela. P2
    this.clientService.read().subscribe(clients => {
      this.clients = clients
      console.log(clients)
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
