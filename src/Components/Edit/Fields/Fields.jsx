import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Field from './Field/Field';
import { productList } from '../../../constants/productList';
import apiRequest from '../../../api/api';

const Fields = ({ id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const request = location.state?.request;

  const [formData, setFormData] = useState({
    id: id,
    name: request.name,
    phone: request.phone,
    email: request.email,
    product: request.product,
    status: request.status,
    date: request.date,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiRequest(
        `/requests/${formData.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(formData),
        },
        navigate('/table')
      );
    } catch (err) {
      console.error('Ошибка при отправке данных:', err);
    }
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await apiRequest(`/requests/${formData.id}`, {
        method: 'DELETE',
      });
      navigate('/table');
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      alert('Не удалось удалить запись');
    }
  };

  const dataEdit = [
    {
      header: 'Продукт:',
      type: 'select',
      data: {
        name: 'product',
        id: 'product',
        value: formData.product,
        onChange: handleChange,
        dataArray: productList,
      },
    },
    {
      header: 'Имя:',
      type: 'input',
      data: {
        value: formData.name,
        onChange: handleChange,
        id: 'name',
        name: 'name',
      },
    },
    {
      header: 'Email:',
      type: 'input',
      data: {
        value: formData.email,
        onChange: handleChange,
        id: 'email',
        name: 'email',
      },
    },
    {
      header: 'Телефон:',
      type: 'input',
      data: {
        value: formData.phone,
        onChange: handleChange,
        id: 'phone',
        name: 'phone',
      },
    },
    {
      header: 'Статус заявки:',
      type: 'select',
      data: {
        name: 'status',
        id: 'status',
        value: formData.status,
        onChange: handleChange,
        dataArray: [
          {
            name: 'Выберите...',
            value: 'choosen',
          },
          {
            name: 'Новая',
            value: 'new',
          },
          {
            name: 'В работе',
            value: 'active',
          },
          {
            name: 'Завершена',
            value: 'completed',
          },
        ],
      },
    },
  ];

  if (!request) {
    return <div>Данные не найдены. Возможно, вы перезагрузили страницу.</div>;
  }

  return (
    <div className="row">
      <div className="col">
        <form id="form" onSubmit={handleSubmit}>
          <div className="card mb-4">
            <div className="card-header">Данные о заявке</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>ID:</strong>
                </div>
                <div className="col">
                  Заявка №<span id="number">{id}</span>
                </div>
                <input name="id" type="hidden" id="id" />
              </div>

              <div className="row mb-3">
                <div className="col-md-2">
                  <strong>Дата создания:</strong>
                </div>
                <div className="col" id="date">
                  {request.date || '—'}
                </div>
              </div>

              {dataEdit.map((item) => {
                return <Field key={item.header} props={item} />;
              })}
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col text-right">
              <button
                onClick={handleDelete}
                type="button"
                className="btn btn-danger mx-1"
              >
                Удалить
              </button>
              <button type="submit" className="btn btn-primary">
                Сохранить изменения
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fields;
