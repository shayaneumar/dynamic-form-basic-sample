import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    DynamicFormsCoreModule,
    DYNAMIC_VALIDATORS,
    ValidatorFactory
} from '@ng-dynamic-forms/core';
import { DynamicFormsKendoUIModule } from '@ng-dynamic-forms/ui-kendo';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ReactiveFormsModule,
    NG_VALIDATORS,
    Validator,
    ValidationErrors
} from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicForm2Component } from './dynamic-form2/dynamic-form2.component';
import { DynamicForm3Component } from './dynamic-form3/dynamic-form3.component';
import { myCustomValidator } from './validators/my-custom-validator';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormAllComponent } from './dynamic-form-all/dynamic-form-all.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadModule } from '@progress/kendo-angular-upload';





@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicForm2Component,
        DynamicForm3Component,
        DynamicFormJsonComponent,
        DynamicFormAllComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        DynamicFormsKendoUIModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DropDownsModule,
        DateInputsModule,
        InputsModule,
        UploadModule
    ],
    providers: [
        { provide: NG_VALIDATORS, useValue: myCustomValidator, multi: true },
        {
            provide: DYNAMIC_VALIDATORS,
            useValue: new Map<
                string,
                Validator | ValidatorFactory | ValidationErrors
            >([['myCustomValidator', myCustomValidator]])
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
