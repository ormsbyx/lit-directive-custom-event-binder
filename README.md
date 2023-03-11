# lit-directive-custom-event-binder

For use with Lit web-components library, version 2 (+).

This is Directive for the [Lit web comoponent library](https://lit.dev/). It will bind an event listener to the element that it is used on. It takes two arguments: the event name, and a function.

I created this to be able to bind events with non-standard names. The `@event` binding that
you can use in Lit `render()` functions can not handle event-names with dashes or non alpha
characters. This solves that problem.

The callback function should expect the usual Event argument, but can also ignore it.
(e.g. it can be defined to accept no arguments)

Example usage:
(your imports, at the top of your script file):

```
import { getCustomEventBinder } from "/path/to/file/ci-lit-directive-custom-event-binder.ts";
import { MY_FUNKY_EVENT } from "/path/to/file/my-custom-events.ts";
```

(in your class definition, or elsewhere):

```
const myEventBinder = getCustomEventBinder();
```

(in your render() method -- or some method that renders with Lit's html`` template-literal tag)

```
return html`
      <div
        class="someClass"
        ${this.myEventBinder(MY_FUNKY_EVENT, this.handleFunkyEvent.bind(this))}
      >Some Text</div>
`;
```
