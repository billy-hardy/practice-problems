export function decode(intStringMessage) {
    const messages = [];
    if(intStringMessage.length === 0) {
        return [];
    }
    console.log("manual compute");
    const now = new Number(intStringMessage[0]);
    const nowChar = decodeValue(now);
    const rest = intStringMessage.slice(1);
    messages.push(...(decode(rest).map(v => nowChar + v)));

    if(intStringMessage.length === 1) {
        return [nowChar];
    }
    const twoNow = new Number(intStringMessage[0])*10 + new Number(intStringMessage[1]);
    console.log("manual compute");
    if(twoNow < 26) {
        const twoNowChar = decodeValue(twoNow);
        const restTwo = intStringMessage.slice(2);
        messages.push(...(decode(restTwo).map(v => twoNowChar + v)));
        if(intStringMessage.length === 2) {
            messages.push(twoNowChar);
        }
    }
    return messages;
}

function decodeValue(number) {
    return String.fromCharCode("a".charCodeAt(0)+new Number(number));
}

export function decodeMemoized(intStringMessage) {
    const substringMap = new Map();

    function decodeMemoizedInternal(intStringMessage) {
        const messages = [];
        if(intStringMessage.length === 0) {
            return [];
        }
        const now = new Number(intStringMessage[0]);
        const nowChar = decodeValue(now);
        const rest = intStringMessage.slice(1);
        const memoizedOne = substringMap.get(rest);
        if(memoizedOne) {
            return memoizedOne.map(v => nowChar + v);
        }
        console.log("manual compute");
        const result = decodeMemoizedInternal(rest).map(v => nowChar + v);
        if(intStringMessage.length === 1) {
            result.push(nowChar);
        }
        substringMap.set(intStringMessage, result);
        messages.push(...result);
        if(intStringMessage.length === 1) {
            return messages;
        }

        const twoNow = new Number(intStringMessage[0])*10 + new Number(intStringMessage[1]);
        if(twoNow < 26) {
            const twoNowChar = decodeValue(twoNow);
            const restTwo = intStringMessage.slice(2);
            const memoizedTwo = substringMap.get(restTwo);
            if(memoizedTwo) {
                messages.push(...memoizedTwo.map(v => twoNowChar+v));
                return messages;
            }
            console.log("manual compute");
            const resultTwo = decodeMemoizedInternal(restTwo).map(v => twoNowChar + v);
            if(intStringMessage.length == 2) {
                resultTwo.push(twoNowChar);
            }
            substringMap.set(intStringMessage, resultTwo);
            messages.push(...resultTwo);
        }
        return messages;
    }
    return decodeMemoizedInternal(intStringMessage);
}
