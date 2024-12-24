import formConfig from "./form-config";

const FormConfigExample = () => {
  let RenderForm = function render(field) {
    switch (field.type) {
      case "text":
      case "password":
        return <input type={field.type} />;
      case "select":
        return (
          <select>
            {field.options.map((item) => (
              <option value={item} key="">
                {item}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <div>
            {field.options.map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor={item}> {item}</label>
              </div>
            ))}
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div>
      {formConfig.fields.map((field, index) => {
        return RenderForm(field);
      })}
      <button>submit</button>
    </div>
  );
};

export default FormConfigExample;
