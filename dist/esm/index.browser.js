import * as bcu from 'bigint-crypto-utils';

/**
 * Returns the a Hello to the input string name
 *
 * @remarks An example function that runs different code in Node and Browser javascript
 *
 * @param name - The name to say hello to
 *
 * @returns A gratifying Hello to the input name
 */
function helloWorld(name) {
    const text = `Hello ${name}!`;
    {
        console.log(`Browser says "${text}"`);
    }
    return text;
}

class RsaPublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(m) {
        return bcu.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu.modPow(s, this.e, this.n);
    }
}
class RsaPrivateKey {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }
    decrypt(c) {
        return bcu.modPow(c, this.d, this.n);
    }
    sign(m) {
        return bcu.modPow(m, this.d, this.n);
    }
}
const generateKeys = async function (bitLength) {
    const e = 65537n;
    let p, q, n, phi;
    do {
        p = await bcu.prime(bitLength / 2 + 1);
        q = await bcu.prime(bitLength / 2);
        n = p * q;
        phi = (p - 1n) * (q - 1n);
    } while (bcu.bitLength(n) !== bitLength || (phi % e === 0n));
    const publicKey = new RsaPublicKey(e, n);
    const d = bcu.modInv(e, phi);
    const privKey = new RsaPrivateKey(d, n);
    return {
        publicKey,
        privateKey: privKey
    };
};

/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */
function sayHello() { console.log('hello'); }

export { RsaPrivateKey, RsaPublicKey, sayHello as default, generateKeys, helloWorld };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnJvd3Nlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2hlbGxvLXdvcmxkLnRzIiwiLi4vLi4vc3JjL3RzL3JzYS50cyIsIi4uLy4uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7O1NBU2dCLFVBQVUsQ0FBRSxJQUFZO0lBQ3RDLE1BQU0sSUFBSSxHQUFHLFNBQVMsSUFBSSxHQUFHLENBQUE7SUFDYjtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksR0FBRyxDQUFDLENBQUE7S0FHdEM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiOztNQ2pCYSxZQUFZO0lBSXZCLFlBQWEsQ0FBUyxFQUFFLENBQVM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNYO0lBRUQsT0FBTyxDQUFFLENBQVM7UUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztJQUVELE1BQU0sQ0FBRSxDQUFTO1FBQ2YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztDQUNGO01BRVksYUFBYTtJQUl4QixZQUFhLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWDtJQUVELE9BQU8sQ0FBRSxDQUFTO1FBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7SUFFRCxJQUFJLENBQUUsQ0FBUztRQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7Q0FDRjtNQU9ZLFlBQVksR0FBRyxnQkFBZ0IsU0FBaUI7SUFDM0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFBO0lBQ2hCLElBQUksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsR0FBVyxDQUFBO0lBQ2hELEdBQUc7UUFDRCxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVCxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtLQUMxQixRQUFRLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7SUFFNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRXhDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRTVCLE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV2QyxPQUFPO1FBQ0wsU0FBUztRQUNULFVBQVUsRUFBRSxPQUFPO0tBQ3BCLENBQUE7QUFDSDs7QUMvREE7Ozs7Ozs7O1NBVXdCLFFBQVEsS0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7OyJ9
