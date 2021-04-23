```javascript
<WhereInputRender
  operators={{ // 操作符号
    string: [
      {
        label: "等于",
        value: "=="
      },
      {
        label: "不等于",
        value: "!="
      }
    ]
  }}
  filters={[ // 字段详情
    {
      value: "1",
      label: "A2",
      type: "string"
    },
    {
      value: "2",
      label: "B3",
      type: "integer"
    },
    {
      value: "3",
      label: "C1",
      type: "date"
    },
  ]}
  defaultValue={[ // 默认值
    {
      "condition": "AND",
      "rules": [
        {
          "condition": "AND", "rules": [
            { "op": "==", "name": "A2", "id": "1", "ruleId": "item-f77b2a31-638c-4928-9aca-bba67755a517", "type": "string", "value": "3", "parentId": "group-18b3983f-2f55-41f3-98b4-b61c458ebd0e" },
            { "op": "isNull", "name": "B3", "id": "2", "ruleId": "item-73dde2a2-a5e0-43c4-80ab-0c9e26aeb225", "type": "string", "required": true, "parentId": "group-18b3983f-2f55-41f3-98b4-b61c458ebd0e" }
          ], "ruleId": "group-18b3983f-2f55-41f3-98b4-b61c458ebd0e", "parentId": "group-21587f21-571b-44ad-ac4b-61a78a9eff5d"
        },
        { "op": "included", "name": "C1", "id": "3", "ruleId": "item-e1a1ff92-9fdc-4963-ac07-4c09485cab78", "type": "string", "value": "输入1", "required": true, "parentId": "group-21587f21-571b-44ad-ac4b-61a78a9eff5d" }
      ], "ruleId": "group-21587f21-571b-44ad-ac4b-61a78a9eff5d"
    }
  ]}
/>
```