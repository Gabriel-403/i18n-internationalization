#### 开始之前
- 代码缩进，养成格式化的习惯，养成语句末尾打分号
- 变量命名，驼峰，必须要语义化，不知道怎么写就用翻译软件：`轮播图 -> carousel`
- 函数命名，驼峰，语义化命名
- 名字过长怎么办：eg. `跳转到轮播图下一图 -> jumpToNextCarouselImage -> goNext`，注意不要和其他方法或变量语义冲突
- 同含义变量名需要多个怎么办：eg. `prevCarouselIndex, currentCarouselIndex, nextCarouselIndex`
- 函数形参名字和函数内部名字冲突怎么办：内部使用时，可以在名字前面加 `_` 下划线，eg. `carouselIndex -> _carouselIndex`
- 尽量不要用 this 来挂载变量，用 react 的 state 来管理 （this.state、this.setState）
- 使用对象里面的内容时，解构出来使用：
    ```js
    this.state = { name: 'chaos', age: 19 };

    render() {
        const { name, age } = this.state;
    }
    ```
- 函数形参过多怎么办：用对象来传
    ```js
    fn({ a, b, c, d = 0 }) {
        // 这里形参直接解构出来了，函数内能直接用
        // 后面等号表示是附初始值，当 d undefined 的时候才会赋值
    }

    const option = {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
    };
    fn(option);
    ```

#### 目录结构
```
src
|
|- index.jsx   入口文件
|- components  公共组件
|- pages       页面文件
   |- HomePage  可以看到下面目录结构和 src 类似，区别就是作用域不同
      |- components 页面自身用的组件，具有不可复用性
      |- pages      子页面
      |- assets
      |- libs
      |- index.jsx
|- assets      静态资源文件
|- libs        公共js库
|- routers     路由
   |- index.js     路由入口，引入 user.js 作为子路由
   |- user.js      (假设) user 为前缀的子路由，里面包含 info 页、center 页、favorite 页等，以此类推
|- store       redux状态管理（你暂时先不用看，比较难）
 |- actionTypes.js  action 常亮存放位置
 |- actions.js      action 编写位置
 |- reducers.js     触发 action 的代码位置
```

#### 文件命名
name          |desc
--            |--
components    |大写驼峰命名，eg. `Carousel`
pages         |大写驼峰命名，和路由匹配，eg. `HomePage`
assets        |存放公共 css（reset.css、iconfont.css等）、font字体文件、img图片文件等
libs          |代码中用到的公共方法，驼峰命名，后缀为.js
routers       |路由相关的逻辑，子路由独立一个文件出来写

#### 第三方库的使用
找库时候注意找和框架匹配的库，最好是通过 `npm install` 安装
