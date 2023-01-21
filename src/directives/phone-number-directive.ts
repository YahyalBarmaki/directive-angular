export class PhoneNumbersDirective{
    static selector ="[phone-number]";
    constructor(public element:HTMLElement) {
    }
    formatNumberElement(element:HTMLInputElement){
        const value = element.value.replace(/[^\d+]/g,'').substring(0,12);

        const groups: String [] = [];


        for (let i = 0; i < value.length; i+=2){
            groups.push(value.substring(i,i+2));
        }
        element.value = groups.join(' ');
    }
    init(){
        this.element.style.borderColor = "red";
        this.element.addEventListener('input',(event)=>{
            this.formatNumberElement(event.target as HTMLInputElement);
        })
    }
}