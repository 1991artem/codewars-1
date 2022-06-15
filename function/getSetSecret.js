
function createSecretHolder(secret) {
    let obj = {
    secr: secret,
    getSecret () {
        return this.secr;
    },
    setSecret (secret) {
        this.secr = secret;
    }
    }
return obj;
}

let obj = createSecretHolder(5);

console.log (obj.getSecret());
console.log (obj.setSecret(2));
console.log (obj.getSecret());