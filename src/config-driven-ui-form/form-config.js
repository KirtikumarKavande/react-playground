 const formConfig = {
    fields: [{
        type: "text",
        label: "Name",
        placeholder: "Enter your name",

    },
    {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
    },
    {
        type:"select",
        label:"Gender",
        placeholder:"Select your gender",
        options:["Male","Female","Other"]
    },
    {
        type:"radio",
        label:"Over 18?",
        options:["Yes","No"]
    },
    {
        type:"checkbox",
        options:["terms and conditions related to the product","terms and conditions related to the service","terms and conditions related to the company"]
    },
    {
        type:"date",
        label:"Date of Birth",
        placeholder:"Enter your date of birth"
    },
    

    ]
}
export default formConfig;