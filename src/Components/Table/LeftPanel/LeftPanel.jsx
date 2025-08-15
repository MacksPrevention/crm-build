import avatar from '../../../avatars/avatar-128.jpg';
import { statusProduct } from '../../../constants/statusProduct';

const LeftPanel = ({ setSelectedStatus, selectedStatus, data }) => {
  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>

      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Петр <br />
          Васильевич
        </div>
      </div>

      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          <li>
            <span
              className={`clear ${selectedStatus === 'all' ? 'active' : ''}`}
              data-value="all"
              data-role="left-status"
              onClick={(e) => {
                e.preventDefault;
                setSelectedStatus('all');
              }}
            >
              Все
            </span>
          </li>
          {statusProduct.map((status) => {
            return (
              <li key={status.value}>
                <span
                  className={`clear ${selectedStatus === status.value ? 'active' : ''}`}
                  data-value={status.value}
                  data-role="left-status"
                  onClick={(e) => {
                    e.preventDefault;
                    setSelectedStatus(status.value);
                  }}
                >
                  {status.name}
                  {status.value === 'new' && (
                    <div className="badge" id="badge-new">
                      {data.filter((item) => item.status === 'new').length}
                    </div>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
