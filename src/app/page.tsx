"use client";
import AppNavigation from "@/components/app-navigation";
import { QueryBuilderComponent } from "@syncfusion/ej2-react-querybuilder";
import { DrawerProps, RadioChangeEvent, Space, Radio, Button, Drawer, Collapse, MenuProps, Dropdown, Typography, Input, Select } from "antd";
import { PlusOutlined, DashboardOutlined, FastBackwardOutlined, DownOutlined, StepBackwardOutlined, StepForwardOutlined, FastForwardOutlined, PlusCircleOutlined, LinkOutlined, BankOutlined, EditOutlined, DeleteOutlined, UserOutlined, CalendarOutlined, AppstoreOutlined, MessageOutlined, SettingOutlined, InboxOutlined } from '@ant-design/icons';
import { registerLicense } from '@syncfusion/ej2-base';
import { useCallback, useEffect, useState } from "react";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVJyWmFZfVpgdV9EYVZRTGY/P1ZhSXxXdkdjXn5dcnVVTmZVU00="
);

// const inputData = {
//   table: null,
//   queryBuilderRule: [],
//   groupBy: [],
//   aggregations: []
// }

const inputData = {
  table: 'clients',
  queryBuilderRule: [
    {
      "isComplex": true,
      "condition": "or",
      "predicates": [
        {
          "isComplex": true,
          "condition": "and",
          "predicates": [
            {
              "isComplex": true,
              "condition": "or",
              "predicates": [
                {
                  "isComplex": false,
                  "field": "f",
                  "operator": "equal",
                  "value": "8",
                },
                {
                  "isComplex": false,
                  "field": "g",
                  "operator": "equal",
                  "value": "8",
                }
              ]
            },
            {
              "isComplex": false,
              "field": "i",
              "operator": "equal",
              "value": "8",
            }
          ]
        },
        {
          "isComplex": true,
          "condition": "and",
          "predicates": [
            {
              "isComplex": false,
              "field": "h",
              "operator": "equal",
              "value": "8",
            },
          ]
        }
      ]
    }
  ],
  groupBy: [
    {
      FieldName: 'i'
    },
    {
      FieldName: 'g'
    }
  ],
  aggregations: [
    {
      FieldName: 'i',
      AggregateFunction: 'max'
    },
    {
      FieldName: 'g',
      AggregateFunction: 'min'
    }
  ]
}

const tableData = [
  {
    name: 'invoices',
    properties: [
      {
        name: 'a',
        type: 'number'
      },
      {
        name: 'b',
        type: 'number'
      }
    ]
  },
  {
    name: 'contracts',
    properties: [
      {
        name: 'c',
        type: 'string'
      },
      {
        name: 'd',
        type: 'number'
      },
      {
        name: 'e',
        type: 'string'
      }
    ]
  },
  {
    name: 'clients',
    properties: [
      {
        name: 'f',
        type: 'number'
      },
      {
        name: 'g',
        type: 'string'
      },
      {
        name: 'h',
        type: 'number'
      },
      {
        name: 'i',
        type: 'number'
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
  const [showAfterTableSelected, setShowAfterTableSelected] = useState<boolean>(false)
  const [queryBuilderElements, setQueryBuilderElements] = useState<any[]>([])
  const [queryBulderRule, setQueryBuilderRule] = useState<any>()
  const [query, setQuery] = useState<any>({
    entitySlug: '',
    GroupBy: [],
    Aggregations: [],
    Where: []
  })
  const [tablesDrodpdownDefaultValue, setTableDropdownDefaultValue] = useState<string>('Select table')
  const [selectedTables, setSelectedTables] = useState<any[]>([])
  const [tableDropdownItems, setTableDropdownItems] = useState<any[]>([])
  const [selectedTableProperties, setSelectedTableProperties] = useState<any[]>([])
  const [groupByDropdowns, setGroupByDropdowns] = useState<any[]>([])
  const [groupByDropdownItems, setGroupByDropdownItems] = useState<any[]>([])
  const [aggregationFieldDropdowns, setAggregationFieldDropdowns] = useState<any[]>([])
  const [aggregationFieldDropdownItems, setAggregationFieldDropdownItems] = useState<any[]>()
  const [aggregateDropdowns, setAggregateDropdowns] = useState<any[]>([])
  const [aggregateDropdownItems, setAggregateDropdownItems] = useState<any[]>([
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
  ])

  useEffect(() => {
    setNavigationData(data)
    let tableDropdownData = []
    for (const table of tableData) {
      tableDropdownData.push({
        value: table.name,
        label: table.name
      })
    }
    console.log(inputData.table)
    setTableDropdownItems(tableDropdownData)

    let array = []
    array.push({value: null})
    if (inputData && inputData.table) {
      const oldQuery = query
      setSelectedTables([{value: inputData.table}])
      setTableDropdownDefaultValue(inputData.table)
      for (const table of tableData) {
        if (table.name === inputData.table) {
          const queryBuilderFields = []
          const dropdownElements = []
          for (const field of table.properties) {
            queryBuilderFields.push({
              field: field.name,
              label: field.name,
              type: field.type
            })
            dropdownElements.push({
              value: field.name,
              label: field.name
            })
          }
          setQueryBuilderElements(queryBuilderFields)
          console.log('setting dropdown elements za selected table properties')
          console.log(dropdownElements)
          setSelectedTableProperties(dropdownElements)
          setGroupByDropdownItems(dropdownElements)
          setAggregationFieldDropdownItems(dropdownElements)
        }
      }
      setShowAfterTableSelected(true)
    }
    else setSelectedTables([...array])
    if (inputData && inputData.queryBuilderRule) {
      const rule = inputData.queryBuilderRule.map(setRule)[0]
      setQueryBuilderRule(rule)
    }
    if (inputData && inputData.groupBy && inputData.groupBy.length > 0) {
      let selectedGroupByValues = []
      for (const gb of inputData.groupBy) {
        selectedGroupByValues.push({ value: gb.FieldName })
      }
      setGroupByDropdowns(selectedGroupByValues)
    } else {
      setGroupByDropdowns([...array])
    }
    if (inputData && inputData.aggregations && inputData.aggregations.length > 0) {
      const aggregationFields = []
      const aggregationMethods = []
      for (const aggregation of inputData.aggregations) {
        aggregationFields.push({
          value: aggregation.FieldName
        })
        aggregationMethods.push({
          value: aggregation.AggregateFunction
        })
      }
      setAggregationFieldDropdowns(aggregationFields)
      setAggregateDropdowns(aggregationMethods)
    } else {
      setAggregationFieldDropdowns([...array])
      setAggregateDropdowns([...array])
    }
    const newQuery: any = {}
    if (inputData && inputData.table && inputData.table !== null) newQuery['entitySlug'] = inputData.table
    else newQuery['entitySlug'] = ''
    if (inputData && inputData.queryBuilderRule) newQuery['Where'] = inputData.queryBuilderRule
    else newQuery['Where'] = []
    if (inputData && inputData.groupBy) newQuery['GroupBy'] = inputData.groupBy
    else newQuery['GroupBy'] = []
    if (inputData && inputData.aggregations) newQuery['Aggregations'] = inputData.aggregations
    else newQuery['GroupBy'] = []
    setQuery(newQuery)
  }, [])

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

  const revertRule = (json: any) => {
    if (!json) return null
    if (!json.rules) {
      console.log(json)
      return {
        isComplex: false,
        field: json.field,
        operator: json.operator,
        value: json.value, // Ensure numeric values are converted to strings
      };
    } else {
      console.log(json)
      const predicates = json.rules.map((rule: any) => revertRule(rule));
      return {
        isComplex: true,
        condition: json.condition,
        predicates: predicates,
      };
    }
  }

  const onRuleChange = (data: any) => {
    const revertedRule = revertRule(data.rule)
    const oldQuery = query
    const newQuery: any = {}

    if (oldQuery && oldQuery !== null && oldQuery['entitySlug']) {
      newQuery['entitySlug'] = oldQuery['entitySlug']
    } else {
      newQuery['entitySlug'] = ''
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
    
    newQuery['Where'] = [revertedRule]
    setQuery(newQuery)
  }

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

  // const addNewTable = () => {
  //   if (items.length !== selectedTables.length) {
  //     const newTables = []
  //     for (let table of selectedTables) {
  //       newTables.push(table)
  //     }
  //     newTables.push({value: null})
  //     setSelectedTables(newTables)
  //   }
  // }

  const selectTable = (data: any) => {
    console.log(selectedTables)
    console.log(data)
    const lastElement = selectedTables.length
    selectedTables[lastElement - 1] = { value: data }
    let newDropdownItems = []

    for (const item of tableDropdownItems) {
      let exists = false
      for (const table of selectedTables) {
        if (item.value === table.value) {
          exists = true
        }
      }
      if (exists === false) newDropdownItems.push({value: item.value})
    }
    setTableDropdownItems(newDropdownItems)
    const queryBuilderFields = []
    for (const table of tableData) {
      if (table.name === data) {
        const queryBuilderFields = []
        const dropdownElements = []
        for (const field of table.properties) {
          queryBuilderFields.push({
            field: field.name,
            label: field.name,
            type: field.type
          })
          dropdownElements.push({
            value: field.name,
            label: field.name
          })
        }
        setQueryBuilderElements(queryBuilderFields)
        setGroupByDropdownItems(dropdownElements)
        setAggregationFieldDropdownItems(dropdownElements)
        setSelectedTableProperties(dropdownElements)
      }
    }
    setShowAfterTableSelected(true)
    if (tableDropdownItems.length > 0) {
      const oldQuery = query
      const newQuery: any = {
        entitySlug: tableDropdownItems[0].value
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
      if (oldQuery && oldQuery !== null && oldQuery['Where']) {
        newQuery['Where'] = oldQuery['Where']
      }else {
        newQuery['Where'] = []
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

    for (const item of selectedTableProperties) {
      let exists = false
      console.log('item:')
      console.log(item)
      for (const dropdown of groupByDropdowns) {
        console.log('dropdown:')
        console.log(dropdown)
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
    if (oldQuery && oldQuery !== null && oldQuery['Where']) {
      newQuery['Where'] = oldQuery['Where']
    }else {
      newQuery['Where'] = []
    }
    setQuery(newQuery)
  }

  const addNewGroupByDropdown = () => {
    if (selectedTableProperties.length !== groupByDropdowns.length) {
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
    console.log(data)
    const aggregationFieldDropdownsCopy = [...aggregationFieldDropdowns]
    aggregationFieldDropdownsCopy[index] = { value: data}
    setAggregationFieldDropdowns([...aggregationFieldDropdownsCopy])
    console.log(aggregationFieldDropdowns)
    console.log(aggregateDropdowns)
    let aggregations = []
    for (let i=0; i<aggregateDropdowns.length; i++) {
      if (aggregationFieldDropdownsCopy[i].value !== null && aggregateDropdowns[i].value !== null) {
        aggregations.push({
          FieldName: aggregationFieldDropdownsCopy[i].value,
          AggregateFunction: aggregateDropdowns[i].value
        })
      }
    }
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
    newQuery['Aggregations'] = aggregations
    if (oldQuery && oldQuery !== null && oldQuery['Where']) {
      newQuery['Where'] = oldQuery['Where']
    }else {
      newQuery['Where'] = []
    }
    setQuery(newQuery)
  }

  const addNewAggregationFieldDropdown = () => {
    if (selectedTableProperties.length !== aggregationFieldDropdowns.length) {
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
    console.log(data)
    const aggregationDropdownsCopy = [...aggregateDropdowns]
    aggregationDropdownsCopy[index] = { value: data}
    setAggregateDropdowns([...aggregationDropdownsCopy])
    console.log(aggregationFieldDropdowns)
    console.log(aggregateDropdowns)
    let aggregations = []
    for (let i=0; i<aggregateDropdowns.length; i++) {
      if (aggregationFieldDropdowns[i].value !== null && aggregationDropdownsCopy[i].value !== null) {
        aggregations.push({
          FieldName: aggregationFieldDropdowns[i].value,
          AggregateFunction: aggregationDropdownsCopy[i].value
        })
      }
    }
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
    newQuery['Aggregations'] = aggregations

    if (oldQuery && oldQuery !== null && oldQuery['Where']) {
      newQuery['Where'] = oldQuery['Where']
    }else {
      newQuery['Where'] = []
    }
    setQuery(newQuery)

  }

  const addNewAggretionOperationsDropdown = () => {
    if (aggregateDropdownItems.length !== aggregateDropdowns.length) {
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
        selectedTables.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Tables</Typography.Title>
            <Space.Compact>
              <Select defaultValue={tablesDrodpdownDefaultValue} options={tableDropdownItems} onSelect={selectTable}/>
            </Space.Compact>
          </div>
        ))
      }
      
      {
        showAfterTableSelected && 
        <div className="control-section">
          <QueryBuilderComponent width='100%' columns={queryBuilderElements} rule={queryBulderRule} ruleChange={onRuleChange}></QueryBuilderComponent>
        </div>
      }

      {
        showAfterTableSelected && 
        groupByDropdowns.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Group By</Typography.Title>
            <Space.Compact>
              <Select defaultValue={groupByDropdowns[index].value || "Select the property"} options={groupByDropdownItems} onSelect={selectGroupBy}/>
            </Space.Compact>
            <PlusCircleOutlined onClick={() => { addNewGroupByDropdown() }}/>
          </div>
        ))
      }

      {
        showAfterTableSelected && 
        aggregateDropdowns.map((table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Aggregation</Typography.Title>
            <Space.Compact>
              <Select defaultValue={aggregationFieldDropdowns[index] || "Select the property"} options={aggregationFieldDropdownItems} onSelect={(data) => selectAggregationField(data, index)} />
            </Space.Compact>
            <Space.Compact>
              <Select defaultValue={aggregateDropdowns[index] || "Select the aggregation"} options={aggregateDropdownItems} onSelect={(data) => selectAggregation(data, index)} />
            </Space.Compact>
            <PlusCircleOutlined onClick={() => { addNewAggregateDrodpdown(); }}/>
          </div>
        ))
      }
      
    </>
  );
}
