import { Component } from '@angular/core';
import { ITable } from './models/ITable';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenges';
  data!: ITable[];
  p: number = 1;
  q: number = 1;
  constructor(private auth:AuthService){}

  ngOnInit() {
    this.getTableData()
  }

  getTableData() {
    this.auth.getData().subscribe((response:any) => {
      return this.data = response;
    })
  }
}
