import { useState } from 'react';

import { productList } from '../../constants/productList';
import apiRequest from '../../api/api';

const fields = [
  {
    type: 'input',
    key: 'name',
    placeholder: 'Имя и Фамилия',
    autoComplete: 'on',
    required: true,
  },
  {
    type: 'input',
    key: 'phone',
    placeholder: 'Телефон',
    autoComplete: 'on',
    required: true,
  },
  {
    type: 'input',
    key: 'email',
    placeholder: 'Email',
    autoComplete: 'on',
    required: true,
  },
  {
    type: 'select',
    key: 'product',
    label: 'Продукт:',
    options: productList,
  },
];

const Form = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // месяцы от 0 до 11
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'course-html',
    status: 'active',
    date: getCurrentDate(),
  });

  const clearForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: 'course-html',
      status: 'active',
      date: getCurrentDate(),
    });
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    try {
      await apiRequest('/requests', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      clearForm();
    } catch (err) {
      console.error('Ошибка при отправке данных:', err);
    }
  };

  return (
    <form onSubmit={handleRequest} id="form" action="">
      <label>Ваши данные:</label>

      {fields.map((field) => (
        <div className="form-group" key={field.key}>
          {field.type === 'input' ? (
            <input
              type="text"
              id={field.key}
              name={field.key}
              value={formData[field.key]}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [field.key]: e.target.value,
                }))
              }
              className="form-control"
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required}
            />
          ) : (
            <>
              <label htmlFor={field.key}>{field.label}</label>
              <select
                id={field.key}
                name={field.key}
                value={formData[field.key]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="form-control"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      ))}

      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Оформить заявку
        </button>
      </div>
    </form>
  );
};

export default Form;
