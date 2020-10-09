import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service : EmployeeService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(emp :Employee ){
      this.service.formData = Object.assign({},emp);
  }

  deleteEmployee(id : number){
    if(confirm('Are you sure delete the record ?'))
    {
      this.service.deleteEmployee(id).subscribe(res=> {
        this.toastr.warning("Record deleted successfully!", "delete record");
        this.service.refreshList();
      });
    }
  }
}
