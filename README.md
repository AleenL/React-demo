### React 代办项目

#### Hello,World!

React是现在比较主流的前端框架，我们这次入门指南，旨在让大家了解和认识什么是React，我们的重点不是精通React，重点是“从0到1”这样一个过程。

React的设计思想十分独特，是革命性的创新，他的性能十分出众，代码逻辑十分简单和清晰，这使得越来越多的人加入React这个大框架中来。

这也是我们实际工作中需要做的－－给用户带来价值。

现在我们进行由阶段的练习，先从“Hello，World！”开始。

React 容易上手，并且需要的基本都是基础知识，这对前端初学者来说是十分亲切的，下面我们通过进行每一个Demo来逐步的揭开React的神秘面纱。

#### 安装和使用

React 的安装包，你可以快速的在其[官网](http://reactjs.cn/react/index.html)上下载到，不过在我的github上自带了React的源码，不用另外安装，只需要把这个库拷到你的硬盘上就行！
`https://github.com/AleenL/React.git`

做到了上面的步骤，我们就可以做我们的第一个例子了。

#### React 的 HTML 模版

使用React的网页源码，结构大致如下；

```
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
</head>
<body>
    <div id="index"></div>
    <script type="text/babel">
        /* There is your code*/
    </script>
</body>
</html>
```
上面的代码有两个地方需要注意，最后一个`script`标签里的`type`属性为`text/babel`这是React所特有的JSX语法，是和JavaScript 不兼容的，凡事使用 JSX 的地方， 都要加上 `type="text/babel"`。

代码分别有三个库， `React.js`、`react-dom.js`和`Browser.js`，他们必须首先加载，所以要放在`head`标签中，其中`react.js`是React的核心哭，`react-dom.js`是提供与DOM相关的功能，`browser.js`的作用是将JSX 语法庄转为 avaSctipr 语法，这一步十分浪费时间，所以上线的时候，应该将他放在服务器中完成。

#### 第一个Demo

ReactDOM.render 是 React 的基本方法，用于将模版转为 HTML 语言，并插入指定的 DOM 节点。


```
ReactDOM.render(
    <h1>Hello,world!</h1>,
    document.getElementById("index")
);

```

这段代码插入最后一个Script标签中，意思是将一个 `h1` 标题插入了 `index`节点中，运行结果如下。
#### 快速启动一个React页面!

macOS 或者 Linux 当中用[create-react-app](https://github.com/facebookincubator/create-react-app#quick-overview)可以快速启动一个React页面：

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
然后打开src/App.js编辑页面内容即可，页面服务在 [http://localhost:3000/](http://localhost:3000/)


### JSX

React支持的的JSX语法能够让HTML的语言直接卸载啊JavaScript语言之中，不需要加任何引号，它允许HTMl和JavaScript混写。


```
var speeds = [23,45,56];

    ReactDOM.render(
        <div>
            {
                speeds.map(function(speed){
                    return <div>This Car speed is {speed} km/h!</div>
                })
            }
        </div>,
         document.getElementById('index')
    )
```
上述的代码体现了JSX的基本规则，就是遇到HTML标签就用HTML的会泽解析；遇到JavaScript，就用JavaScript规则解析。

JSX允许直接在模版内插入JavaScript的变量，如果这个变量时一个数组就会遍历这个数组。

```
 var arr = [
    <li>this is one</li>,
    <li>this is two</li>,
    <li>this is three</li>,
    ];
    ReactDOM.render(
        <ul>{arr}</ul>,
        document.getElementById('index')
    );
```
#### 模块化

React 允许将代码封装成组件，然后像插入HTML的标签一样，在网页中插入这个组件。使用React.createrClass方法进行生成组件。
JSX中使用'{}'符号来定义变量。

我们可以使用ES6类来定义组件：
```
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>
  }
  ReactDOM.render(
        <HelloMessage name = "World" />,
        document.getElementById('index')
}
```

我们也可以正常的使用JSX进行定义组件，两个效果时相同的：
```
var HelloMessage = React.createClass({
        render :function(){
            return <h1>Hello {this.props.name}</h1>;
        }
    });

    ReactDOM.render(
        <HelloMessage name = "World" />,
        document.getElementById('index')
    )
```
上述代码中，`HelloMessage` 就是一个组件类。模版插入`<HelloMessage  />`时会自动生成一个HelloMessage的实例，所有的组件类都有自己的render用于输出组件。

在对组件进行命名的时候，首字母必须要大写，不然浏览器会报错，另外，组件类职能包含一个HTML的顶层标签，其他标签必须包裹在顶层标签内，不然浏览器也会报错。

组件的用法和HTML的标签完全一致，可以任意加入该组件的属性`<HelloMessage speed=32>`这个表示了该组件加入了一个 `speed` 值，他的值为32，组件的属性可以在组件类的`this.props`对象中获取，比如`speed`属性就可以通过`this.props.speed`读取。

当然，变量也可以表示用户定义的组件：
```
var HelloMessage = React.createClass({
        render :function(){
            return <h1>Hello {this.props.name}</h1>;
        }
    });
  const element = <HelloMessage name = "World" />;
    ReactDOM.render(
        element,
        document.getElementById('index')
    )
```
有些组件属性在命名上要注意，比如`class`,`for`属性需要写成`className`,`htmlFor`。因为这个事JavaScript的保留字。

#### PropTypes

组件的属性可以接受任何值，字符串，对象，函数等，又是我们想要验证组件的属性是否符合要求的时候，这个时候就要用到PropsType的属性。

组件类的`PropTypes`属性，是用来验证组件实例的属性是否符合要求：

```
var data ="123";
    var MyTitle = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired,
        },

        render: function() {
            return <h1>{this.props.title}</h1>
        }
    });
    ReactDOM.render(
        <MyTitle title={data} />,
        document.body
    );
```
MyTitle组件添加了title属性，PropTypes告诉React，这个title的属性的值必须为字符串，如果上述的`data`变量不是字符串的话，浏览器就会报错。

此外`getDefaultProps`方法可以用来设置组件属性的默认值：

```
var MyTitle = React.createClass({
        getDefaultProps : function(){
            return {
                title : 'this is title!!'
            };
        },

        render: function() {
            return <h1>{this.props.title}</h1>;
        }
    });

    ReactDOM.render(
        <MyTitle />,
        document.body
    );

```
#### 生命周期

人类的生命周期是：生 -> 老 -> 病 -> 死。

其实每个组件都有自己的“生命周期”，一个组件都经历了，运行和完成，那么React组件的生命周期是什么呢？

React 的生命周期包括三个阶段：mount（挂载）、update（更新）和 unmount（移除）


#### mount(挂载)

mount就是第一次让组件出现在页面周的过程。这个过程的关键就是render方法。React 会将 render 的返回值（一般是虚拟DOM，也可以事DOM或者null）插入到页面中。

这个期间，会有几个hook方便你往里面加代码：
1. constructor()
2.componentWillMount()
3.render()
4.componentDidMount()


#### update(更新)

mount 之后，如果数据有任何变动，就会来到update过程，这个过程会出现五个hook：

1.componentWillReceiveProps(nextProps) -读取props
2.shouldComponentUpdate(nextProps, nextState) -是否需要更新组件
3.render() -进行更新
4.componentDidUpdate() -更新完毕

#### unmount(卸载)

当一个组件将要从页面移除的时候，会进入unmount过程，这个过程就只有一个hook：
1.componentWillUnmount() -移除组件前你可以进行的活动