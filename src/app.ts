import {CreditCardDirective} from "./directives/credit-card-directive";
import {PhoneNumbersDirective} from "./directives/phone-number-directive";
const directives = [CreditCardDirective,PhoneNumbersDirective];

directives.forEach(directive =>{
    const elements = document.querySelectorAll<HTMLElement>(directive.selector);

    elements.forEach(element =>{
        const directiveInstance = new directive(element);
        directiveInstance.init();

    })
})