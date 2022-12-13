import React,{useState,useEffect} from 'react';
import { Button, Form, Input, Select,Checkbox } from 'antd';
import {BsFillPersonFill} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {RiLockPasswordFill,RiLockPasswordLine} from 'react-icons/ri'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const AntDesignForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  useEffect(() => {
    forceUpdate({});
  }, []);
  const formParts=[
    {   name:"name",
        placeholder:"Your name",
        icon:<BsFillPersonFill className="text-lg " />,
    },
    {
        name:"email",
        placeholder:"Your email",
        icon:<AiTwotoneMail className="text-lg " />,
    },
    {
        name:"password",
        placeholder:"Password",
        icon:<RiLockPasswordFill className="text-lg " />,
    },
    {
        name:"rPassword",
        placeholder:"Repeat your password",
        icon:<RiLockPasswordLine className="text-lg " />,
    }
  ]
  return (
    <Form form={form} name="control-hooks"  className="w-fit flex flex-col justify-start items-start">
        {formParts.map(formPart=>(

      <Form.Item
        name={formPart.name}
        className="flex flex-row border-b border-black"
        rules={[
          {
            required: true,
          },
        ]}
      >

        {/* {formPart.icon} */}
        <Input prefix={formPart.icon} className=" w-96 border-none outline-none " placeholder={formPart.placeholder}/>
      </Form.Item>
        ))}
        <Form.Item>
        <Form.Item name="remember" valuePropName="unchecked" noStyle>
          <Checkbox>I agree all statements in </Checkbox>
        </Form.Item>
        <a className="underline" href="">
          Terms of service
        </a>
    
      </Form.Item>

      <Form.Item shouldUpdate>
        <Button  htmlType="submit"
        
         className="bg-blue-500 font-semibold text-white h-16 w-32">
          Register
        </Button>
      </Form.Item>
      
    
    </Form>
  );
};
export default AntDesignForm;