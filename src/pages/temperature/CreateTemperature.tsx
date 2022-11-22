import React from 'react';
import { Button, Space } from 'antd';
import CreateForm from './../../components/CreateForm';

export default () => {
    const onSaveClick = ()=>{
        //TODO: call api with create
        console.log('CREATE')
    }
    return (
        <Space direction="vertical">
            <CreateForm />
            <Button  key='save' type='primary' onClick={onSaveClick}>
                Save
            </Button>
        </Space>
    );
};
