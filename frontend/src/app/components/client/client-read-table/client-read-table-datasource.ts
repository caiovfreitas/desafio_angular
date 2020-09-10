import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
//import { Client } from '../client.model';

// TODO: Replace this with your own data model type
export interface Client {
  id?: number
  nome: string
  idade: number
  cpf: number
  telefone: number
  email: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Client[] = [
  {
    "id": 1,
    "nome": "{{ client.nome }}",
    "idade": 24,
    "cpf": 18960718475,
    "telefone": 998308550,
    "email": "caiovfreitas@gmail.com"
  },
  {
    "id": 2,
    "nome": "Leticia",
    "idade": 22,
    "cpf": 18960718476,
    "telefone": 998308520,
    "email": "leticia@gmail.com"
  },
  {
    "id": 3,
    "nome": "Igor",
    "idade": 20,
    "cpf": 18960718477,
    "telefone": 998308540,
    "email": "igor@gmail.com"
  },
  {
    "nome": "Lara",
    "idade": 7,
    "cpf": 99999999999,
    "telefone": 81999999999,
    "email": "lara@gmail.com",
    "id": 4
  }


  //  {id: 2, name: 'Helium'},
  //  {id: 3, name: 'Lithium'},
  //  {id: 1, name: 'Hydrogen'},
  //  {id: 4, name: 'Beryllium'},
  //  {id: 5, name: 'Boron'},
  //  {id: 6, name: 'Carbon'},
  //  {id: 7, name: 'Nitrogen'},
  //  {id: 8, name: 'Oxygen'},
  //  {id: 9, name: 'Fluorine'},
  //  {id: 10, name: 'Neon'},
  //  {id: 11, name: 'Sodium'},
  //  {id: 12, name: 'Magnesium'},
  //  {id: 13, name: 'Aluminum'},
  //  {id: 14, name: 'Silicon'},
  //  {id: 15, name: 'Phosphorus'},
  //  {id: 16, name: 'Sulfur'},
  //  {id: 17, name: 'Chlorine'},
  //  {id: 18, name: 'Argon'},
  //  {id: 19, name: 'Potassium'},
  //  {id: 20, name: 'Calcium'},
];

/**
 * Data source for the ClientReadTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientReadTableDataSource extends DataSource<Client> {
  data: Client[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Client[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Client[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Client[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'telefone': return compare(+a.telefone, +b.telefone, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
