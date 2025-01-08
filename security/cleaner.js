class Cleaner {
    static isClean(value) {
        return /[a-zA-Z1-9-\.]{4,}@[a-zA-Z1-9-\.]+\.[a-z]{2,4}/.test(value);
    }

    static clean(value) {
        return encodeURIComponent(value.trim());
    }

    static isInvalid(value) {
        return /.{4,}/i.test(value);
    }
}

module.exports = Cleaner;