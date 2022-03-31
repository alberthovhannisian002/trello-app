import { Input, Layout, Modal, Button, Form } from "antd";
import { useState } from "react";
import Column from "../Column/Column";
import {
  WhiteLayout,
  ModalButtonsContainer,
  ListsContainer,
} from "./styles/Dashboard";
import ModalContainer from "../../shared/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_LIST,
  UPDATE_LIST,
  ADD_LIST_TASK,
} from "../../store/actions/lists.actions";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listModalVisible, setListModalVisible] = useState(false);
  const { lists } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [listForm] = Form.useForm();

  const addNewTicket = (ticketName, ticketDescription) => {
    setLoading(true);
    dispatch({
      type: ADD_LIST_TASK,
      payload: {
        listId: modalVisible,
        task: {
          id: Math.random(),
          name: ticketName,
          description: ticketDescription,
        },
      },
    });
    setTimeout(() => {
      setModalVisible(false);
      setLoading(false);
    }, 2000);
  };

  const addNewList = (listName) => {
    setLoading(true);
    dispatch({
      type: CREATE_LIST,
      payload: { name: listName, id: Math.random() },
    });
    setTimeout(() => {
      listForm.resetFields();
      setLoading(false);
      setListModalVisible(false);
    }, 2000);
  };

  const closeModalAndReset = () => {
    setListModalVisible(false);
    listForm.resetFields();
  };

  return (
    <>
      <ModalContainer>
        <Modal title="Add new ticket" visible={!!modalVisible} footer={null}>
          <Form onFinish={addNewTicket} name="ticketForm">
            <Form.Item
              name="ticketName"
              label="Ticket name"
              rules={[{ required: true, message: "Ticket name is required !" }]}
            >
              <Input style={{ marginBottom: 10 }} />
            </Form.Item>
            <Form.Item
              name="ticketDescription"
              label="Ticker description"
              rules={[
                { required: true, message: "Ticket description is required !" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <ModalButtonsContainer>
              <Form.Item>
                <Button
                  style={{ marginRight: 10 }}
                  htmlType="submit"
                  type="primary"
                  loading={loading}
                >
                  Create
                </Button>
              </Form.Item>
              <Button onClick={closeModalAndReset} type="ghost">
                Cancel
              </Button>
            </ModalButtonsContainer>
          </Form>
        </Modal>
      </ModalContainer>
      <ModalContainer>
        <Modal
          title="Add new list"
          visible={listModalVisible}
          footer={null}
          onCancel={closeModalAndReset}
        >
          <Form onFinish={addNewList} name="listForm" form={listForm}>
            <Form.Item
              name="listName"
              label="List name"
              rules={[{ required: true, message: "List name is required!" }]}
            >
              <Input name="listName" placeholder="List name" />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ marginRight: 10 }}
                htmlType="submit"
                type="primary"
                loading={loading}
              >
                Create
              </Button>
              <Button onClick={closeModalAndReset} type="ghost">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </ModalContainer>
      <WhiteLayout>
        <ListsContainer>
          {lists.map((list) => (
            <Column
              key={list.id}
              list={list}
              setModalVisible={setModalVisible}
            />
          ))}
        </ListsContainer>
        <Button
          type="ghost"
          onClick={() => setListModalVisible(true)}
          style={{ width: 200, marginLeft: 20 }}
        >
          + Add another list
        </Button>
      </WhiteLayout>
    </>
  );
};

export default Dashboard;
