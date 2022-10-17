import { TrackerResponse } from "../helpers/model/model";
import "./styles/listItem.scss";
import { getIcons } from "../helpers/helpers";

const ListItem = (props) => {
  const data: TrackerResponse = props.data;

  const date = new Date(data.paid);
  return (
    <li>
      <div className="list-content">
        {getIcons(data.category)}
        <div>
          <h3>{data.summary}</h3>
          <span>{date.toUTCString().slice(0, -3)}</span>
        </div>
      </div>

      <span className="sum">{data.sum}</span>
    </li>
  );
};

export default ListItem;
