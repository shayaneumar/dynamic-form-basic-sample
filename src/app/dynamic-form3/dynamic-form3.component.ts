import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService, DynamicFormArrayModel } from '@ng-dynamic-forms/core';
import { MY_FORM_MODEL } from '../my-dynamic-form.model3';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form3',
  templateUrl: './dynamic-form3.component.html',
  styleUrls: ['./dynamic-form3.component.less']
})
export class DynamicForm3Component implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;
  formArrayModel: DynamicFormArrayModel;
  formArrayControl: FormArray;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formArrayControl = this.formGroup.get('myFormArray') as FormArray;
    this.formArrayModel = this.formService.findById('myFormArray', this.formModel) as DynamicFormArrayModel;
  }

  removeItem(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
  }

  insertItem(context: DynamicFormArrayModel, index: number) {
    this.formService.insertFormArrayGroup(index, this.formArrayControl, context);
  }
}
