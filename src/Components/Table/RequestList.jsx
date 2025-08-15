import { Link } from 'react-router-dom';
import { productMap } from '../../constants/productList';

const RequestList = ({ data }) => {
  return data.map((request) => {
    return (
      <tr key={request.id}>
        <th scope="row">{request.id}</th>
        <td>{request.date}</td>
        <td>{productMap[request.product] || request.product}</td>
        <td>{request.name}</td>
        <td>{request.email}</td>
        <td>{request.phone}</td>
        <td>
          {request.status === 'active' ? (
            <div className="badge badge-pill badge-warning">В работе</div>
          ) : request.status === 'new' ? (
            <div className="badge badge-pill badge-danger">Новый</div>
          ) : request.status === 'completed' ? (
            <div className="badge badge-pill badge-success">Завершен</div>
          ) : null}
        </td>
        <td>
          <Link to={`/edit/${request.id}`} state={{ request }}>
            <div>Редактировать</div>
          </Link>
        </td>
      </tr>
    );
  });
};

export default RequestList;
