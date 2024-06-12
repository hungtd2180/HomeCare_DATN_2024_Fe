import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: Client;
  private notifications = new Subject<any>();

  constructor() {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000,
      debug: (str) => { console.log(str); }
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/notifications', message => {
        this.notifications.next(JSON.parse(message.body));
      });
    };

    this.stompClient.activate();
  }

  public getNotifications() {
    return this.notifications.asObservable();
  }
}
