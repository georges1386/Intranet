class Encode {
    static methods = [
        "utf8",
        "ascii",
        "hex",
        "base64"
    ];

    static encodeData(data) {
        let encoded = data;
        let methods = this.methods;
        for(let i = 0; i < methods.length - 1; i++) {
            encoded = Buffer.from(encoded, methods[i]).toString(methods[i + 1]);
            console.log(methods[i + 1]);
        }
        return encoded;
    }

    static decodeData(data) {
        let encoded = data;
        let methods = this.methods.reverse();
        for(let i = 0; i < methods.length - 1; i++) {
            encoded = Buffer.from(encoded, methods[i]).toString(methods[i + 1]);
            console.log(methods[i + 1]);
        }
        return encoded;
    }
}

module.exports = Encode;
