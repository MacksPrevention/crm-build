const Input = ({ props }) => {
  const { value, id, name, onChange } = props;

  return (
    <input
      type="text"
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
};

const Select = ({ props }) => {
  const { id, name, dataArray, value, onChange } = props;

  return (
    <select
      id={id}
      name={name}
      className="custom-select"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    >
      {dataArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

const Field = ({ props }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-2">
        <strong>{props.header}</strong>
      </div>
      <div className="col">
        {props.type === 'select' ? (
          <Select props={props.data} />
        ) : props.type === 'input' ? (
          <Input props={props.data} />
        ) : (
          <div>Ошибка!</div>
        )}
      </div>
    </div>
  );
};

export default Field;
