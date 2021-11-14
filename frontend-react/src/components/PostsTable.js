import { Table, Space } from 'antd';
import { Link } from "react-router-dom";

export const getFullDate = (date) => {
    const origDateTime = date.split(/T|\./) 
    let res = origDateTime[0].split("-").reverse().join("-");
    res = res.concat(" ", origDateTime[1]);
    return res;
};

function PostsTable({posts}) {
    

    function makeDeleteRequest(post_id) {
      fetch('http://localhost:8081/api/posts/delete/' + post_id, 
          { method: 'DELETE' }
      ).then( () => {
          window.location.reload(false)
      }); 
    }

    const columns = [
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'User',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title: 'Created',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: ((date) => getFullDate(date))
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Link to={"/editpost/" + posts[posts.indexOf(record)]._id }>
                    <button>Edit</button>
                </Link>
                {/* <a href={ "editpost/" + posts[posts.indexOf(record)]._id }>Edit</a> */}
                <button onClick={() => makeDeleteRequest(posts[posts.indexOf(record)]._id)}>Delete</button>
              </Space>
            ),
        },
      ];
    
    return (
        <Table columns={columns} dataSource={posts} rowKey={record => record.index}>
            <tbody>
              {columns.map((column, index) => (
                <row>
                  <td>{index}</td>
                </row>
              ))}
            </tbody>
        </Table>
    );
}

export default PostsTable;