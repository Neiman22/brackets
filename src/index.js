module.exports = function check(str, bracketsConfig) {
        let OPEN_BRACKETS = [];
        let BRACKETS_PAIR = {};
        for (let i = 0; i < bracketsConfig.length; i++) {
            let key = bracketsConfig[i][1];
            let value = bracketsConfig[i][0];
            OPEN_BRACKETS.push(value);
            BRACKETS_PAIR[key] = value;
        };
            let stack = [];
        
            for (let i = 0; i < str.length; i++) {
                let currentSymbol = str[i];
                        if (stack.length !== 0 && BRACKETS_PAIR[currentSymbol] === stack[stack.length - 1]) {
                            stack.pop();
                            console.log (stack);
                        } else {
                            stack.push(currentSymbol);
                            console.log (stack);
                        }
                
            }
            return stack.length === 0;
}
