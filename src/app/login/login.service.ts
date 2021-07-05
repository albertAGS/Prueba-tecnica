import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: any

  constructor() { }

  public login(): Observable<User> {
    return of({name: 'Albert', userId: 1, phone: '+34637551221', password: '123qwe$'})
  }


  public logout() {
    this.user = null
  }

  public readTextFile(file: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject();
            }
        };
        xhr.send();
    });
}

}
