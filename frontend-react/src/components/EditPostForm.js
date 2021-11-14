import { Form, Input, Button, Row, Col} from 'antd';
import "./css/AddPostForm.css";


function EditPostForm(props) {
    
    function postEditHandler(values) {
        props.onEditPost(values);
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
    <div >
        <Form {...layout} name="nest-messages" onFinish={postEditHandler} size='middle' validateMessages={validateMessages} initialValues={{ user: props.dataAboutPost[0].user, content: props.dataAboutPost[0].content}}>
            
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
                        <Input placeholder="Username"/>
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


export default EditPostForm;