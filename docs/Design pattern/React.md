# 构建你自己的React
> 本文翻译自 https://pomb.us/build-your-own-react/

接下来我们将一步步从零开始实现一个React，实现上将遵循React的真实架构，但是不会完全包含所有的优化，相应地也会去除一些没必要的特性。


### 步骤一：实现createElement方法

我们应该都知道jsx这种语法糖，都会被转换成标准的js，例如：
```js
// input
const element = (
  <div className="cls">
    <text>hello</text>
  </div>
)

// output
const element = React.createElement(
  'div',
  {
    className: 'cls'
  },
  React.createElement('text', null, 'hello')
)

```




### 步骤二：实现render方法


### 步骤三：Concurrent模式


### 步骤四：Fibers


### 步骤五：render和commit阶段


### 步骤六：Reconciliation


### 步骤七：Function Components实现


### 步骤八：Hooks实现
