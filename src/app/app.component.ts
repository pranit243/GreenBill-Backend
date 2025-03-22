import { Component } from '@angular/core';
import { AdminSidebarComponent } from './admin/navigation/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './admin/navigation/admin-navbar/admin-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, AdminSidebarComponent, AdminNavbarComponent]
})
export class AppComponent {}
