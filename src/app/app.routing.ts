//import { Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full'
  }, {
    path: 'dashboards',
    loadChildren: './dashboards/dashboards.module#DashboardsModule'
  }, {
    path: 'material',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatables',
    loadChildren: './datatables/datatables.module#DataTablesModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'charts',
    loadChildren: './charts/chartslib.module#ChartslibModule'
  }]
}, 
//{
//  path: '',
//  component: AppBlankComponent,
//  children: [{
//    path: 'authentication',
//    loadChildren: './authentication/authentication.module#AuthenticationModule'
//  }]
//}, 
{
   path: '**', redirectTo: '/login' 
},
{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
//export const routing = RouterModule.forRoot(AppRoutes);