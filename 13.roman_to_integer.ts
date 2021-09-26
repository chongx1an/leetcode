interface IHash {
    [key: string]: number;
}

let hash: IHash = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function romanToInt(s: string): number {

    let n: number = 0;

    let chars: string[] = s.split("");

    for (let i = 0; i < chars.length; i++) {

        const a: number = hash[chars[i]] || 0
        const b: number = hash[chars[i + 1]] || 0

        if (a >= b) {
            n += a
        } else {
            n += b - a
            i++
        }
    }

    return n;
};