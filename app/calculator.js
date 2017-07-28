"use strict";
class Calculator {
    constructor() {
        this.currentValue = 0;
    }
    operate(value, op) {
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
//# sourceMappingURL=calculator.js.map