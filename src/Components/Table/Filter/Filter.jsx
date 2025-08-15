import { statusProduct } from '../../../constants/statusProduct';
import { productList } from '../../../constants/productList';

const Filter = ({ setSelectedStatus, setSelectedProduct }) => {
  return (
    <form action="">
      <div className="form-row">
        <div className="row mb-3 justify-content-start">
          <div className="col">
            <div
              id="topStatusBar"
              className="btn-group"
              role="group"
              aria-label="..."
            >
              <span
                className="btn btn-light"
                data-value="all"
                onClick={(e) => {
                  e.preventDefault;
                  setSelectedStatus('all');
                }}
              >
                Все
              </span>
              {statusProduct.map((status) => {
                return (
                  <span
                    key={status.value}
                    className="btn btn-light"
                    data-value={status.value}
                    onClick={(e) => {
                      e.preventDefault;
                      setSelectedStatus(status.value);
                    }}
                  >
                    {status.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="col">
            <select
              className="custom-select"
              id="productSelect"
              defaultValue="all"
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="all">Все продукты</option>
              {productList.map((product) => {
                return (
                  <option key={product.value} value={product.value}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
