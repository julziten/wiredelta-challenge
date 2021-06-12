import React, { useState } from 'react';
import { Form, Input, Cascader, Select, Checkbox, Button, AutoComplete, Radio } from 'antd';

// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';


const { Option } = Select;


const residences = [
    {
      value: 'denmark',
      label: 'Denmark',
      children: [
        {
          value: 'copenhagen',
          label: 'Copenhagen',
          children: [
            {
              value: 'Ostebro',
              label: 'Ostebro',
            },
          ],
        },
      ],
    },
    {
      value: 'argentina',
      label: 'Argentina',
      children: [
        {
          value: 'buenos aires',
          label: 'Buenos Aires',
          children: [
            {
              value: 'belgrano',
              label: 'Belgrano',
            },
          ],
        },
      ],
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

  const skills = ['Patience', 'Serenity', 'Gratitude', 'Strength', 'Courage', 'Joy', 'Peace', 'Forgiveness'];
  
  export const VolunteerForm = React.forwardRef ( ( props, ref ) => {
    const [ form ] = Form.useForm();
  
    const hanldeJoin = (values) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="45">+45</Option>
          <Option value="54">+54</Option>
        </Select>
      </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  
    const onWebsiteChange = (value) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map((website) => ({
      label: website,
      value: website,
    }));
    return (
      <div className="form__container" ref={ ref } >

        <h2>Apply here and join to our <span>amazing</span> team!</h2>

            <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={ hanldeJoin }
                    initialValues={{
                    residence: ['Argentina', 'Buenos Aires', 'Belgrano'],
                    prefix: '54',
                    }}
                    scrollToFirstError
                >

                    <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                        type: 'string',
                        },
                        {
                        required: true,
                        message: 'Please input your name!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    name="username"
                    label="Username"
                    tooltip="This is going to be your registered username, be creative!"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        whitespace: true,
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    
                    <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                        },
                        {
                        required: true,
                        message: 'Please input your E-mail!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
            
                    <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                    >
                    <Input.Password />
                    </Form.Item>
            
                    <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                        required: true,
                        message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                            }
            
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                        }),
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>
            
                    <Form.Item
                    name="residence"
                    label="Residence"
                    rules={[
                        {
                        type: 'array',
                        required: true,
                        message: 'Please select your actual residence!',
                        },
                    ]}
                    >
                    <Cascader options={residences} />
                    </Form.Item>
            
                    <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your phone number!',
                        },
                    ]}
                    >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                        width: '100%',
                        }}
                    />
                    </Form.Item>
            
                    <Form.Item
                    name="website"
                    label="Website"
                    rules={[
                        {
                        required: true,
                        message: 'Please input website!',
                        },
                    ]}
                    >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                        <Input />
                    </AutoComplete>
                    </Form.Item>

                    <Form.Item name="gender" label="Select your gender">
                        <Radio.Group>
                            <Radio value="patience">Female</Radio>
                            <Radio value="serenity">Male</Radio>
                            <Radio value="gratitude">Non-binary</Radio>
                            <Radio value="strength">Trans</Radio>
                            <Radio value="courage">Other</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item name="skill" label="Select your skills">
                        <Checkbox.Group options={skills} />
                    </Form.Item>

                    <Form.Item name={['user', 'more-info']} label="Anything else you want to share?">
                        <Input.TextArea />
                    </Form.Item>
            
                    <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                    >
                    <Checkbox>
                        I have read the <a href="/home">agreement</a>
                    </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="form__btn">
                            Join Us
                        </Button>
                    </Form.Item>
                </Form>
      </div>
    );
  }

  );