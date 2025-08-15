import { useEffect, useState } from 'react';

import Nav from '../Nav';
import LeftPanel from './LeftPanel/LeftPanel';
import Filter from './Filter/Filter';
import RequestList from './RequestList';
import apiRequest from '../../api/api';

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');

  const getData = async () => {
    try {
      const res = await apiRequest('/requests');
      setData(res.requests || []);
    } catch (err) {
      console.error('Ошибка при получении данных:', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredRequest = data.filter((req) => {
    const statusMatch =
      selectedStatus === 'all' || req.status === selectedStatus;
    const productMatch =
      selectedProduct === 'all' || req.product === selectedProduct;
    return statusMatch && productMatch;
  });

  return (
    <div className="with-nav body--dashboard">
      <Nav />

      <LeftPanel
        setSelectedStatus={setSelectedStatus}
        selectedStatus={selectedStatus}
        data={data}
      />

      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <Filter
            setSelectedStatus={setSelectedStatus}
            setSelectedProduct={setSelectedProduct}
            selectedStatus={selectedStatus}
          />

          <table className="table fs-14">
            <thead>
              <tr>
                <th>ID</th>
                <th>дата</th>
                <th>продукт</th>
                <th>имя</th>
                <th>email</th>
                <th>телефон</th>
                <th>статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tbody">
              {data ? (
                <RequestList data={filteredRequest} />
              ) : (
                <tr>
                  <td colSpan="8">Загрузка...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
