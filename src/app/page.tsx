"use client";
import AppNavigation from "@/components/app-navigation";
import { ColumnDirective, ColumnsDirective, QueryBuilderComponent } from "@syncfusion/ej2-react-querybuilder";
import { DropDownTree, DropDownTreeComponent, DropDownTreeModel, FieldsModel } from '@syncfusion/ej2-react-dropdowns';
import { DrawerProps, RadioChangeEvent, Space, Radio, Button, Drawer, Collapse, MenuProps, Dropdown, Typography, Input, Select, TreeSelect } from "antd";
import { PlusOutlined, DashboardOutlined, FastBackwardOutlined, DownOutlined, StepBackwardOutlined, StepForwardOutlined, FastForwardOutlined, PlusCircleOutlined, LinkOutlined, BankOutlined, EditOutlined, DeleteOutlined, UserOutlined, CalendarOutlined, AppstoreOutlined, MessageOutlined, SettingOutlined, InboxOutlined } from '@ant-design/icons';
import { registerLicense } from '@syncfusion/ej2-base';
import { useCallback, useEffect, useState } from "react";
import Tabview from "@/components/tabview";
import PlaceholderTest from "@/components/placeholder-test";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVJyWmFZfVpgdV9EYVZRTGY/P1ZhSXxXdkdjXn5dcnVVTmZVU00="
);

const tableInputData = [{
  slug: 'users',
  fields: [
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Address1",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Address2",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "ApiKey",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "City",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Country",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Create User",
        "DisplayKey": "FullName",
        "ForeignKey": "ID",
        "ForeignEntity": "_User",
        "ForeignSlug": "users",
        "Section": "System",
        "GridOrder": -1,
        "DetailsOrder": 94,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "CreateUser",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Language",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "LastLoginDate",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Password",
        "GridOrder": -1,
        "DetailsOrder": 3,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Required": true,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 6,
      "FieldName": "LoginPW",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": true,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "MobilePhone",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Modify User",
        "DisplayKey": "FullName",
        "ForeignKey": "ID",
        "ForeignEntity": "_User",
        "ForeignSlug": "users",
        "Section": "System",
        "GridOrder": -1,
        "DetailsOrder": 96,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "ModifyUser",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "NickName",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Phone",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "PhoneExtension",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "PWLastResetDate",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Settings JSON",
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 12,
      "FieldName": "Settings",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "State",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "StateProvince",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "TimeZone",
        "DisplayKey": "Name",
        "ForeignKey": "ID",
        "ForeignEntity": "_TimeZone",
        "ForeignSlug": "timezones",
        "GridOrder": -1,
        "DetailsOrder": 9,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Include": [
          "IanaID"
        ],
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "TimeZone",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "Title",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "UserKey",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "UserPhoto",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "GridOrder": -1,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "ZipPostalCode",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "IsPrimary": true,
        "DisplayName": "ID",
        "GridOrder": 0,
        "DetailsOrder": 0,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 0,
      "FieldName": "ID",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Account",
        "DisplayKey": "PrimaryAccountName",
        "ForeignKey": "ID",
        "ForeignEntity": "_Account",
        "ForeignSlug": "accounts",
        "GridOrder": 1,
        "DetailsOrder": 1,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Required": true,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "AccountID",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Last Name",
        "GridOrder": 3,
        "DetailsOrder": 5,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "BeforeUpdate": "ConvertToUpperCase",
        "BeforeCreate": "ConvertToUpperCase",
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "LastName",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "User Photo",
        "DisplayKey": "UserPhoto",
        "ForeignKey": "Id",
        "ForeignEntity": "MediaLibrary",
        "GridOrder": 4,
        "DetailsOrder": 9,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 9,
      "FieldName": "AvatarPhoto",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "First Name",
        "GridOrder": 4,
        "DetailsOrder": 4,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "BeforeUpdate": "ConvertToUpperCase",
        "BeforeCreate": "ConvertToUpperCase",
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "FirstName",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Login ID",
        "GridOrder": 5,
        "DetailsOrder": 1,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Required": true,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 10,
      "FieldName": "LoginID",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Profile",
        "DisplayKey": "ProfileName",
        "ForeignKey": "ID",
        "ForeignEntity": "_UserProfile",
        "ForeignSlug": "userprofiles",
        "GridOrder": 7,
        "DetailsOrder": 6,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Filters": [
          {
            "FieldName": "CustomFilter",
            "Operator": "=",
            "Value": "ProfileSetupPermissions"
          }
        ],
        "Required": true,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "ProfileID",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Create Date",
        "Section": "System",
        "GridOrder": 9,
        "DetailsOrder": 95,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": true,
        "ResizePixels": 0
      },
      "FieldType": 13,
      "FieldName": "CreateDate",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Modify Date",
        "Section": "System",
        "GridOrder": 11,
        "DetailsOrder": 97,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": true,
        "ResizePixels": 0
      },
      "FieldType": 13,
      "FieldName": "ModifyDate",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Status",
        "DisplayKey": "Name",
        "ForeignKey": "ID",
        "ForeignEntity": "_SetupStatusType",
        "ForeignSlug": "setupstatustypes",
        "Section": "System",
        "DefaultValue": "1",
        "GridOrder": 15,
        "DetailsOrder": 98,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "TemplateType": "badge",
        "InlineEdit": true,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 2,
      "FieldName": "StatusID",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Full Name",
        "Section": "Hidden",
        "GridLevel": 0,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 1,
      "FieldName": "FullName",
      "ReadAccess": true,
      "EditAccess": false,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_User"
    },
    {
      "Meta": {
        "DisplayName": "Login",
        "GridOrder": 12,
        "DetailsOrder": -1,
        "GridLevel": 0,
        "DetailsLevel": 0,
        "TemplateType": "button",
        "Searchable": false,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 0,
      "FieldName": "Login",
      "ReadAccess": true,
      "Exclude": false
    }
  ]
},
{
  slug: 'setupstatustypes',
  fields: [
    {
      "Meta": {
        "IsPrimary": true,
        "DisplayName": "ID",
        "GridOrder": 0,
        "DetailsOrder": 0,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 0,
      "FieldName": "ID",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_SetupStatusTypes"
    },
    {
      "Meta": {
        "IsPrimary": true,
        "DisplayName": "Name",
        "GridOrder": 0,
        "DetailsOrder": 0,
        "GridLevel": 2,
        "DetailsLevel": 0,
        "Searchable": true,
        "DefaultUTC": false,
        "ResizePixels": 0
      },
      "FieldType": 0,
      "FieldName": "Name",
      "ReadAccess": true,
      "EditAccess": true,
      "CreateAccess": true,
      "Exclude": false,
      "TableName": "_SetupStatusTypes"
    }
  ]
}]

const inputData = {
  table: null,
  queryBuilderRule: [],
  groupBy: [],
  aggregations: []
}
// const inputData = {
//   table: 'clients',
//   queryBuilderRule: [
//     {
//       "isComplex": true,
//       "condition": "or",
//       "predicates": [
//         {
//           "isComplex": true,
//           "condition": "and",
//           "predicates": [
//             {
//               "isComplex": true,
//               "condition": "or",
//               "predicates": [
//                 {
//                   "isComplex": false,
//                   "field": "f",
//                   "operator": "equal",
//                   "value": "8",
//                 },
//                 {
//                   "isComplex": false,
//                   "field": "g",
//                   "operator": "equal",
//                   "value": "8",
//                 }
//               ]
//             },
//             {
//               "isComplex": false,
//               "field": "i",
//               "operator": "equal",
//               "value": "8",
//             }
//           ]
//         },
//         {
//           "isComplex": true,
//           "condition": "and",
//           "predicates": [
//             {
//               "isComplex": false,
//               "field": "h",
//               "operator": "equal",
//               "value": "8",
//             },
//           ]
//         }
//       ]
//     }
//   ],
//   groupBy: [
//     {
//       FieldName: 'i'
//     },
//     {
//       FieldName: 'g'
//     }
//   ],
//   aggregations: [
//     {
//       FieldName: 'i',
//       AggregateFunction: 'max'
//     },
//     {
//       FieldName: 'g',
//       AggregateFunction: 'min'
//     }
//   ]
// }

// const tableData = [
//   {
//     name: 'invoices',
//     properties: [
//       {
//         name: 'a',
//         type: 'number'
//       },
//       {
//         name: 'b',
//         type: 'number'
//       }
//     ]
//   },
//   {
//     name: 'contracts',
//     properties: [
//       {
//         name: 'c',
//         type: 'string'
//       },
//       {
//         name: 'd',
//         type: 'number'
//       },
//       {
//         name: 'e',
//         type: 'string'
//       }
//     ]
//   },
//   {
//     name: 'clients',
//     properties: [
//       {
//         name: 'f',
//         type: 'number'
//       },
//       {
//         name: 'g',
//         type: 'string'
//       },
//       {
//         name: 'h',
//         type: 'number'
//       },
//       {
//         name: 'i',
//         type: 'number'
//       }
//     ]
//   }
// ]

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

export default function Home(this: any) {
  const [tables, setTables] = useState<any[]>([])
  const [navigationData, setNavigationData] = useState<any[]>([])
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const [showAfterTableSelected, setShowAfterTableSelected] = useState<boolean>(false)
  const [queryBuilderColumnsData, setQueryBuilderColumnsData] = useState<any[]>([])
  const [queryBuilderElements, setQueryBuilderElements] = useState<DropDownTreeModel>()
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
  const [showAddGroupBy, setShowAddGroupBy] = useState<boolean>(false)
  const [showAddAggregation, setShowAddAggregation] = useState<boolean>(false)
  const [currentlySelectedGroupBy, setCurrentlySelectedGroupBy] = useState<string>()
  const [currentlySelectedGroupByLabel, setCurrentlySelectedGroupByLabel] = useState<string | null>(null)
  const [currentlySelectedAggregationField, setCurrentlySelectedAggregationField] = useState<string>()
  const [currentlySelectedAggreggationFieldLabel, setCurrentlySelectedAggregationFieldLabel] = useState<string | null>(null)
  const [selectedGroupBy, setSelectedGroupBy] = useState<any[]>([])
  const [selectedAggregations, setSelectedAggregations] = useState<any[]>([])
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
    const tablesData = []
    for (const table of tableInputData) {
      const name = table.slug
      const properties = []
      const references = []
      for (const property of table.fields) {
        if (property.FieldType === 0 || 
          property.FieldType === 1 ||
          property.FieldType === 6 || 
          property.FieldType === 7 || 
          property.FieldType === 8 || 
          property.FieldType === 9 || 
          property.FieldType === 10 ||
          property.FieldType === 11 ||
          property.FieldType === 12 || 
          property.FieldType === 14 ||
          property.FieldType === 15 ||
          property.FieldType === 19 ||
          property.FieldType === 20 ||
          property.FieldType === 21 ||
          property.FieldType === 23 ||
          property.FieldType === 24 ||
          property.FieldType === 25 || 
          property.FieldType === 27 ||
          property.FieldType === 30) properties.push({
          name: property.FieldName,
          type: 'string'
        })
        else if (property.FieldType === 17 || property.FieldType === 22) properties.push({
          name: property.FieldName,
          type: 'number'
        })
        else if (property.FieldType === 3) properties.push({
          name: property.FieldName,
          type: 'boolean'
        })
        else if (property.FieldType === 4 || property.FieldType === 5 || property.FieldType === 13) properties.push({
          name: property.FieldName,
          type: 'date'
        })
        else if (property.FieldType === 2) {
          properties.push({
            name: property.FieldName,
            type: 'foreignKey',
            reference: property['Meta'].ForeignSlug
          })
          if (property['Meta'].ForeignSlug !== table.slug) {
            references.push({
              name: property['Meta'].ForeignSlug
            })
          }
        }
      }
      tablesData.push({
        name: name,
        properties: properties,
        references: references
      })
    }
    setTables(tablesData)
    let tableDropdownData = []
    for (const table of tablesData) {
      tableDropdownData.push({
        value: table.name,
        label: table.name
      })
    }
    setTableDropdownItems(tableDropdownData)

    const queryBuilderColumns: any[] = []
    for (let table of tablesData) {
      const nodeChild = []
      for (let property of table.properties) {
        nodeChild.push({
          nodeId: table.name + '.' + property.name,
          nodeText: property.name,
          type: property.type,
          componentText: property.name
        })
      }
      queryBuilderColumns.push({
        nodeId: table.name,
        nodeText: table.name,
        expanded: true,
        selectable: false,
        nodeChild: nodeChild
      })
    }
    let fields: Object = { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    const treeModel: DropDownTreeModel = {
      fields: fields
    }
    setQueryBuilderColumnsData(queryBuilderColumns)
    setQueryBuilderElements(treeModel)

    let array = []
    array.push({ value: null })
    if (inputData && inputData.table) {
      const oldQuery = query
      setSelectedTables([{ value: inputData.table }])
      setTableDropdownDefaultValue(inputData.table)
      const element = tablesData.find((element: any) => element.name === inputData.table)
      const dropdownElements = []
      const treeData = []
      for (const table of tablesData) {
        const options = []
        const parentData: {
          value: string;
          title: string;
          selectable: boolean;
          children: any[]
        } = {
          value: table.name,
          title: table.name,
          selectable: false,
          children: []
        }
        if (table.name === element!.name) {
          for (const field of table.properties) {
            options.push({
              value: field.name,
              label: field.name
            })
            if (field.type === 'number') {
              parentData.children.push({
                value: table.name+'.'+field.name,
                title: field.name,
                selectable: false,
                children: [
                  {
                    value: table.name+'.'+field.name+'.'+'count',
                    title: 'Count'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'sum',
                    title: 'Sum'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'average',
                    title: 'Average'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'min',
                    title: 'Min'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'max',
                    title: 'Max'
                  }
                ]
              })
            } else if (field.type === 'date') {
              parentData.children.push({
                value: table.name+'.'+field.name,
                title: field.name,
                selectable: false,
                children: [
                  {
                    value: table.name+'.'+field.name+'.'+'count',
                    title: 'Count'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'sum',
                    title: 'Sum'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'min',
                    title: 'Min'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'max',
                    title: 'Max'
                  }
                ]
              })
            } else {
              parentData.children.push({
                value: table.name+'.'+field.name,
                title: field.name,
                selectable: false,
                children: [
                  {
                    value: table.name+'.'+field.name+'.'+'count',
                    title: 'Count'
                  },
                  {
                    value: table.name+'.'+field.name+'.'+'sum',
                    title: 'Sum'
                  }
                ]
              })
            }
          }
          treeData.push(parentData)
          const option = {
            label: table.name,
            options: options
          }
          dropdownElements.push(option)
        }
        for (const reference of element!.references) {
          if (table.name === reference.name) {
            for (const field of table.properties) {
              options.push({
                value: field.name,
                label: field.name
              })
              if (field.type === 'number') {
                parentData.children.push({
                  value: table.name+'.'+field.name,
                  title: field.name,
                  selectable: false,
                  children: [
                    {
                      value: table.name+'.'+field.name+'.'+'count',
                      title: 'Count'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'sum',
                      title: 'Sum'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'average',
                      title: 'Average'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'min',
                      title: 'Min'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'max',
                      title: 'Max'
                    }
                  ]
                })
              } else if (field.type === 'date') {
                parentData.children.push({
                  value: table.name+'.'+field.name,
                  title: field.name,
                  selectable: false,
                  children: [
                    {
                      value: table.name+'.'+field.name+'.'+'count',
                      title: 'Count'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'sum',
                      title: 'Sum'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'min',
                      title: 'Min'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'max',
                      title: 'Max'
                    }
                  ]
                })
              } else {
                parentData.children.push({
                  value: table.name+'.'+field.name,
                  title: field.name,
                  selectable: false,
                  children: [
                    {
                      value: table.name+'.'+field.name+'.'+'count',
                      title: 'Count'
                    },
                    {
                      value: table.name+'.'+field.name+'.'+'sum',
                      title: 'Sum'
                    }
                  ]
                })
              }
            }
            treeData.push(parentData)
            const option = {
              label: table.name,
              options: options
            }
            dropdownElements.push(option)
          }
        }
      }
      setSelectedTableProperties(dropdownElements)
      setGroupByDropdownItems(dropdownElements)
      setAggregationFieldDropdownItems(treeData)
      setShowAfterTableSelected(true)
    }
    else setSelectedTables([...array])
    if (inputData && inputData.queryBuilderRule) {
      const rule = inputData.queryBuilderRule.map(setRule)[0]
      setQueryBuilderRule(rule)
    }
    if (inputData && inputData.groupBy && inputData.groupBy.length > 0) {
      let selectedGroupByValues: any[] = []
      // for (const gb of inputData.groupBy) {
      //   selectedGroupByValues.push({ value: gb.FieldName })
      // }
      setSelectedGroupBy(selectedGroupByValues)
    }
    if (inputData && inputData.aggregations && inputData.aggregations.length > 0) {
      const aggregationFields: any[] = []
      const aggregationMethods: any[] = []
      // for (const aggregation of inputData.aggregations) {
      //   aggregationFields.push({
      //     value: aggregation.FieldName
      //   })
      //   aggregationMethods.push({
      //     value: aggregation.AggregateFunction
      //   })
      // }
      setAggregationFieldDropdowns([...aggregationFields])
      setAggregateDropdowns([...aggregationMethods])
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
    console.log(json)
    if (!json) return null
    if (!json.rules) {
      let field = ''
      const tablePropertyArray = json.field.split('.')
      const tableName = tablePropertyArray[0]
      const fieldName = tablePropertyArray[1]
      
      if (selectedTables && selectedTables.length > 0) {
        if (selectedTables[0].value === tableName) {
          field = fieldName
        } else {
          for (const table of tables) {
            if (table.name === selectedTables[0].value) {
              for (const property of table.properties) {
                if (property.type === 'foreignKey' && property.reference === tableName) {
                  field = property.name + '.' + fieldName
                }
              }
            }
          }
        }
      } else field = json.field
      return {
        isComplex: false,
        field: field,
        operator: json.operator,
        value: json.value, // Ensure numeric values are converted to strings
      };
    } else {
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

  const selectTable = (data: any) => {
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
      if (exists === false) {
        newDropdownItems.push({ value: item.value })
      }
    }
    setTableDropdownItems(newDropdownItems)
    const element = tables.find((element: any) => element.name === data)
    const selectedTableLabel = element.name
    const selectedTableOptions = []
    let nodeChild = []
    const queryBuilderColumns = []
    const treeData = []
    const parentData: {
      value: string;
      title: string;
      selectable: boolean;
      children: any[]
    } = {
      value: element.name,
      title: element.name,
      selectable: false,
      children: []
    }
    for (const option of element.properties) {
      selectedTableOptions.push({
        label: option.name,
        value: element.name + '.' + option.name,
      })
      nodeChild.push({
        nodeId: element.name + '.' + option.name,
        nodeText: option.name,
        type: option.type,
        componentText: option.name
      })
      if (option.type === 'number') {
        parentData.children.push({
          value: element.name+'.'+option.name,
          title: option.name,
          selectable: false,
          children: [
            {
              value: element.name+'.'+option.name+'.'+'count',
              title: 'Count'
            },
            {
              value: element.name+'.'+option.name+'.'+'sum',
              title: 'Sum'
            },
            {
              value: element.name+'.'+option.name+'.'+'average',
              title: 'Average'
            },
            {
              value: element.name+'.'+option.name+'.'+'min',
              title: 'Min'
            },
            {
              value: element.name+'.'+option.name+'.'+'max',
              title: 'Max'
            }
          ]
        })
      } else if (option.type === 'date') {
        parentData.children.push({
          value: element.name+'.'+option.name,
          title: option.name,
          selectable: false,
          children: [
            {
              value: element.name+'.'+option.name+'.'+'count',
              title: 'Count'
            },
            {
              value: element.name+'.'+option.name+'.'+'sum',
              title: 'Sum'
            },
            {
              value: element.name+'.'+option.name+'.'+'min',
              title: 'Min'
            },
            {
              value: element.name+'.'+option.name+'.'+'max',
              title: 'Max'
            }
          ]
        })
      } else {
        parentData.children.push({
          value: element.name+'.'+option.name,
          title: option.name,
          selectable: false,
          children: [
            {
              value: element.name+'.'+option.name+'.'+'count',
              title: 'Count'
            },
            {
              value: element.name+'.'+option.name+'.'+'sum',
              title: 'Sum'
            }
          ]
        })
      }
    }
    const dropdownElements = [{
      label: selectedTableLabel,
      options: selectedTableOptions
    }]
    queryBuilderColumns.push({
      nodeId: element.name,
      nodeText: element.name,
      expanded: true,
      selectable: false,
      nodeChild: nodeChild
    })
    treeData.push(parentData)
    nodeChild = []
    for (const reference of element.references) {
      let lookupName = ''
      for (const table of tables) {
        const parentData: {
          value: string;
          title: string;
          selectable: boolean;
          children: any[]
        } = {
          value: table.name,
          title: table.name,
          selectable: false,
          children: []
        }
        if (reference.name === table.name) {
          for (const property of element.properties) {
            if (property.type === 'foreignKey' && property.reference && property.reference === table.name) lookupName = property.name
          }
          console.log('LOOKUP NAME: ', lookupName)
          const dropdownCategoryName = table.name
          const dropdownCategoryOptions = []
          for (const option of table.properties) {
            dropdownCategoryOptions.push({
              label: option.name,
              value: table.name + '.' + lookupName + '.' + option.name,
            })
            nodeChild.push({
              nodeId: table.name + '.' + option.name,
              nodeText: table.name + '.' + option.name,
              type: option.type,
              componentText: lookupName + '.' + option.name
            })
            if (option.type === 'number') {
              parentData.children.push({
                value: table.name + '.' +option.name,
                title: option.name,
                selectable: false,
                children: [
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'count',
                    title: 'Count'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'sum',
                    title: 'Sum'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'average',
                    title: 'Average'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'min',
                    title: 'Min'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'max',
                    title: 'Max'
                  }
                ]
              })
            } else if (option.type === 'date') {
              parentData.children.push({
                value: table.name + '.' +option.name,
                title: option.name,
                selectable: false,
                children: [
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'count',
                    title: 'Count'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'sum',
                    title: 'Sum'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'min',
                    title: 'Min'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+'.'+'max',
                    title: 'Max'
                  }
                ]
              })
            } else {
              parentData.children.push({
                value: table.name + '.' +option.name,
                title: option.name,
                selectable: false,
                children: [
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+ '.' +'count',
                    title: 'Count'
                  },
                  {
                    value: table.name + '.' + lookupName + '.' +option.name+ '.' +'sum',
                    title: 'Sum'
                  }
                ]
              })
            }
          }
          if (dropdownCategoryOptions.length > 0) {
            dropdownElements.push({
              label: dropdownCategoryName,
              options: dropdownCategoryOptions
            })
            queryBuilderColumns.push({
              nodeId: table.name,
              nodeText: table.name,
              expanded: true,
              selectable: false,
              nodeChild: nodeChild
            })
            treeData.push(parentData)
          }
        }
      }
    }
    let fields: Object = { dataSource: queryBuilderColumns, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    const treeModel: DropDownTreeModel = {
      fields: fields
    }
    setGroupByDropdownItems(dropdownElements)
    setAggregationFieldDropdownItems(treeData)
    setSelectedTableProperties(dropdownElements)
    const array = [{ value: null }]
    setAggregationFieldDropdowns([...array])
    setAggregateDropdowns([...array])
    setQueryBuilderRule({})
    setQueryBuilderColumnsData(queryBuilderColumns)
    setQueryBuilderElements(treeModel)
    setShowAfterTableSelected(true)

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
    } else {
      newQuery['Where'] = []
    }
    setQuery(newQuery)
  }

  const showAddGroupByContainer = () => {
    setShowAddGroupBy(true)
  }

  const showAddAggregationContainer = () => {
    setShowAddAggregation(true)
  }

  const saveCurrentlySelectedGroupBy = (data: string) => {
    const tablePropertyArray = data.split('.');
    let tableName = ''
    let selectedProperty = ''
    let lookupName = ''
    if (tablePropertyArray.length === 2) {
      tableName = tablePropertyArray[0];
      selectedProperty = tablePropertyArray[1];
      setCurrentlySelectedGroupByLabel(selectedProperty)
    }
    if (tablePropertyArray.length === 3) {
      tableName = tablePropertyArray[0];
      lookupName = tablePropertyArray[1]
      selectedProperty = tablePropertyArray[2];
      const label = lookupName + '.' + selectedProperty
      setCurrentlySelectedGroupByLabel(label)
    }
    setCurrentlySelectedGroupBy(data)
  }

  const selectGroupBy = () => {
    console.log('group by to add:')
    console.log(currentlySelectedGroupBy)
    if (currentlySelectedGroupBy && currentlySelectedGroupBy !== '') {
      const selectedGroupByData = [...selectedGroupBy]
      const tablePropertyArray = currentlySelectedGroupBy.split('.');
      let tableName = ''
      let selectedProperty = ''
      let lookupName = ''
      if (tablePropertyArray.length === 2) {
        tableName = tablePropertyArray[0];
        selectedProperty = tablePropertyArray[1];
      }
      if (tablePropertyArray.length === 3) {
        tableName = tablePropertyArray[0];
        lookupName = tablePropertyArray[1]
        selectedProperty = tablePropertyArray[2];
      }
      const selectedTable = selectedTables[0]
      let newElement = ''
      if (selectedTable && selectedTable.value && selectedTable.value === tableName) {
        newElement = selectedProperty
      } else newElement = lookupName + '.' + selectedProperty
      console.log('setting: ', selectedGroupByData)
      selectedGroupByData.push(newElement)
      setSelectedGroupBy([...selectedGroupByData])
      setCurrentlySelectedGroupBy('')
      setShowAddGroupBy(false)

      const newDropdownElements = [];
      for (const element of selectedTableProperties) {
          const dropdownProperties = [];
          if (element.label === tableName) {
              for (const property of element.options) {
                  if (property.label !== selectedProperty) dropdownProperties.push({
                      label: property.label,
                      value: property.value
                  });
              }
          } else {
              for (const property of element.options) {
                  dropdownProperties.push({
                      label: property.label,
                      value: property.value
                  });
              }
          }
          if (dropdownProperties.length > 0) {
              newDropdownElements.push({
                  label: element.label,
                  options: dropdownProperties
              });
          }
      }
      setGroupByDropdownItems(newDropdownElements);


      const oldQuery = query;
      const newQuery: any = {};
      if (oldQuery && oldQuery !== null && oldQuery['entitySlug']) {
          newQuery['entitySlug'] = oldQuery['entitySlug'];
      } else {
          newQuery['entitySlug'] = '';
      }

      if (oldQuery && oldQuery !== null && oldQuery['GroupBy']) {
        newQuery['GroupBy'] = oldQuery['GroupBy'];
      } else {
          newQuery['GroupBy'] = [];
      }
      newQuery['GroupBy'].push({
        FieldName: newElement
      })

      if (oldQuery && oldQuery !== null && oldQuery['Aggregations']) {
          newQuery['Aggregations'] = oldQuery['Aggregations'];
      } else {
          newQuery['Aggregations'] = [];
      }
      if (oldQuery && oldQuery !== null && oldQuery['Where']) {
          newQuery['Where'] = oldQuery['Where'];
      } else {
          newQuery['Where'] = [];
      }
      setQuery(newQuery);
      setCurrentlySelectedGroupByLabel(null)
    }
  };
  
  const selectAggregationField = (data: any) => {
    console.log('selected agg:')
    console.log(data)
    if (data) {
      const array = data.split('.')
      let tableName = ''
      let field = ''
      let aggregation = ''
      let lookupName = ''
      if (array.length === 3) {
        tableName = array[0]
        field = array[1]
        aggregation = array[2]
        setCurrentlySelectedAggregationFieldLabel(field + ' - ' + aggregation)
      }
      if (array.length === 4) {
        tableName = array[0]
        lookupName = array[1]
        field = array[2]
        aggregation = array[3]
        setCurrentlySelectedAggregationFieldLabel(lookupName + '.' + field + ' - ' + aggregation)
      }
      setCurrentlySelectedAggregationField(data)
    }
  }

  const SelectAggregation = () => {
    const selectedAggregation = currentlySelectedAggregationField
    if (selectedAggregation && selectedAggregation !== '') {
      const selectedAggregationsArray = [...selectedAggregations]
      const array = selectedAggregation.split('.')
      let tableName = ''
      let field = ''
      let aggregation = ''
      let lookupName = ''
      if (array.length === 3) {
        tableName = array[0]
        field = array[1]
        aggregation = array[2]
        selectedAggregationsArray.push({
          table: tableName,
          field: field,
          method: aggregation
        })
      }
      if (array.length === 4) {
        tableName = array[0]
        lookupName = array[1]
        field = array[2]
        aggregation = array[3]
        selectedAggregationsArray.push({
          table: tableName,
          field: lookupName + '.' + field,
          method: aggregation
        })
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

      if (oldQuery && oldQuery !== null && oldQuery['Aggregations']) {
        newQuery['Aggregations'] = oldQuery['Aggregations']
        if (lookupName !== '') {
          newQuery['Aggregations'].push({
            FieldName: lookupName + '.' + field,
            AggregateFunction: aggregation
          })
        } else {
          newQuery['Aggregations'].push({
            FieldName: field,
            AggregateFunction: aggregation
          })
        }
      } else {
        newQuery['Aggregations'] = []
      }

      if (oldQuery && oldQuery !== null && oldQuery['Where']) {
        newQuery['Where'] = oldQuery['Where']
      } else {
        newQuery['Where'] = []
      }
      setQuery(newQuery)
      setSelectedAggregations([...selectedAggregationsArray])
      setCurrentlySelectedAggregationFieldLabel(null)
      setShowAddAggregation(false)
    }
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
        selectedTables.map((_table: any, index: number) => (
          <div key={index}>
            <Typography.Title level={5}>Tables</Typography.Title>
            <Space.Compact>
              <Select defaultValue={tablesDrodpdownDefaultValue} options={tableDropdownItems} onSelect={selectTable} />
            </Space.Compact>
          </div>
        ))
      }

      {
        showAfterTableSelected &&
        <div className="control-section">
          <QueryBuilderComponent width='100%' fieldMode={"DropdownTree"} fieldModel={queryBuilderElements} rule={queryBulderRule} ruleChange={onRuleChange}>
            <ColumnsDirective>
              {queryBuilderColumnsData.map((element, index) => (
                element.nodeChild.map((child: any, childIndex: any) => (
                    <ColumnDirective field={child.nodeId} label={child.componentText} type={child.type}/>
                ))
              ))}
            </ColumnsDirective>
          </QueryBuilderComponent>
        </div>
      }

      {
        showAfterTableSelected &&
        <div className="flex flex-wrap">
          <div className="w-full">
            <Typography.Title level={5}>Group By</Typography.Title>
          </div>
          {
            showAddGroupBy ? (
              <div>
                <Space.Compact>
                  <Select value={currentlySelectedGroupByLabel || "Select the property"} options={groupByDropdownItems} onSelect={(e: any) => saveCurrentlySelectedGroupBy(e)}/>
                </Space.Compact>
                <Button onClick={(e) => selectGroupBy()}>Submit</Button>
              </div>
            ) : (
              
              <Button icon={<PlusOutlined />} onClick={(e) => showAddGroupByContainer()}> Add Group By</Button>
            )
          }
        </div>
      }

      {
        showAfterTableSelected && 
        <div>
          {
            selectedGroupBy.length > 0 && (
              <div>
                {selectedGroupBy.map((value, index) => (
                  <div key={index}>{value}</div>
                ))}
              </div>
            )
          }
        </div>
      }

      {
        showAfterTableSelected &&
        <div className="flex flex-wrap">
          <div className="w-full">
            <Typography.Title level={5}>Aggregation</Typography.Title>
          </div>
          {
            showAddAggregation ? (
              <div>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  value={currentlySelectedAggreggationFieldLabel || "Select the property"}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  allowClear
                  treeDefaultExpandAll
                  onChange={selectAggregationField}
                  treeData={aggregationFieldDropdownItems}
                />
                <Button onClick={(e) => SelectAggregation()}>Submit</Button>
              </div>
            ) : (
              <Button icon={<PlusOutlined />} onClick={(e) => showAddAggregationContainer()}> Add Aggregation</Button>
            )
          }
        </div>
      }

      {
        showAfterTableSelected && 
        <div>
          {
            selectedAggregations.length > 0 && (
              <div>
                {selectedAggregations.map((value, index) => (
                  <div key={index}>
                    <div>
                      {value.field}
                    </div>
                    <div>
                      {value.method}
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      }

      <div className="flex w-full">
        <Tabview />
      </div>

      <PlaceholderTest />

    </>
  );
}
