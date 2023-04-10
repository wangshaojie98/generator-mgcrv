/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Row, Space } from 'antd'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { Box, FlexBox, AbsoluteBox, Text } from '../../styled_components/base'
import { type FormField, Model } from './useModel'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 500px;
  background-color: #f5f5f5;
  padding: 20px;
`

const App: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<FormField>()
  const [model] = useState(() => new Model({ form, navigate }))

  useEffect(() => {
    model.getValidateId()
  }, [])

  return (
    <Container>
      <h1>login2</h1>
      <Form
        labelAlign="left"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        form={form}
        initialValues={model.initialValues}
        onValuesChange={model.onFormChange}
        onFinish={model.onFinish}
      >
        <Form.Item name="phone">
          <Input prefix={<span>+86</span>} placeholder="请输入手机号码" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item name="validateCode">
          <div className="login_form_item_wrap">
            <Input placeholder="请输入图形验证码" />
            {model.validateId && (
              <img
                id="captcha_img"
                onClick={model.onValidateCodeChange}
                src={`/api/neptune/system/validate_pic?validate_id=${model.validateId}&get_stream_response=1`}
                width={120}
                height={48}
                style={{ cursor: 'pointer' }}
              />
            )}
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Row justify={'end'}>
            <Space>
              <Button htmlType="button" onClick={model.onReset}>
                重置
              </Button>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Space>
          </Row>
        </Form.Item>
      </Form>
      <FlexBox justifyContent={'center'}>123</FlexBox>
      <Box display={'flex'} justifyContent={'center'}>
        123
      </Box>
      <AbsoluteBox place="center">
        <Box backgroundColor={'red'} style={{ width: 150, height: 230 }}>
          本题学生暂未上传做答图片
        </Box>
      </AbsoluteBox>
      <AbsoluteBox place="top">
        <Text.Paragraph>本题学生暂未上传做答图片</Text.Paragraph>
      </AbsoluteBox>
      <AbsoluteBox place="bottom">
        <Text.Paragraph>本题学生暂未上传做答图片</Text.Paragraph>
      </AbsoluteBox>
      <AbsoluteBox place="left">
        <Text.Paragraph>本题学生暂未上传做答图片</Text.Paragraph>
      </AbsoluteBox>
      <AbsoluteBox place="right">
        <Text.Paragraph>本题学生暂未上传做答图片</Text.Paragraph>
      </AbsoluteBox>
    </Container>
  )
}

export default observer(App)
