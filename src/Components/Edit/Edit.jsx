import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import Fields from './Fields/Fields';

const Edit = () => {
  const { id } = useParams();

  return (
    <div className="with-nav">
      <Nav />
      <div className="form-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой - {id}</div>
            </div>
            <div className="col text-right">
              <a href="/table" className="btn btn-link">
                Вернуться назад
              </a>
            </div>
          </div>
          <Fields id={id} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
