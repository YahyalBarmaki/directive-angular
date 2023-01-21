export class CreditCardDirective{
    static selector ="[credit-card]";
    constructor(public element:HTMLElement) {
    }
    formatCreditCard(element:HTMLInputElement){
        const value = element.value.replace(/[^\d+]/g,'').substring(0,16);

        const groups: String [] = [];


        for (let i = 0; i < value.length; i+=4){
            groups.push(value.substring(i,i+4));
        }
        element.value = groups.join(' ');
    }
    init(){
        this.element.style.borderColor = "blue";
        this.element.addEventListener('input',(event)=>{
            this.formatCreditCard(event.target as HTMLInputElement);
        })
    }
}