import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';

export const appRoutes = [
  { path: '', component: LoginComponent },
  //{path:'Item', component:ItemComponent},

  //Lazy loading for mainheader routes
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then((c) => c.itemModule),
  },
];
