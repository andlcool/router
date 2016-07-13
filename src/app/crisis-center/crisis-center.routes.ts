/**
 * Created by Slevin on 10/7/2016.
 */
import { RouterConfig } from '@angular/router'
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisAdminComponent } from './crisis-admin.component';

import { CanDeactivateGuard }    from '../interfaces';
import { AuthGuard } from '../auth.guard';

export const CrisisCenterRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full'
  },
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      { path: ':id',  component: CrisisDetailComponent,  canDeactivate: [CanDeactivateGuard]},
      {
        path: 'admin',
        component: CrisisAdminComponent,
        canActivate: [AuthGuard]
      },
      { path: '', component: CrisisListComponent }
    ]
  }
];
