import { Form, Input, Button, Empty } from "antd";
import Ticket from "../Ticket/Ticket";
import {
  ColumnContainer,
  ListNameContainer,
  StyledColumnInput,
  FlexRowCentered,
  StyledBottomButton,
} from "./styles/Column";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  ADD_LIST_TASK,
  DELETE_LIST,
  DELETE_LIST_TASK,
  UPDATE_TASK_LIST,
} from "../../store/actions/lists.actions";
import { useEffect, useState } from "react";

const Column = ({ setModalVisible, list }) => {
  const [dragItem, setDragItem] = useState(null);
  const [seletedItemId, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const onDropEvent = (e, target) => {
    e.preventDefault();
    // dispatch({type: UPDATE_TASK_LIST, payload: { newListId: e.currentTarget.id, taskId: seletedItemId }})
  };

  useEffect(() => {
    if (dragItem?.listId) {
      setSelectedItem(dragItem?.id);
      dispatch({ type: DELETE_LIST_TASK, payload: { taskId: dragItem?.id } });
      setTimeout(() => {
        dispatch({
          type: ADD_LIST_TASK,
          payload: {
            listId: dragItem.listId,
            task: {
              id: dragItem?.id,
              name: dragItem.name,
              description: dragItem.description,
            },
          },
        });
      }, 500);
    }
  }, [dragItem]);

  const dragHandler = (task, listId) => {
    setDragItem({
      id: task?.id,
      name: {
        ticketName: task?.name?.ticketName,
        ticketDescription: task?.name?.ticketDescription,
      },
      listId,
    });
  };

  const deleteColumn = () => {
    dispatch({ type: DELETE_LIST, payload: { id: list.id } });
  };

  return (
    <ColumnContainer
      key={list.id}
      id={list.id}
      onDrop={onDropEvent}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <ListNameContainer>
        <Form initialValues={{ columnName: list?.name?.listName }}>
          <FlexRowCentered>
            <Form.Item name="columnName">
              <StyledColumnInput />
            </Form.Item>
            <Form.Item>
              <DeleteOutlined onClick={deleteColumn} />
            </Form.Item>
          </FlexRowCentered>
        </Form>
      </ListNameContainer>
      {list?.tasks?.length ? (
        list.tasks?.map((task) => (
          <Ticket
            draggable={true}
            onDrag={dragHandler}
            key={task.id}
            listId={list?.id}
            task={task}
          />
        ))
      ) : (
        <Empty />
      )}
      <StyledBottomButton
        type="primary"
        onClick={() => setModalVisible(list.id)}
      >
        + Add a ticket
      </StyledBottomButton>
    </ColumnContainer>
  );
};

export default Column;
