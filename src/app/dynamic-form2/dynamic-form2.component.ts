import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { MY_FORM_MODEL } from '../my-dynamic-form.model2';

@Component({
  selector: 'app-dynamic-form2',
  templateUrl: './dynamic-form2.component.html',
  styleUrls: ['./dynamic-form2.component.less']
})
export class DynamicForm2Component implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
