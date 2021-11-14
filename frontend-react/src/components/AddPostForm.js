import { Form, Input, Button, Row, Col} from 'antd';
import "./css/AddPostForm.css";


function AddPost(props) {
    
    function formSubmitHandler(values) {
        console.log(values);
        props.onAddPost(values);
    }

    const layout = {
        labelCol: {
          span: 25,
        },
        wrapperCol: {
          span: 25,
        },
    };

    const validateMessages = {
        required: 'Required!',
    };
    
    return (
    <div>
        <Form {...layout} name="nest-messages" onFinish={formSubmitHandler} size='middle' validateMessages={validateMessages}>
            
            <Row justify="center" align="middle">
                <Col span="12">
                    <Form.Item
                    name={'user'}
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input placeholder='Username'/>
                    </Form.Item>
                </Col>
            </Row>
            
            <Row justify="center" align="middle">
                <Col span="12">
                    <Form.Item 
                    name={'content'} 
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                        <Input.TextArea placeholder='Post content'/>
                    </Form.Item>
                </Col>
            </Row>

            <Row justify="center" align="middle">
                <Col span="12">
                    <Form.Item >
                        <Row justify="center" align="middle">
                            <Col>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
            </Row>
        </Form>

    </div>
    );
};


export default AddPost;