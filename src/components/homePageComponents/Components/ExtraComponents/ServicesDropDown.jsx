// import React, { useRef, useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Button, Divider, Input, Select, Space, Tag } from 'antd';
// let index = 0;

// const ServicesDropDown = () => {
//     const [items, setItems] = useState(['jack', 'lucy']);
//     const [name, setName] = useState('');
//     const inputRef = useRef(null);
//     const onNameChange = (event) => {
//         setName(event.target.value);
//     };
    
//     const addItem = (e) => {
//         e.preventDefault();
//         setItems([...items, name || `New item ${index++}`]);
//         setName('');
//         setTimeout(() => {
//             inputRef.current?.focus();
//         }, 0);
//     };

//     return (
//         <Select
//             mode='multiple'
//             style={{
//                 width: 300,
//             }}
//             placeholder="select Services"
//             dropdownRender={(menu) => (
//                 <>
//                     {menu}
//                     <Divider
//                         style={{
//                             margin: '8px 0',
//                         }}
//                     />
//                     <Space
//                         style={{
//                             padding: '0 8px 4px',
//                         }}
//                     >
//                         <Input
//                             placeholder="Please enter item"
//                             ref={inputRef}
//                             value={name}
//                             onChange={onNameChange}
//                             onKeyDown={(e) => e.stopPropagation()}
//                         />
//                         <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
//                             Add item
//                         </Button>
//                     </Space>
//                 </>
//             )}
//             options={items.map((item) => ({
//                 label: item,
//                 value: item,
//             }))}
//         />
//     );
// };
// export default ServicesDropDown;

import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';

const ServicesDropDown = ({ value = [], onChange, ...props }) => {
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        if (name) {
            setItems([...items, name]);
            setName('');
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    };

    return (
        <Select
            mode="multiple"
            style={{
                width: 400,
                ...props.style,
            }}
            placeholder="Select Services"
            value={value}
            onChange={onChange}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider
                        style={{
                            margin: '8px 0',
                        }}
                    />
                    <Space
                        style={{
                            padding: '0 8px 4px',
                        }}
                    >
                        <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                        />
                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                            Add item
                        </Button>
                    </Space>
                </>
            )}
            options={items.map((item) => ({
                label: item,
                value: item,
            }))}
        />
    );
};

export default ServicesDropDown;
