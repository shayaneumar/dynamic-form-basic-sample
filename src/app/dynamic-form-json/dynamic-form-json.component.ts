import { Component, OnInit } from '@angular/core';
import { DynamicFormService, DynamicFormModel, DynamicFormArrayModel } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import json from '../my-dynamic-form.json';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.less']
})
export class DynamicFormJsonComponent implements OnInit {

  formModel: DynamicFormModel;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService, private http: HttpClient) { }

  ngOnInit() {
    this.formModel = this.formService.fromJSON(json.data);
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
