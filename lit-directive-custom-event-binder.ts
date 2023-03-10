import { noChange } from 'lit';
import { Directive, directive, ElementPart } from "lit/directive.js";

type GenericEventListenerCallback = (evt?: Event) => void;

/**
 * For use with Lit web-components library.
 * This is a Lit Directive which will add an event listener to the element that it is used on.
 * Requires two arguments: an event name, and a properly bound event callback function.
 * This callback function should expect the usual Event argument, but can also ignore it.
 * (e.g. it can be defined to accept no arguments)
 * Example usage:
 *  (your imports, at the top of your script file) -->
 *      import { getCustomEventBinder } from "/path/to/file/ci-lit-directive-custom-event-binder.ts";
 *      import { MY_FUNKY_EVENT } from "/path/to/file/my-custom-events.ts";
 *  (in your class definition, or elsewhere) -->
 *      const myEventBinder = getCustomEventBinder();
 *  (in your render() method -- or some method that renders with Lit's html`` template-literal tag)
 *      return html`
 *           <div 
    *            class="someClass"
                 ${this.myEventBinder(MY_FUNKY_EVENT, this.handleFunkyEvent.bind(this))}
             >
 *           Some Text</div>
 *      `;
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
