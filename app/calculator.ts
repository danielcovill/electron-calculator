class Calculator {
    currentValue: number;
    currentOperator: Operator;

    constructor() {
      this.currentValue = 0;  
    }

    operate(value: number, op: Operator) : number {
        switch (this.currentOperator) {
            case Operator.Add:
                this.currentOperator = op;
                this.currentValue += value;
                break;
            case Operator.Subtract:
                this.currentValue -= value;
                this.currentOperator = op;
                break;
            case Operator.Multiply:
                this.currentValue *= value;
                this.currentOperator = op;
                break;
            case Operator.Divide:
                this.currentValue /= value;
                this.currentOperator = op;
                break;
            case Operator.Negative:
                this.currentValue *= -1;
                break;
            case Operator.Clear:
                this.currentValue = 0;
                break;
            case Operator.Equals:
                break;
            default:
                throw "Unexpected operator.";
        }
        return this.currentValue;
    }
}