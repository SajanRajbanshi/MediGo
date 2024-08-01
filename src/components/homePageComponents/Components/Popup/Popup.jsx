import { Button, Stack } from '@mui/material';
import { Form, Input, Modal, Select, DatePicker } from "antd";
import axios from 'axios';
import React from 'react';
import ServicesDropDown from "../ExtraComponents/ServicesDropDown"

const Popup = ({
    product,
    visible,
    onClose,
    onUpdate,
    method
}) => {
    const [form] = Form.useForm();

    const hospitalType = [{
        label: "Public",
        value: "Public"
    },
    {
        label: "Private",
        value: "Private"
    }]

    const handleSubmit = async (values) => {
        try {
            // if (method === "put") {
            //     await axios.put('http://localhost:5000/api/hospital/update', { id: product._id, updatedValues: values }).then(() => {
            //         if (onUpdate) {
            //             onUpdate();
            //         }
            //     });
            // }
            // else if (method === "post") {
            //     await axios.post('http://localhost:5000/api/hospital/create', values).then(() => {
            //         if (onUpdate) {
            //             onUpdate();
            //         }
            //     });
            // }
            console.log(values)
            onClose();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <Modal
            title="Update Product"
            open={visible}
            style={{ top: 15 }}
            onCancel={onClose}
            footer={
                <Stack direction={"row"} justifyContent={"space-around"}>
                    <Button key="cancel" onClick={onClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button
                        key="submit"
                        type="primary"
                        variant="contained"
                        onClick={() => form.submit()}
                    >
                        Submit
                    </Button>
                </Stack>
            }
        >
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                initialValues={product}
            >
                {/* Name */}
                <Form.Item
                    name="name"
                    label="Name"
                    style={{ marginBottom: "12px" }}
                    rules={[{ required: true, message: "Please input the Hospital Name!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                {/* Postal Code */}
                <Form.Item
                    name="postalcode"
                    label="Postal Code"
                    style={{ marginBottom: "12px" }}
                    rules={[{ required: true, message: "Please input the Postal Code!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                {/* address */}
                <Form.Item
                    name="address"
                    label="Full Address"
                    style={{ marginBottom: "12px" }}
                    rules={[{ required: true, message: "Please input the full Address!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                {/* established Date */}
                <Form.Item
                    name="establishedDate"
                    label="Established Date"
                    style={{ marginBottom: '12px' }}
                    rules={[{ required: true, message: 'Please input the Established Date!' }]}
                >
                    <DatePicker
                        style={{ width: 400 }}
                        // showTime
                        format="YYYY-MM-DDTHH:mm:ss.SSSZ"
                    />
                </Form.Item>

                {/* services */}
                <Form.Item
                    name="services"
                    label="Services"
                    style={{ marginBottom: "12px" }}
                    rules={[{ required: true, message: "Please input the Rating!" }]}
                >
                    <ServicesDropDown
                        // value={form.getFieldValue('services')}
                        onChange={(value) => form.setFieldsValue({ services: value })}
                    />
                </Form.Item>

                {/* availability */}
                <Form.Item
                    name="availability"
                    label="Availability"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please input the Availability!" },
                    ]}
                >
                    <Select placeholder="Select Availability" style={{ width: 400 }}>
                        <Select.Option key="yes" value="yes">
                            In Stock
                        </Select.Option>
                        <Select.Option key="no" value="no">
                            Out of Stock
                        </Select.Option>
                    </Select>
                </Form.Item>

                {/* rating */}
                <Form.Item
                    name="rating"
                    label="Rating"
                    style={{ marginBottom: "12px" }}
                    rules={[{ required: true, message: "Please input the Rating!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>

                {/* discount */}
                <Form.Item
                    name="discount"
                    label="Discount"
                    style={{ marginBottom: '12px' }}
                    rules={[{ required: true, message: "Please input the Discount!" }]}
                >
                    <Input style={{ width: 400 }} type="number" min={0} max={100} />
                </Form.Item>

                {/* Hospital Type */}
                <Form.Item
                    name="type"
                    label="Hospital Type"
                    style={{ marginBottom: "12px" }}
                    rules={[
                        { required: true, message: "Please input the Hospital Type!" },
                    ]}
                >
                    <Select placeholder="Select Company" style={{ width: 400 }}>
                        {hospitalType.map((item) => (
                            <Select.Option key={item.value} value={item.value}>
                                {item.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};


export default Popup;