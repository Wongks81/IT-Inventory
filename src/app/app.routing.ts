import { ItemComponent } from "./item/item.component";

export const appRoutes = [
    {path:'', component:ItemComponent},
    //{path:'Item', component:ItemComponent},

    //Lazy loading for mainheader routes
    {path:'item', loadChildren :() => import('./item/item.module')
                    .then(c => c.itemModule)}
]