import {BehaviorSubject, map, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class UserStore {
  private readonly user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private readonly isAuthenticated$: Observable<boolean> = this.user$.pipe(
    map(user => user !== null)
  );
  constructor(private http: HttpClient) {

  }
   public getUser(): Observable<User | null> {
    return this.user$;
  }

  public setUser(user: User): void {
    this.user$.next(user);
  }

  public clearUser(): void {
    this.user$.next(null);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }}