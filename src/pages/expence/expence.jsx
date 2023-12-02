import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpence, deleteExpence, updateExpence } from "../store/reducer";
import "../home/home.css"


const Expence = () => {
  const dispatch = useDispatch()
  const expence = useSelector((s) => s.reducer.expence)
  const expence1 = useSelector((s) => s.getInitialState.expence  )
  const [form] = Form.useForm()
  const [expenceId, setExpenceId] = useState("")
  const amount = expence1.map((t) => t.amount)
  // console.log("expence", Sum)
  
  const Sum = amount.reduce(sumTotal, 0)
  console.log(Sum,"expanes");
  
  function sumTotal(total,num){
    return total + num;
  }

    const onFinish = (values) => {

    if (expenceId) {
      const update = {
        ...values,
        id: expenceId
      }
      dispatch(updateExpence(update))
    } else {

      dispatch(addExpence(values))
    }
    console.log(values)
    setIsModalOpen(false)
    setExpenceId("")
    form.resetFields()

  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setExpenceId("")
    form.resetFields()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setExpenceId("")
    form.resetFields()
  };
  const onEdit = (t) => {
    setExpenceId(t.id)
    setIsModalOpen(true)
    form.setFieldsValue({
      title: t.title,
      discription: t.discription,
      amount: t.amount
    })

  }

  const onDelete = (id) => {
    dispatch(deleteExpence(id))
  }
  return (
    <div className="expence-card">
      <Button className="mn-btn" size="large" onClick={showModal}>
        Add Expence
      </Button>
      <div> Total {Sum}</div>
      <Modal  open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel}>
        <h1 className="modal-head">ADD EXPENCE</h1>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Discription"
            name="discription"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>


          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="mn-btn" htmlType="submit">
              {expenceId ? "Update" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        {expence.map((t) => (
          <div key={t.id} className="expence-items">
            <div  style={{ display: "flex", justifyContent: "space-between" }}>
              <h2><b>{t.title}</b></h2>
              <p>{t.amount}  <s>Rs</s></p>
            </div>
            <p>{t.discription}</p>
            <div style={{ textAlign: "right" }}>
              <Button className="mn-btn"   type=" text" onClick={() => onDelete(t.id)}>Remove</Button>
              <Button className="mn-btn"   type=" text" onClick={() => onEdit(t)}>Edit</Button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expence;