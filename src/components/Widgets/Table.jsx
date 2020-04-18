import React from 'react'
import { Table, Tag } from 'antd';
import WidgetCard from '../../WidgetCard';
import withConentLoader from '../../HOC/WithContentLoader';

// TODO 
// Move columns to the api
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                <a>Delete</a>
            </span>
        ),
    },
];



const SimpleTable = (props) => (
    <WidgetCard p={0}>
        <Table columns={columns} dataSource={props.data}
            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
        />
    </WidgetCard>
)

export default withConentLoader(SimpleTable, 'data');