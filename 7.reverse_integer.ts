function reverse(x: number): number {

    const is_negative: boolean = x < 0;
    var result: number = 0;

    result = parseInt(x.toString().split("").reverse().join(""))

    result = is_negative ? -result : result

    if (-Math.pow(2, 31) > result || result > Math.pow(2, 31) - 1)
        return 0
    else
        return result

};


function reverse2(x: number): number {

    const is_negative: boolean = x < 0;
    var result: number = 0;

    x = Math.abs(x)

    do {

        result *= 10
        result += x % 10

        x = Math.trunc(x / 10)

    } while (x > 0)

    result = is_negative ? -result : result

    if (-Math.pow(2, 31) > result || result > Math.pow(2, 31) - 1)
        return 0
    else
        return result

};
