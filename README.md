# lit-directive-custom-event-binder

For use with the Lit web components library, version 2(+).

This is a directive for the [Lit web comoponent library](https://lit.dev/). It will bind an event listener to the element that it is used on. It takes two arguments: the event name, and a function.

This allows one to bind events with non-standard names to elements in a LitElement. The `@eventname` binding that you can use in Lit `render()` functions can not handle event-names with dashes or non alpha characters. This directive solves that problem.

The callback function will receive the standard event argument that any callback bound with `addEventListener()` would get.

### Example usage:
Import `getCustomEventBinder`.

```
import { getCustomEventBinder } from "/path/to/file/ci-lit-directive-custom-event-binder.ts";
import { MY_FUNKY_EVENT } from "/path/to/file/my-custom-events.ts"; // value is my-funky-event
```

Instantiate the directive near the top of your file (outside your class definition), or you could make it a class property.

```
const myEventBinder = getCustomEventBinder();
```

Then, in some method that renders with an ` html`` ` template-literal tag, you use it the way you would use other Lit directives (like `ref()`, for example):

```
render() {
  return html`
    <div
      class="someClass"
      ${myEventBinder(MY_FUNKY_EVENT, this.handleFunkyEvent.bind(this))}
    >Some Text</div>
  `;
}
```
