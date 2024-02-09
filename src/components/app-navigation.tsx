import { Modal, Tree, TreeDataNode, TreeProps, Input, Divider, Tag, Button, Typography, MenuProps, Dropdown, Space } from "antd";
import { useState, useCallback, useEffect } from "react";
import { PlusOutlined, DashboardOutlined, FastBackwardOutlined, DownOutlined, StepBackwardOutlined, StepForwardOutlined, FastForwardOutlined, PlusCircleOutlined, LinkOutlined, BankOutlined, EditOutlined, DeleteOutlined, UserOutlined, CalendarOutlined, AppstoreOutlined, MessageOutlined, SettingOutlined, InboxOutlined } from '@ant-design/icons';
import { TreeNode } from "antd/es/tree-select";


export default function AppNavigation(data: any) {
    const options = [{
        key: 'PlusOutlined',
        component: <PlusOutlined />
    },
    {
        key: 'DashboardOutlined',
        component: <DashboardOutlined />
    },
    {
        key: 'FastBackwardOutlined',
        component: <FastBackwardOutlined />
    },
    {
        key: 'StepBackwardOutlined',
        component: <StepBackwardOutlined />
    },
    {
        key: 'StepForwardOutlined',
        component: <StepForwardOutlined />
    },
    {
        key: 'BankOutlined',
        component: <BankOutlined /> 
    },
    {
        key: 'UserOutlined',
        component: <UserOutlined />
    },
    {
        key: 'CalendarOutlined',
        component: <CalendarOutlined />
    },
    {
        key: 'AppstoreOutlined',
        component: <AppstoreOutlined />
    },
    {
        key: 'InboxOutlined',
        component: <InboxOutlined />
    },
    {
        key: 'SettingOutlined',
        component: <SettingOutlined />
    },
    {
        key: 'MessageOutlined',
        component: <MessageOutlined />
    }];

    const setupNavigationItem: any = (navigationObject: any) => {
        const icon = options.find((element: any) => element.key === navigationObject.icon)
        let iconComponent: any = null
        if (icon && icon.component) iconComponent = icon.component
        let children = []
        if (navigationObject.routes && navigationObject.routes.length > 0) {
            for (const childRoute of navigationObject.routes) {
                children.push(setupNavigationItem(childRoute))
            }
        }
        children.push({
            key: navigationObject.key + '-add_new_nondraggable',
            name: 'Add new item',
            title: (
                <span className="flex w-full justify-between">
                    <div className="flex">
                        <span onClick={() => prepareAddToTreeModal(navigationObject.key + '-add_new_nondraggable')}><PlusOutlined /> Add new item</span>
                    </div>
                </span>
            ),
            children: [],
            nodeDraggable: false
        })
        return {
            key: navigationObject.key,
            name: navigationObject.name,
            path: navigationObject.path,
            component: navigationObject.component,
            nodeDraggable: true,
            title: (
                <span className="flex w-full justify-between">
                    <div className="flex">
                        <div className="inline-block mr-4">{iconComponent}</div>
                        <span>{navigationObject.name}</span>
                    </div>
                    <div className="flex">
                        <EditOutlined onClick={() => prepareUpdateModal(navigationObject.key, navigationObject.name, navigationObject.path, navigationObject.component, icon )}/>
                        <DeleteOutlined onClick={() => removeFromTree(navigationObject.key)}/>
                    </div>
                </span>
            ),
            children: children
        }
    }
    const formatInitialData = () => {
        let defaultData: any[] = []
        console.log('data na pocetku')
        console.log(data)
        for (const d of data.data) {
            defaultData.push(setupNavigationItem(d))
        }
        defaultData.push(
            {
                key: 'top-level-item-add_new_nondraggable',
                name: 'Add new item',
                title: (
                    <span className="flex w-full justify-between">
                        <div className="flex">
                            <span onClick={() => addNewTopLevelItem(key)}><PlusOutlined className="mr-4"/> Add new item</span>
                        </div>
                    </span>
                ),
                children: [],
                draggable: false
            }
        )
        console.log('default data kreirano:')
        console.log(defaultData)
        return defaultData
    }
    const [dta, setDta] = useState(() => {
        const initialState = formatInitialData();
        return initialState;
    })

    const [tables, setTables] = useState([null])

    useEffect(() => {
        // This code will run after dta state has been updated
        console.log('UPDATEAN JE SET DTA');
        console.log(dta);
    }, [dta]);
    // const [dta, setDta] = useState<any[]>(() => { 
    //     let defaultData: any[] = []
    //     console.log('data na pocetku')
    //     console.log(data)
    //     for (const d of data) {
    //         defaultData.push(setupNavigationItem(d))
    //     }
    //     defaultData.push(
    //         {
    //             key: 'top-level-item-add',
    //             name: 'Add new item',
    //             title: (
    //                 <span className="flex w-full justify-between">
    //                     <div className="flex">
    //                         <span onClick={() => addNewTopLevelItem(key)}><PlusOutlined className="mr-4"/> Add new item</span>
    //                     </div>
    //                 </span>
    //             ),
    //             children: []
    //         }
    //     )
    //     console.log('default data kreirano:')
    //     console.log(defaultData)
    //     return defaultData 
    // });
    const [selectedIcon, setSelectedIcon] = useState({
        component: null,
        key: null
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState<any>({})
    const [key, setKey] = useState('')
    const [name, setName] = useState('')
    const [path, setPath] = useState('')
    const [component, setComponent] = useState('')
    const [action, setAction] = useState('')

    console.log('line 166')
    console.log(dta)

    const removeNavigationitem = (treeData: any[], objectKey: any) => {
        let tree = []
        for (const data of treeData) {
            console.log(data.key)
            console.log(objectKey[0])
            if (data.key !== objectKey[0]) {
                console.log('not the same')
                console.log(data.key)
                console.log(objectKey)
                if (data.children && data.children.length > 0) {
                    const objectData = removeNavigationitem(data.children, objectKey)
                    data.children = objectData
                }
                tree.push(data)
            }
        }
        return tree
    }

    const removeFromTree = (objectKey: any) => {
        setSelectedKey(objectKey)
        setIsDeleteModalOpen(true)
    }

    const prepareUpdateModal = (objectKey: any, objectName: any, objectPath: any, objectComponent: any, objectIcon: any) => {
        setKey(objectKey)
        setName(objectName)
        setPath(objectPath)
        setComponent(objectComponent)
        setSelectedKey(objectKey)
        if (objectIcon) {
            const i:any = options.find((element: any) => element.key === objectIcon.key)
            if (i && i !== null) setSelectedIcon(i)
        }
        setAction('update')
        showModal()
    }

    const prepareAddToTreeModal = (objectKey: any) => {
        setAction('add')
        showModal()
    }

    const addNewTopLevelItem = (objectKey: any) => {
        setAction('add-top-level')
        showModal()
    }

    const showModal = () => {
        setIsModalOpen(true);
    };


    const addTopLevelToTree: any = (tree: any[], iconComponent: any) => {
        const item = {
            key: key,
            name: name,
            path: path,
            component: component,
            title: (
                <span className="flex w-full justify-between">
                    <div className="flex">
                        <div className="inline-block mr-4">{iconComponent}</div>
                        <span>{name}</span>
                    </div>
                    <div className="flex">
                        <EditOutlined onClick={() => prepareUpdateModal(key, name, path, component, iconComponent )}/>
                        <DeleteOutlined onClick={() => removeFromTree(key)}/>
                    </div>
                </span>
            ),
            children: [{
                key: key + '-add_new_nondraggable',
                name: 'Add new item',
                title: (
                    <span className="flex w-full justify-between">
                        <div className="flex">
                            <span onClick={() => prepareAddToTreeModal(key + '-add_new_nondraggable')}><PlusOutlined /> Add new item</span>
                        </div>
                    </span>
                ),
                children: [],
                draggable: false,
                icon: false
            }]
        }
        const treeCount = tree.length
        tree.splice(treeCount-1, 0, item)
        return tree
    }

    const addToTree: any = (tree: any[], iconComponent: any) => {
        console.log('selected Key for adding:')
        console.log(selectedKey)
        let refreshedTree = []
        for (const treeNode of tree) {
            if (!treeNode.children || treeNode.children === null) treeNode.children = []
            if (selectedKey !== null && selectedKey.length === 1 && treeNode.key === selectedKey[0]) {
                return true
            } else {
                const isValid = addToTree(treeNode.children, iconComponent)
                console.log('is valid: ')
                console.log(isValid)
                if (isValid === true) {
                    const item = {
                        key: key,
                        name: name,
                        path: path,
                        component: component,
                        title: (
                            <span className="flex w-full justify-between">
                                <div className="flex">
                                    <div className="inline-block mr-4">{iconComponent}</div>
                                    <span>{name}</span>
                                </div>
                                <div className="flex">
                                    <EditOutlined onClick={() => prepareUpdateModal(key, name, path, component, iconComponent )}/>
                                    <DeleteOutlined onClick={() => removeFromTree(key)}/>
                                </div>
                            </span>
                        ),
                        children: [{
                            key: key + '-add_new_nondraggable',
                            name: 'Add new item',
                            title: (
                                <span className="flex w-full justify-between">
                                    <div className="flex">
                                        <span onClick={() => prepareAddToTreeModal(key + '-add_new_nondraggable')}><PlusOutlined /> Add new item</span>
                                    </div>
                                </span>
                            ),
                            children: [],
                            draggable: false,
                            icon: false
                        }]
                    }
                    const childrenCount = treeNode.children.length
                    treeNode.children.splice(childrenCount-2, 0, item)
                }
                refreshedTree.push(treeNode)
            }
        }
        return refreshedTree
    }

    const updateTree = (tree: any, iconComponent: any) => {
        let updatedTree = []
        for (let node of tree) {
            if (selectedKey && selectedKey.length > 0 && selectedKey[0] === node.key) {
                //change object, add to refreshed array
                node.key = key
                node.name = name
                node.component = component
                node.path = path
                node.title = (
                    <span className="flex w-full justify-between">
                        <div className="flex">
                            <div className="inline-block mr-4">{iconComponent}</div>
                            <span>{name}</span>
                        </div>
                        <div className="flex">
                            <EditOutlined onClick={() => prepareUpdateModal(key, name, path, component, iconComponent )}/>
                            <DeleteOutlined onClick={() => removeFromTree(key)}/>
                        </div>
                    </span>
                )
            } else {
                //not the right node - check the children
                if (node.children && node.children.length > 0) {
                    const childrenNodes = updateTree(node.children, iconComponent)
                    node.children = childrenNodes
                }
            }
            updatedTree.push(node)
        }
        return updatedTree
    }

    const handleOk = () => {
        setIsModalOpen(false);

        let iconComponent = null
        for (const icon of options) {
            if (icon.key === selectedIcon.key) {
                iconComponent = icon.component
            }
        }

        let newData = [...dta]
        let result = null
        if (action === 'update') {
            result = updateTree(newData, iconComponent)
            console.log('showing updated result')
            console.log(result)
            setDta([...result])
            // callback([...result])
            setAction('')
        }
        if (action === 'add') {
            result = addToTree(newData, iconComponent)
            console.log(result)
            setDta([...result])
            // callback([...result])
            setAction('')
        }
        if (action === 'add-top-level') {
            result = addTopLevelToTree(newData, iconComponent)
            console.log(result)
            setDta([...result])
            // callback([...result])
            setAction('')
        }
    };

    const handleDeleteOk = () => {
        setIsDeleteModalOpen(false);
        let newData = [...dta]
        let result = null
        console.log('remove from tree - object key:' + selectedKey)
        console.log('data from state')
        console.log(dta)
        const processedData = removeNavigationitem(newData, selectedKey)
        console.log('REMOVE DATA')
        console.log(processedData)
        setDta([...processedData])
        // callback(newData)
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onDragEnter: TreeProps['onDragEnter'] = (info) => {
        console.log(info);
        // expandedKeys, set it when controlled is needed
        // setExpandedKeys(info.expandedKeys)
      };
    
      const onDrop: TreeProps['onDrop'] = (info) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        if (!dropKey.toString().endsWith('-add_new_nondraggable')) {
            const dropPos = info.node.pos.split('-');
            const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1
        
            const loop = (
            data: TreeDataNode[],
            key: React.Key,
            callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void,
            ) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                return callback(data[i], i, data);
                }
                if (data[i].children) {
                loop(data[i].children!, key, callback);
                }
            }
            };
            const data = [...dta];
        
            // Find dragObject
            let dragObj: TreeDataNode;
            loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
            });
        
            if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
            } else {
            let ar: TreeDataNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i!, 0, dragObj!);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i! + 1, 0, dragObj!);
            }
            }
            setDta(data);
        }
      };

      const handleOnDragStart: TreeProps['onDragStart'] = info => {
        const dropKey = info.node.key;
        if (dropKey.toString().endsWith('-add_new_nondraggable')) {
            info.event.preventDefault()
        }
      }
    

    // Function to handle option selection
    const handleOptionSelect = (option: any) => {
        console.log('setting option:')
        console.log(option)
        setSelectedKey(option);
    };

    const handleIconSelect = (option: any) => {
        console.log('setting option:')
        console.log(option)
        setSelectedIcon(option);
    };

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'invoices',
        },
        {
          key: '2',
          label: 'contracts'
        },
        {
          key: '3',
          label: 'clients'
        }
    ];

    const addNewTable = () => {
        setTables([...tables, null])
    }

    const selectTable = (data: any) => {
        console.log(data)
    }

    return (
      <>
        <Tree
            className="draggable-tree"
            blockNode
            showIcon
            draggable
            onDragStart={handleOnDragStart}
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            onSelect={handleOptionSelect}
            treeData={dta}
        />
        {
            tables.forEach(element => {
                <div>
                    <Typography.Title level={5}>Tables</Typography.Title>
                    <Dropdown menu={{ items }}>
                        <div onClick={(e) => selectTable(e)}>
                            <Space>
                                Tables
                                <DownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                </div>
            })
        }
        <PlusCircleOutlined onClick={() => { addNewTable() }}/>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <label>Key</label>
            <Input placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
            <Divider />
            <label>Name</label>
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Divider />
            <label>Path</label>
            <Input placeholder="Path" value={path} onChange={(e) => setPath(e.target.value)} />
            <Divider />
            <label>Component</label>
            <Input placeholder="Component" value={component} onChange={(e) => setComponent(e.target.value)} />
            <Divider />
            <label>Icon</label>
            <div className="flex w-full justify-between">
                {options.map((option) => (
                    <div
                        key={option.key}
                        onClick={() => handleIconSelect(option)}
                        style={{
                        cursor: 'pointer',
                        border: option.key === selectedIcon.key ? '2px solid black' : 'none',
                        padding: '0.5rem'
                        }}
                    >
                        {option.component}
                    </div>
                    ))
                }
            </div>
        </Modal>
        <Modal title="Delete Modal" open={isDeleteModalOpen} onOk={handleDeleteOk} onCancel={handleDeleteCancel}>
            <label>Are you sure you want to delete the record?</label>
        </Modal>
      </>
    );
  }

