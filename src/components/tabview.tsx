import { Button, Input, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useState, useRef } from "react";
import { EditOutlined } from '@ant-design/icons';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return { label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id };
});

export default function Tabview(data: any) {

    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);
    const [editable, setEditable] = useState(false);
    const [editTextValue, setEditTextValue] = useState<string>()
    const newTabIndex = useRef(0);
    const [tabValues, setTabValues] = useState<any[]>([
        {
            key: '1',
            editable: false,
            value: ''
        }
    ])

    const onChange = (key: string) => {
        setActiveKey(key);
    };

    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
        setActiveKey(newActiveKey);

        const tabs = [...tabValues]
        const newTab = {
            key: String(tabs.length + 1),
            editable: false,
            value: ''
        }
        tabs.push(newTab)
        setTabValues(tabs)

    };

    const remove = (targetKey: TargetKey) => {
        const tabs = [...tabValues]
        const newTabs = []
        for (const tab of tabs) {
            if (tab.key !== targetKey) {
                newTabs.push(tab)
            }
        }
        setTabValues([...newTabs])
    };

    const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
        add();
        } else { 
        remove(targetKey);
        }
    };

    const handleEditRequest = (key: any) => {
        const tabs = [...tabValues]
        for (const tab of tabs) {
            if (tab.key === key) {
                tab.editable = true
            }
        }
        setTabValues([...tabs])
    };

    const handleInputTextChange = (event: any) => {
        setEditTextValue(event.target.value)
    }

    const handleSubmit = (key: any) => {
        const tabs = [...tabValues]
        const text = editTextValue
        for (const tab of tabs) {
            if (tab.key === key) {
                tab.value = text
                tab.editable = false
            }
        }
        setTabValues([...tabs])
        setEditTextValue('')
    };

    return (
      <>
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button onClick={add}>ADD</Button>
            </div>
            <Tabs
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}>
                    {tabValues.map((value) => (
                        <TabPane
                            tab={
                                <div>
                                    {value.editable ? (
                                        <div className="w-full">
                                            <Input
                                                onKeyDown={(e) => e.stopPropagation()}
                                                onChange={(e) => handleInputTextChange(e)}
                                                className="w-auto"
                                                defaultValue={value.value}
                                            />
                                            <Button onClick={() => handleSubmit(value.key)}>Submit</Button>
                                        </div>
                                    ) : (
                                        value.value === '' ? (
                                            <div>
                                                Click on icon to edit <EditOutlined onClick={() => handleEditRequest(value.key)}/>
                                            </div>
                                        ) : (
                                            <div>
                                                {value.value} <EditOutlined onClick={() => handleEditRequest(value.key)}/>
                                            </div>
                                        )
                                    )}
                                </div>
                            }
                            key={value.key}>
                        </TabPane>
                    ))}
                {/* <TabPane
                    tab={
                        <div
                        >
                            {editable ? (
                                <div className="w-full">
                                    <Input
                                        onKeyDown={(e) => e.stopPropagation()}
                                        onChange={(e) => handleInputTextChange(e)}
                                        className="w-auto"
                                        value={}
                                    />
                                    <Button onClick={() => handleSubmit()}>Submit</Button>
                                </div>
                            ) : (
                                <div>
                                    Click on icon to edit <EditOutlined onClick={() => handleEditRequest()}/>
                                </div>
                            )}
                        </div>
                    }
                    key={String(key)}
                    ></TabPane>
                <TabPane tab="dsadad" key="2"></TabPane> */}
            </Tabs>
        </div>
      </>
    );
  }

