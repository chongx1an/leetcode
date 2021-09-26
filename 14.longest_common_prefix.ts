function longestCommonPrefix(strs: string[]): string {

    strs = strs.sort((a, b) => a.length - b.length)

    let result: string = "";
    let shortestString: string = strs[0];

    for (let i = 0; i < shortestString.length; i++) {

        let isSame: boolean = true

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != shortestString[i]) {
                isSame = false
                break
            }
        }

        if (isSame) {
            result = `${result}${shortestString[i]}`
        } else {
            break
        }

    }

    return result;
};