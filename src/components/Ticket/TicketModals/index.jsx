import ModalContainer from "../../../shared/Modal/Modal";
import { Modal, Form, Button, Input } from "antd";
import { Fragment } from "react";

const TicketModals = ({
  handleTicketEdit,
  handleTicketExplore,
  type,
  id,
  ticket,
  loading,
}) => {
  const modalTitle =
    type === "edit"
      ? `Edit ticket: ${ticket?.name?.ticketName}`
      : `Explore ticket: ${ticket?.name?.ticketName}`;
  const cancelHandler =
    type === "edit" ? handleTicketEdit : handleTicketExplore;
  const resetFormAndCloseModal = () => {};
  return (
    <ModalContainer>
      <Modal
        title={modalTitle}
        visible={true}
        footer={null}
        onCancel={() => cancelHandler(ticket?.id, "close")}
      >
        {type === "edit" ? (
          <Form
            onFinish={(value) => handleTicketEdit(ticket?.id, "close", value)}
            initialValues={{
              ticketName: ticket?.name?.ticketName,
              ticketDescription: ticket?.name?.ticketDescription,
            }}
          >
            <Form.Item
              label="Ticket name"
              labelCol={{ offset: 2 }}
              name="ticketName"
            >
              <Input />
            </Form.Item>
            <Form.Item label="Ticket Description" name="ticketDescription">
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                style={{ marginRight: 10 }}
              >
                Save
              </Button>
              <Button
                disabled={loading}
                type="ghost"
                onClick={resetFormAndCloseModal}
              >
                Discard changes
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Fragment>
            <b>Title:</b> {ticket?.name?.ticketName}
            <br />
            <b>Description:</b> {ticket?.name?.ticketDescription}
            <br />
            <b>Created at:</b>
            <br />
            <b>Updated at:</b>
          </Fragment>
        )}
      </Modal>
    </ModalContainer>
  );
};

export default TicketModals;
