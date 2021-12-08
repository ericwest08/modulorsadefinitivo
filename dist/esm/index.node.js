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
        console.log(`Node.js says "${text}"`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2hlbGxvLXdvcmxkLnRzIiwiLi4vLi4vc3JjL3RzL3JzYS50cyIsIi4uLy4uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7O1NBU2dCLFVBQVUsQ0FBRSxJQUFZO0lBQ3RDLE1BQU0sSUFBSSxHQUFHLFNBQVMsSUFBSSxHQUFHLENBQUE7SUFHdEI7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQyxDQUFBO0tBQ3RDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYjs7TUNqQmEsWUFBWTtJQUl2QixZQUFhLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWDtJQUVELE9BQU8sQ0FBRSxDQUFTO1FBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7SUFFRCxNQUFNLENBQUUsQ0FBUztRQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDckM7Q0FDRjtNQUVZLGFBQWE7SUFJeEIsWUFBYSxDQUFTLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ1g7SUFFRCxPQUFPLENBQUUsQ0FBUztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsSUFBSSxDQUFFLENBQVM7UUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0NBQ0Y7TUFPWSxZQUFZLEdBQUcsZ0JBQWdCLFNBQWlCO0lBQzNELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtJQUNoQixJQUFJLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEdBQVcsQ0FBQTtJQUNoRCxHQUFHO1FBQ0QsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7S0FDMUIsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO0lBRTVELE1BQU0sU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV4QyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUU1QixNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFdkMsT0FBTztRQUNMLFNBQVM7UUFDVCxVQUFVLEVBQUUsT0FBTztLQUNwQixDQUFBO0FBQ0g7O0FDL0RBOzs7Ozs7OztTQVV3QixRQUFRLEtBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTs7OzsifQ==
