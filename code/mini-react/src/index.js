const { merge } = require("./utils");

// Component
class Component {
  constructor(props) {
    this.props = props;
    this.state = null;
  }

  render() {
    throw '你需要自己实现render方法'
  }
}

// createElement
function h(type, props, ...args) {
  const rest = [];
  let children = [];
  let len = (args || []).length;

  while (len--) {
    rest.push(args[len])
  }

  while (rest.length) {
    let vnode = rest.pop();
    // vnode是array
    if (vnode && vnode.pop) {
      len = vnode.length;
      while (len--) {
        rest.push(vnode[len])
      }
    } else if (vnode === null || vnode === true || vnode === false) {
      vnode = {
        type: () => {}
      }
    } else if (typeof vnode === 'function') {
      children = vnode;
    } else {
      children.push(
        typeof vnode === 'object'
          ? vnode
          : { type: 'text', props: { nodeValue: vnode } }
      )
    }
  }

  return {
    type,
    props: merge(props, { children }),
    key: props && props.key,
  }
}


export {
  Component,
  createElement as h,
}
