import {
  DynamicFormModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [
  new DynamicInputModel({
    id: "sampleInput",
    label: "Sample Input",
    maxLength: 42,
    placeholder: "Sample input"
  }),

  new DynamicRadioGroupModel<string>({
    id: "sampleRadioGroup",
    label: "Sample Radio Group",
    options: [
      {
        label: "Option 1",
        value: "option-1"
      },
      {
        label: "Option 2",
        value: "option-2"
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ],
    value: "option-3"
  }),

  new DynamicCheckboxModel({
    id: "sampleCheckbox",
    label: "I do agree"
  }),
  new DynamicInputModel({

    id: "myInput",
    label: "My Input with validation",
    validators: {
      required: null,
      minLength: 3
    }
  }),
  new DynamicInputModel({

    id: "myInput",
    label: "My Input with custom validator",
    validators: {
      myCustomValidator: null
    }
  }),
  new DynamicInputModel({
    id: "myInput",
    label: "My Input with error message",
    validators: {
      required: null
    },
    errorMessages: {
      required: "{{ label }} is required."
    }
  })
];
