import { noChange } from 'lit';
import { Directive, directive, ElementPart } from "lit/directive.js";

type GenericEventListenerCallback = (evt?: Event) => void;

/**
 * For use with the Lit web components library, version 2(+).
 *
 * This is a directive for the Lit web comoponent library. It will bind an event listener
 * to the element that it is used on. It takes two arguments: the event name, and a function.
 *
 * This allows one to bind events with non-standard names to elements in a LitElement.
 * The @eventname binding that you can use in Lit render() functions can not handle
 * event-names with dashes or non alpha characters. This directive solves that problem.
 *
 * The callback function will receive the standard event argument that any callback bound
 * with addEventListener() would get.
 *
 * Example usage:
 * Import getCustomEventBinder.
 *
 * import { getCustomEventBinder } from "/path/to/file/ci-lit-directive-custom-event-binder.ts";
 * import { MY_FUNKY_EVENT } from "/path/to/file/my-custom-events.ts"; // value is my-funky-event
 *
 * Instantiate the directive at the top of your file (outside your class definition). Of course
 * ou could make it a class property too.
 *
 * const myEventBinder = getCustomEventBinder();
 *
 * Then, in some method that renders with an html`` template-literal tag, you use it the way
 * you would use other Lit directives (like ref(), for example):
 *

 *   render() {
 *     return html`
 *       <div
 *         class="someClass"
 *         ${myEventBinder(MY_FUNKY_EVENT, this.handleFunkyEvent.bind(this))}
 *       >Some Text</div>
 *       `;
 *     }
 *
 * @param {string} eventName - The name of any valid html event or any custom defined event
 * @param {string} callback - An event callback (function). can be defined with 0 or 1 argument.
 */
export class CustomEventFunctionBinder extends Directive {
    update(part: ElementPart, parameters: any[]) {
      const eventName = parameters && Array.isArray(parameters) && parameters[0];
      const callback = parameters && Array.isArray(parameters) && parameters[1];
      part.element.addEventListener(eventName, callback);
        return noChange;
    }
    // NOTE: the arguments you pass to the directive are those definied in the render method below:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(eventName: string, callback: GenericEventListenerCallback) {
      return;
    }
  }

  /**
    * This returns a Lit Directive which will add an event listener to the element
    * that it is used on. See class definition for usage example.
   * @returns function
   */
  export const getCustomEventBinder = function () {
    return directive(CustomEventFunctionBinder);
  }

  export default getCustomEventBinder;
