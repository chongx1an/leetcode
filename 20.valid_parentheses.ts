function isValid(s: string): boolean {


    let x: number;

    do {

        x = s.length;

        ["()", "[]", "{}"].forEach(p => {
            s = s.replace(p, "")
        })

    } while (x !== s.length)


    return s ? false : true
};
