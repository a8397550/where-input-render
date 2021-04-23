import * as React from 'react';
import './index.css';
import Select from '@alifd/next/lib/select';
import Input from '@alifd/next/lib/input';
import Balloon from '@alifd/next/lib/balloon';
import '@alifd/next/lib/input/index.css';
import '@alifd/next/lib/select/index.css';
import '@alifd/next/lib/balloon/index.css';

// function Input({value}) {
//   return <div></div>;
// }

// function Balloon(props: any) {
//   return <div></div>;
// }

// function Select(props: any) {
//   return <div></div>;
// }

// Select.Option = function (props: any) {
//   return <div></div>;
// }

const { useState, useCallback } = React;
const { Option } = Select;

function Element({ element = { value: undefined }, filter = { comType: '' }, operators = [], onChange }) {
  switch (filter.comType) {
    case 'input':
      return <Input value={element.value} onChange={onChange} />;
    default:
      return <Input value={element.value} onChange={onChange} />;
  }
}

function Overlay({ AddRule = () => {}, AddRuleSon = () => {} }) {
  return (
    <ul>
      <li className="add">
        <a onClick={AddRule}>同层级规则</a>
      </li>
      <li className="add-son">
        <a onClick={AddRuleSon}>子级规则</a>
      </li>
    </ul>
  );
}

export default function WhereInputRender({ operators = {}, defaultValue = [], filters = [] }) {
  const [value, setValue] = useState(defaultValue || []);
  const renderElement = useCallback((props) => <Element {...props} />, []);

  let parent = false;
  function fn(arr, parentArr, siteIndex) {
    const coms = [];
    arr.forEach((item, index) => {
      if (item.rules) {
        parent = true;
        coms.push(
          <>
            <div className="coms-parent">
              <span className="coms-condition">
                <Select
                  popupClassName="coms-select-container"
                  value={item.condition}
                  onChange={(opValue) => {
                    item.condition = opValue;
                    setValue(Object.assign([], value));
                  }}
                >
                  <Option value="AND">且</Option>
                  <Option value="OR">或</Option>
                </Select>
              </span>
              <span className="coms-line">
                <span className="l"></span>
                <span className="top-o"></span>
                <span className="bottom-o"></span>
              </span>
              {fn(item.rules, arr, index)}
            </div>
          </>,
        );
      } else {
        let val;
        if (Array.isArray(item.values) && item.values.length > 1) {
          val = JSON.stringify(item.values);
        } else {
          val = item.value;
        }
        const q = item;

        // const find = (operators[q.type] || []).find((temp) => temp.value === item.op);
        // let oper = (find || {}).text;
        const filter = filters.find((item) => {
          return item.id === q.id;
        });

        coms.push(
          <div className="coms-item">
            <span className="coms-item-name">
              <Select
                popupClassName="coms-select-container"
                hasClear
                value={q.id}
                onChange={(opValue) => {
                  q.id = opValue;
                  setValue(Object.assign([], value));
                }}
              >
                {filters.map((item) => {
                  return <Option value={item.value}>{item.label}</Option>;
                })}
              </Select>
            </span>
            <span className="coms-item-operator">
              <Select
                popupClassName="coms-select-container"
                hasClear
                value={q.op}
                onChange={(opValue) => {
                  q.op = opValue;
                  setValue(Object.assign([], value));
                }}
              >
                {(operators[q.type] || []).map((item) => {
                  return <Option value={item.value}>{item.label}</Option>;
                })}
              </Select>
            </span>
            <span className="coms-item-values">
              {renderElement({
                element: item,
                filter,
                operators,
                onChange: (itemValue) => {
                  item.value = itemValue;

                  setValue(Object.assign([], value));
                },
              })}
            </span>
            <span className="coms-where-font coms-item-btn">
              {arr.length === 1 && arr === value ? null : (
                <span
                  className="iconshanchu"
                  onClick={() => {
                    arr.splice(index, 1);

                    if (arr.length === 1 && parentArr) {
                      parentArr[siteIndex] = {
                        ...arr[0],
                      };
                    }

                    setValue(Object.assign([], value));
                  }}
                ></span>
              )}
              <span className="icontanhao"></span>
              <Balloon
                popupClassName="coms-item-add"
                trigger={<span className="iconjia"></span>}
                closable={false}
                align="r"
                alignEdge
                triggerType="hover"
                // triggerType="click"
              >
                <Overlay
                  AddRule={() => {
                    if (arr === value) {
                      arr[index] = {
                        condition: 'AND',
                        rules: [item],
                      };
                      arr[index].rules.push({});
                    } else {
                      arr.push({});
                    }

                    setValue(Object.assign([], value));
                  }}
                  AddRuleSon={() => {
                    arr[index] = {
                      condition: 'AND',
                      rules: [item],
                    };
                    arr[index].rules.push({});
                    setValue(Object.assign([], value));
                  }}
                />
              </Balloon>
            </span>
          </div>,
        );
      }
    });

    return coms;
  }

  console.log(value);

  let div: any = fn(value, undefined, undefined);

  // if (!parent) {
  //   div = <div className="coms-parent">{div}</div>;
  // }

  return <div className="coms-container">{div}</div>;
}
