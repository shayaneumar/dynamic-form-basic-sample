import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicColorPickerModel,
    DynamicDatePickerModel,
    DynamicEditorModel,
    DynamicFileUploadModel,
    DynamicRatingModel,
    DynamicSelectModel,
    DynamicSliderModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    DynamicTimePickerModel,
    DynamicCheckboxGroupModel
} from '@ng-dynamic-forms/core';

export const MY_FORM_MODEL: DynamicFormModel = [
    new DynamicCheckboxModel({
        id: 'sampleCheckbox',
        label: 'I do agree'
    }),
    new DynamicCheckboxGroupModel({
        id: 'address',
        legend: 'Address',
        label: 'Checkbox Group',
        group: [
            new DynamicCheckboxModel({
                id: 'street',
                label: 'street'
            }),
            new DynamicCheckboxModel({
                id: 'zipCode',
                label: 'Zip Code'
            })
        ]
    }),
    new DynamicInputModel({
        id: 'sampleColorPickerModel',
        label: 'Color picker',
        inputType: 'color'
    }),
    new DynamicInputModel({
        id: 'sampleDatePickerModel',
        label: 'Date picker',
        inputType: 'date'
    }),
    new DynamicEditorModel({
        id: 'sampleEditorModel',
        label: 'Editor',
        maxLength: 420
    }),
    new DynamicInputModel({
        id: 'sampleFileUploadModel',
        label: 'File upload'
        // inputType: 'file'
    }),
    new DynamicInputModel({
        id: 'sampleInput',
        label: 'Sample Input',
        maxLength: 42,
        placeholder: 'Sample input'
    }),

    new DynamicRadioGroupModel<string>({
        id: 'sampleRadioGroup',
        label: 'Sample Radio Group',
        options: [
            {
                label: 'Option 1',
                value: 'option-1'
            },
            {
                label: 'Option 2',
                value: 'option-2'
            },
            {
                label: 'Option 3',
                value: 'option-3'
            }
        ],
        value: 'option-3'
    }),
    new DynamicRatingModel({
        id: 'sampleRatingModel',
        label: 'Rating'
    }),
    new DynamicSelectModel({
        id: 'sampleSelectModel',
        label: 'Select',
        options: [
            {
                label: 'Option 1',
                value: 'option-1'
            },
            {
                label: 'Option 2',
                value: 'option-2'
            },
            {
                label: 'Option 3',
                value: 'option-3'
            }
        ],
        value: 'option-3'
    }),
    new DynamicSliderModel({
        id: 'sampleSliderModel',
        label: 'Slider'
    }),
    new DynamicSwitchModel({
        id: 'sampleSwitchModel',
        label: 'Switch'
    }),
    new DynamicTextAreaModel({
        id: 'sampleTextArea',
        label: 'Sample TextArea',
        maxLength: 42,
        placeholder: 'Sample TextArea'
    }),
    new DynamicInputModel({
        id: 'sampleTimePicker',
        label: 'TimePicker',
        inputType: 'time'
    })
];
