import { Card } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";

import TicketModals from "./TicketModals";
import { useDispatch } from "react-redux";
import {
  DELETE_LIST_TASK,
  EDIT_LIST_TASK,
} from "../../store/actions/lists.actions";

const { Meta } = Card;

const Ticket = ({ task, listId, draggable, onDrag }) => {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTicketEdit = (id, actionType, actionData) => {
    if (actionData) {
      setLoading(true);
      actionData?.ticketName &&
        actionData?.ticketDescription &&
        dispatch({
          type: EDIT_LIST_TASK,
          payload: {
            ticketId: id,
            ticketName: actionData?.ticketName,
            ticketDescription: actionData?.ticketDescription,
          },
        });
      setTimeout(() => {
        setLoading(false);
        setVisibleModal(null);
      }, 1000);
      return;
    }
    setVisibleModal(actionType === "open" ? { type: "edit", id } : null);
  };

  const handleDeleteTicket = (id) => {
    dispatch({ type: DELETE_LIST_TASK, payload: { taskId: id } });
  };

  const handleTicketExplore = (id, actionType) => {
    setVisibleModal(actionType === "open" ? { type: "explore", id } : null);
  };

  return (
    <Fragment>
      <Card
        key={listId}
        draggable={draggable}
        onDragStart={() => onDrag(task, listId)}
        style={{
          width: "calc(100% - 10px)",
          margin: 10,
          padding: "6px 8px 2px",
          margin: 10,
          borderRadius: 3,
        }}
        actions={[
          <EditOutlined
            key="edit"
            onClick={() => handleTicketEdit(task?.id, "open")}
          />,
          <DeleteOutlined
            key="delete"
            onClick={() => handleDeleteTicket(task?.id)}
          />,
          <EyeOutlined
            key="Explore ticket"
            onClick={() => handleTicketExplore(task?.id, "open")}
          />,
        ]}
      >
        <Meta
          title={task?.name?.ticketName}
          description={task?.name?.ticketDescription}
        />
      </Card>
      {visibleModal?.id && (
        <TicketModals
          handleTicketEdit={handleTicketEdit}
          handleTicketExplore={handleTicketExplore}
          type={visibleModal?.type}
          id={visibleModal?.id}
          ticket={task}
          loading={loading}
        />
      )}
    </Fragment>
  );
};

export default Ticket;
