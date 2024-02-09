"use client";
import AppNavigation from "@/components/app-navigation";
import { QueryBuilderComponent } from "@syncfusion/ej2-react-querybuilder";
import { DrawerProps, RadioChangeEvent, Space, Radio, Button, Drawer, Collapse, MenuProps, Dropdown, Typography, Input, Select } from "antd";
import { PlusOutlined, DashboardOutlined, FastBackwardOutlined, DownOutlined, StepBackwardOutlined, StepForwardOutlined, FastForwardOutlined, PlusCircleOutlined, LinkOutlined, BankOutlined, EditOutlined, DeleteOutlined, UserOutlined, CalendarOutlined, AppstoreOutlined, MessageOutlined, SettingOutlined, InboxOutlined } from '@ant-design/icons';
import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants";
import { registerLicense } from '@syncfusion/ej2-base';
import { useCallback, useEffect, useState } from "react";
import { group } from "console";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVJyWmFZfVpgdV9EYVZRTGY/P1ZhSXxXdkdjXn5dcnVVTmZVU00="
);

const syncFusionJson2: any[] = [
  { 
    "isComplex": true, 
    "ignoreCase": true, 
    "ignoreAccent": false, 
    "condition": "and", 
    "predicates": [
      { 
        "isComplex": true, 
        "ignoreCase": true, 
        "ignoreAccent": false, 
        "condition": "or", 
        "predicates": [
          { 
            "isComplex": false, 
            "field": "StateID", 
            "operator": "equal", 
            "value": "4", 
            "ignoreCase": true, 
            "ignoreAccent": false 
          }, 
          { 
            "isComplex": false, 
            "field": "StateID", 
            "operator": "equal", 
            "value": "5", 
            "ignoreCase": true, 
            "ignoreAccent": false 
          }
        ] 
      }
    ] 
  }
]

const syncfusionJson: any[] = [
  {
    "isComplex": true,
    "ignoreCase": true,
    "ignoreAccent": false,
    "condition": "or",
    "predicates": [
      {
        "isComplex": true,
        "ignoreCase": true,
        "ignoreAccent": false,
        "condition": "and",
        "predicates": [
          {
            "isComplex": true,
            "ignoreCase": true,
            "ignoreAccent": false,
            "condition": "or",
            "predicates": [
              {
                "isComplex": false,
                "field": "a",
                "operator": "equal",
                "value": "8",
                "ignoreCase": true,
                "ignoreAccent": false
              },
              {
                "isComplex": false,
                "field": "e",
                "operator": "equal",
                "value": "8",
                "ignoreCase": true,
                "ignoreAccent": false
              }
            ]
          },
          {
            "isComplex": false,
            "field": "b",
            "operator": "equal",
            "value": "8",
            "ignoreCase": true,
            "ignoreAccent": false
          }
        ]
      },
      {
        "isComplex": true,
        "ignoreCase": true,
        "ignoreAccent": false,
        "condition": "and",
        "predicates": [
          {
            "isComplex": false,
            "field": "c",
            "operator": "equal",
            "value": "8",
            "ignoreCase": true,
            "ignoreAccent": false
          },
          {
            "isComplex": false,
            "field": "d",
            "operator": "equal",
            "value": "8",
            "ignoreCase": true,
            "ignoreAccent": false
          }
        ]
      }
    ]
  }
]

const data: any[] = [
  {
    "key": "Dashboard",
    "icon": "DashboardOutlined",
    "name": "Dashboard",
    "path": "/",
    "component": "/",
    "accessRoles": [
      "1"
    ]
  },
  {
    "key": "Properties",
    "icon": "BankOutlined",
    "name": "Properties",
    "path": "/properties",
    "routes": [
      {
        "key": "Property List",
        "name": "Property List",
        "path": "/properties",
        "component": "/properties"
      },
      {
        "key": "Add Property",
        "name": "Add Property",
        "path": "/properties/new",
        "component": "/properties/new"
      }
    ]
  },
  {
    "key": "Agents",
    "icon": "UserOutlined",
    "name": "Agents",
    "path": "/agents",
    "component": "/agents"
  },
  {
    "key": "Calendar",
    "icon": "CalendarOutlined",
    "name": "Calendar",
    "path": "/appointments",
    "component": "/appointments"
  },
  {
    "key": "Board",
    "icon": "AppstoreOutlined",
    "name": "Board",
    "path": "/board",
    "component": "/board"
  },
  {
    "key": "Mail",
    "icon": "InboxOutlined",
    "name": "Mail",
    "path": "/mail",
    "component": "/mail"
  },
  {
    "key": "Chat",
    "icon": "MessageOutlined",
    "name": "Chat",
    "path": "/chat",
    "component": "/chat"
  },
  {
    "key": "Settings",
    "icon": "SettingOutlined",
    "name": "Settings",
    "path": "/logout",
    "routes": [
      {
        "key": "Property Categories",
        "name": "Property Categories",
        "path": "/propertycategories",
        "component": "/propertycategories"
      }
    ]
  }
]

export default function Home() {
  const [navigationData, setNavigationData] = useState<any[]>([])
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  useEffect(() => {
    setNavigationData(data)
  }, [])

  const rule = {
    'condition': 'or',
    'rules': [
      {
        label: 'Title',
        field: 'Title',
        type: 'String',
        operator: 'endswith',
        value: 'representative'
      }
    ]
  };

  let columnData = [
    { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
    { field: 'FirstName', label: 'FirstName', type: 'string' },
    { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
    { field: 'Title', label: 'Title', type: 'string' },
    { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
    { field: 'Country', label: 'Country', type: 'string' },
    { field: 'City', label: 'City', type: 'string' }
  ];

  const columnData2 = [
    { field: 'a', label: 'a', type: 'number' },
    { field: 'b', label: 'b', type: 'number' },
    { field: 'c', label: 'c', type: 'string' },
    { field: 'd', label: 'd', type: 'number' },
    { field: 'e', label: 'e', type: 'string' }
  ]

  const columnData3 = [
    { field: 'StateID', label: 'State ID', type: 'number' }
  ]

  const rule2 = {
    'condition': 'or',
    'rules': [
      {
        'condition': 'and',
        'rules': [
          {
            'condition': 'or',
            'rules': [
              {
                'label': 'a',
                'field': 'a',
                'type': 'Number',
                'operator': 'equal',
                'value': '8'
              },
              {
                'label': 'e',
                'field': 'e',
                'type': 'Number',
                'operator': 'equal',
                'value': '8'
              }
            ]
          },
          {
            'label': 'b',
            'field': 'b',
            'type': 'Number',
            'operator': 'equal',
            'value': '8'
          }
        ]
      },
      {
        'condition': 'and',
        'rules': [
          {
            'label': 'c',
            'field': 'c',
            'type': 'Number',
            'operator': 'equal',
            'value': '8'
          },
          {
            'label': 'd',
            'field': 'd',
            'type': 'Number',
            'operator': 'equal',
            'value': '8'
          }
        ]
      }
    ]
  }

  const setRule = (json: any) => {
    if (!json) return null;

    if (json.isComplex) {
      const rules = json.predicates.map((predicate: any) => setRule(predicate));
      return { condition: json.condition, rules };
    } else {
      return {
        label: json.field,
        field: json.field,
        type: 'Number', // Assuming type is always 'Number' based on the provided input
        operator: json.operator,
        value: json.value
      };
    }
  }

  const rule3 = syncfusionJson.map(setRule)
  const rule4 = rule3[0]

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const handleCallback = (data: any) => {
    const navigation = setupData(data)
    setNavigationData(navigation)
  }

  const setupData: any = (data: any) => {
    const array = []
    for (const d of data) {
      if (d.name !== 'Add new item') {
        const item: any = {}
        item.key = d.key
        item.name = d.name
        item.path = d.path
        item.component = d.component
        if (d.children && d.children.length > 0) {
          const children = setupData(d.children)
          item.routes = children
        }
        array.push(item)
      }
    }
    return array
  }


  const [query, setQuery] = useState<any>({
    entitySlug: '',
    GroupBy: [],
    Aggregations: []
  })
  const [tables, setTables] = useState<any[]>([])
  const [dropdownItems, setDropdownItems] = useState<any[]>([])
  const [groupByDropdowns, setGroupByDropdowns] = useState<any[]>([])
  const [groupByDropdownItems, setGroupByDropdownItems] = useState<any[]>([])
  const [aggregationFieldDropdowns, setAggregationFieldDropdowns] = useState<any[]>([])
  const [aggregationFieldDropdownItems, setAggregationFieldDropdownItems] = useState<any[]>([])
  const [aggregateDropdowns, setAggregateDropdowns] = useState<any[]>([])
  const [aggregateDropdownItems, setAggregateDropdownItems] = useState<any[]>([])

  const items = [
    {
      value: 'invoices',
      label: 'invoices',
    },
    {
      value: 'contracts',
      label: 'contracts'
    },
    {
      value: 'clients',
      label: 'clients'
    }
  ]

  const fields = [
    {
      value: 'a',
      label: 'a'
    },
    {
      value: 'b',
      label: 'b'
    },
    {
      value: 'c',
      label: 'c'
    },
    {
      value: 'd',
      label: 'd'
    },
    {
      value: 'e',
      label: 'e'
    }
  ]

  const aggregateItems = [
    {
      value: 'count',
      label: 'Count'
    },
    {
      value: 'sum',
      label: 'Sum'
    },
    {
      value: 'average',
      label: 'Average'
    },
    {
      value: 'min',
      label: 'Min'
    },
    {
      value: 'max',
      label: 'Max'
    }
  ]
  useEffect(() => {
    setDropdownItems(items)
    setGroupByDropdownItems(fields)
    setAggregationFieldDropdownItems(fields)
    setAggregateDropdownItems(aggregateItems)

    let array = []
    array.push({value: null})
    setTables([...array])
    setGroupByDropdowns([...array])
    setAggregationFieldDropdowns([...array])
    setAggregateDropdowns([...array])
  }, [])

  const addNewTable = () => {
    if (items.length !== tables.length) {
      const newTables = []
      for (let table of tables) {
        newTables.push(table)
      }
      newTables.push({value: null})
      setTables(newTables)
      console.log(tables)
    }
  }

  const selectTable = (data: any) => {
    const lastElement = tables.length
    tables[lastElement - 1].value = data
    let newDropdownItems = []

    for (const item of items) {
      console.log(items)
      console.log(tables)
      let exists = false
      for (const table of tables) {
        if (item.value === table.value) {
          exists = true
        }
      }
      if (exists === false) newDropdownItems.push({value: item.value})
    }
    setDropdownItems(newDropdownItems)
    if (dropdownItems.length > 0) {
      const oldQuery = query
      const newQuery: any = {
        entitySlug: dropdownItems[0].value
      }
      if (oldQuery && oldQuery !== null && oldQuery['GroupBy']) {
        newQuery['GroupBy'] = oldQuery['GroupBy']
      } else {
        newQuery['GroupBy'] = []
      }

      if (oldQuery && oldQuery !== null && oldQuery['Aggregations']) {
        newQuery['Aggregations'] = oldQuery['Aggregations']
      } else {
        newQuery['Aggregations'] = []
      }
      setQuery(newQuery)
    }
  }

  const selectGroupBy = (data: any) => {
    console.log(data)
    console.log(groupByDropdowns)
    const lastElement = groupByDropdowns.length
    groupByDropdowns[lastElement - 1].value = data
    let newDropdownItems = []

    for (const item of fields) {
      console.log(fields)
      console.log(groupByDropdowns)
      let exists = false
      for (const dropdown of groupByDropdowns) {
        if (item.value === dropdown.value) {
          exists = true
        }
      }
      if (exists === false) newDropdownItems.push({value: item.value})
    }
    setGroupByDropdownItems(newDropdownItems)
    const oldQuery = query
    const newQuery: any = {}
    if (oldQuery && oldQuery !== null && oldQuery['entitySlug']) {
      newQuery['entitySlug'] = oldQuery['entitySlug']
    } else {
      newQuery['entitySlug'] = ''
    }

    let groupBy = []
    for (let i=0; i<groupByDropdowns.length; i++) {
      if (groupByDropdowns[i].value !== null) {
        groupBy.push({
          FieldName: groupByDropdowns[i].value
        })
      }
    }
    newQuery['GroupBy']=groupBy

    if (oldQuery && oldQuery !== null && oldQuery['Aggregations']) {
      newQuery['Aggregations'] = oldQuery['Aggregations']
    } else {
      newQuery['Aggregations'] = []
    }
    setQuery(newQuery)
  }

  const addNewGroupByDropdown = () => {
    if (fields.length !== groupByDropdowns.length) {
      const newTables = []
      for (let table of groupByDropdowns) {
        newTables.push(table)
      }
      newTables.push({value: null})
      console.log(newTables)
      setGroupByDropdowns(newTables)
    }
  }

  const selectAggregationField = (data: any, index: any) => {
    console.log('pocetak select aggregation field')
    console.log(data)
    console.log(aggregationFieldDropdowns)
    console.log(aggregateDropdowns)
    const aggregationFieldsDropdownsFromState = aggregationFieldDropdowns
    const lastElement = aggregationFieldsDropdownsFromState.length
    console.log('last element: ')
    console.log(lastElement)
    aggregationFieldsDropdownsFromState[lastElement - 1].value = data
    let newDropdownItems = []
    let selectedItems = []
    for (const item of fields) {
      console.log(fields)
      console.log(aggregationFieldsDropdownsFromState)
      let exists = false
      for (const dropdown of aggregationFieldsDropdownsFromState) {
        if (item.value === dropdown.value) {
          exists = true
        }
      }
      if (exists === false) newDropdownItems.push({value: item.value})
    }
    console.log('aggregations:')
    console.log(aggregateDropdowns)
    console.log(aggregationFieldsDropdownsFromState)
    setAggregationFieldDropdownItems(newDropdownItems)
    setAggregationFieldDropdowns([...aggregationFieldsDropdownsFromState])
    const oldQuery = query
    const newQuery: any = {}
    if (oldQuery && oldQuery !== null && oldQuery['GroupBy']) {
      newQuery['GroupBy'] = oldQuery['GroupBy']
    } else {
      newQuery['GroupBy'] = []
    }

    if (oldQuery && oldQuery !== null && oldQuery['entitySlug']) {
      newQuery['entitySlug'] = oldQuery['entitySlug']
    } else {
      newQuery['entitySlug'] = ''
    }

    let aggregations = []

    for (let i=0; i<aggregateDropdowns.length; i++) {
      if (aggregateDropdowns[i].value !== null && aggregationFieldsDropdownsFromState[i].value !== null) {
        aggregations.push({
          FieldName: aggregationFieldsDropdownsFromState[i].value,
          AggregateFunction: aggregateDropdowns[i].value
        })
      }
    }
    newQuery['Aggregations'] = aggregations
    setQuery(newQuery)
  }

  const addNewAggregationFieldDropdown = () => {
    if (fields.length !== aggregationFieldDropdowns.length) {
      const newTables = []
      for (let table of aggregationFieldDropdowns) {
        newTables.push(table)
      }
      newTables.push({value: null})
      console.log(newTables)
      setAggregationFieldDropdowns(newTables)
    }
  }

  const selectAggregation = (data: any, index: any) => {
    console.log('pocetka select aggregation')
    console.log(data)
    console.log(aggregateDropdowns)
    console.log(aggregationFieldDropdowns)
    const aggregateDropdownsFromState = aggregateDropdowns
    const lastElement = aggregateDropdownsFromState.length
    aggregateDropdownsFromState[lastElement - 1].value = data
    let newDropdownItems = []

    for (const item of aggregateItems) {
      console.log(aggregateItems)
      console.log(aggregateDropdownsFromState)
      let exists = false
      for (const dropdown of aggregateDropdownsFromState) {
        if (item.value === dropdown.value) {
          exists = true
        }
      }
      if (exists === false) newDropdownItems.push({value: item.value})
    }
    setAggregateDropdownItems(newDropdownItems)
    setAggregateDropdowns([...aggregateDropdownsFromState])

    console.log('aggregations:')
    console.log(aggregateDropdownsFromState)
    console.log(aggregationFieldDropdowns)

    const oldQuery = query
    const newQuery: any = {}
    if (oldQuery && oldQuery !== null && oldQuery['GroupBy']) {
      newQuery['GroupBy'] = oldQuery['GroupBy']
    } else {
      newQuery['GroupBy'] = []
    }

    if (oldQuery && oldQuery !== null && oldQuery['entitySlug']) {
      newQuery['entitySlug'] = oldQuery['entitySlug']
    } else {
      newQuery['entitySlug'] = ''
    }

    let aggregations = []

    console.log('BEFORE FORA')
    console.log(aggregateDropdownsFromState)
    console.log(aggregationFieldDropdowns)

    for (let i=0; i<aggregateDropdownsFromState.length; i++) {
      if (aggregateDropdownsFromState[i].value !== null && aggregationFieldDropdowns[i].value !== null) {
        aggregations.push({
          FieldName: aggregationFieldDropdowns[i].value,
          AggregateFunction: aggregateDropdownsFromState[i].value
        })
      }
    }
    newQuery['Aggregations'] = aggregations
    setQuery(newQuery)
  }

  const addNewAggretionOperationsDropdown = () => {
    if (aggregateItems.length !== aggregateDropdowns.length) {
      const newTables = []
      for (let table of aggregateDropdowns) {
        newTables.push(table)
      }
      newTables.push({value: null})
      console.log(newTables)
      setAggregateDropdowns(newTables)
    }
  }

  const addNewAggregateDrodpdown = () => {
    addNewAggregationFieldDropdown()
    addNewAggretionOperationsDropdown()
  }

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Application Settings"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Collapse
          items={[{ key: '  ', label: 'Navigation', children: <AppNavigation data={navigationData} cb={handleCallback} /> }]}
        />
      </Drawer>
      <div className="flex w-full">
        {JSON.stringify(query)}
      </div>
      {
        tables.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Tables</Typography.Title>
            <Space.Compact>
              <Select defaultValue="Select the table" options={dropdownItems} onSelect={selectTable}/>
            </Space.Compact>
          </div>
        ))
      }
      <PlusCircleOutlined onClick={() => { addNewTable() }}/>
      
      <div className="control-section">
        <QueryBuilderComponent width='100%' columns={columnData2} rule={rule4!}></QueryBuilderComponent>
      </div>

      {
        groupByDropdowns.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Group By</Typography.Title>
            <Space.Compact>
              <Select defaultValue="Select the property" options={groupByDropdownItems} onSelect={selectGroupBy}/>
            </Space.Compact>
          </div>
        ))
      }
      <PlusCircleOutlined onClick={() => { addNewGroupByDropdown() }}/>

      {
        aggregateDropdowns.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Aggregation</Typography.Title>
            <Space.Compact>
              <Select defaultValue={table.value || "Select the property"} options={aggregationFieldDropdownItems} onSelect={(data) => selectAggregationField(data, index)} />
            </Space.Compact>
            <Space.Compact>
              <Select defaultValue={table.value || "Select the aggregation"} options={aggregateDropdownItems} onSelect={(data) => selectAggregation(data, index)} />
            </Space.Compact>
          </div>
        ))
      }
      <PlusCircleOutlined onClick={() => { addNewAggregateDrodpdown(); }}/>
      
    </>
  );
}
