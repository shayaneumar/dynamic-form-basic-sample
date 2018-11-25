import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { MY_FORM_MODEL } from '../my-dynamic-form-all.model';

@Component({
    selector: 'app-dynamic-form-all',
    templateUrl: './dynamic-form-all.component.html',
    styleUrls: ['./dynamic-form-all.component.less']
})
export class DynamicFormAllComponent implements OnInit {
    formModel: DynamicFormModel = MY_FORM_MODEL;
    formGroup: FormGroup;

    constructor(private formService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
}
