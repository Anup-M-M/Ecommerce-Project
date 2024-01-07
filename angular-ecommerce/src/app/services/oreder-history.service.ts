import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrederHistoryService {

  private orderUrl = 'http://localhost/api/orders';

  // use HttpClient to make REST API calls
  constructor(private httpClient : HttpClient) { }

  getOrderHostory(theEmail : string): Observable<GetResponseOrderHistory>{

    // need to build the url based on customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }

}

interface GetResponseOrderHistory{
  _embedded: {
    orders: OrderHistory[]
  }
}
