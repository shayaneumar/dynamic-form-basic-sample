import { DynamicFormArrayModel, DynamicFormModel, DynamicInputModel } from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [

  new DynamicFormArrayModel({

    id: "myFormArray",
    initialCount: 5,
    groupFactory: () => {
      return [
        new DynamicInputModel({
          id: "myInput",
          label: "My Input"
        })
      ];
    }
  })
];
