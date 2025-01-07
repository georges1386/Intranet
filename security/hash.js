const { createHash } = require("node:crypto");


class Hash {
    static hashAlgorithms = [
        "md5",
        "sha1",
        "sha224",
        "sha256",
        "sha3-224",
        "sha3-256",
        "sha512",
        "shake256"
    ];

    static hashPassword(passwd) {
        let hash = passwd;
        this.hashAlgorithms.forEach(
            (algorithm) => {
                hash = createHash(algorithm).update(hash).digest("base64");
            }
        );
        return hash;
    }
}
