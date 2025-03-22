import { Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component'; // adjust path
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user', component: UserComponent }, // ✅ this fixes the error
  // Add other routes as needed
];