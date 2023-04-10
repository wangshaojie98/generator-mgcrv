import React, { useState } from 'react'
import { Button, Form, Input, Select, Row, Space } from 'antd'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { type FormField, Model3 } from './useModel'

const Container = styled.div`
  width: 500px;
  background-color: #f5f5f5;
  padding: 20px;
`

const Box = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  height: 200px;
  overflow-y: auto;
`

const App: React.FC = observer(() => {
  const [form] = Form.useForm<FormField>()
  const [model] = useState(() => new Model3({ form }))
  const { onFormChange, onFinish, onReset, options, initialValues, records, total } = model

  return (
    <Container>
      <Form
        labelAlign="left"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        form={form}
        initialValues={initialValues}
        onValuesChange={onFormChange}
        onFinish={onFinish}
        // layout="inline"
      >
        <Form.Item label="单价" rules={[{ required: true, message: '请输入单价!' }]} name="price">
          <Input placeholder="请输入单价" />
        </Form.Item>
        <Form.Item
          label="数量"
          name={'amount'}
          rules={[{ required: true, message: '请输入数量!' }]}
        >
          <Input placeholder="请输入数量" />
        </Form.Item>
        <Form.Item
          label="计算方式"
          rules={[{ required: true, message: '请选择计算方式!' }]}
          name="type"
        >
          <Select options={options} placeholder="请选择计算方式" style={{ width: 200 }}></Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Row justify={'end'}>
            <Space>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Space>
          </Row>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Box>
            {records.map((it, idx) => (
              <Row key={idx}>{it}</Row>
            ))}
          </Box>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Row justify={'end'}>总计：{total}</Row>
        </Form.Item>
      </Form>
    </Container>
  )
})

export default App
