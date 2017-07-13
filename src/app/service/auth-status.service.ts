import { Injectable } from '@angular/core';
import { ConnectService } from './connect.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthStatusService implements CanActivate{

  constructor(private CS:ConnectService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let url: string = state.url;
    console.log(`canActivate called: ${url}`);

    return this.checkConnect();
  }

  checkConnect(): boolean{
    return this.CS.isConnect;
  }
}
