'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

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
        return bcu__namespace.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.e, this.n);
    }
}
class RsaPrivateKey {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }
    decrypt(c) {
        return bcu__namespace.modPow(c, this.d, this.n);
    }
    sign(m) {
        return bcu__namespace.modPow(m, this.d, this.n);
    }
}
const generateKeys = async function (bitLength) {
    const e = 65537n;
    let p, q, n, phi;
    do {
        p = await bcu__namespace.prime(bitLength / 2 + 1);
        q = await bcu__namespace.prime(bitLength / 2);
        n = p * q;
        phi = (p - 1n) * (q - 1n);
    } while (bcu__namespace.bitLength(n) !== bitLength || (phi % e === 0n));
    const publicKey = new RsaPublicKey(e, n);
    const d = bcu__namespace.modInv(e, phi);
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

exports.RsaPrivateKey = RsaPrivateKey;
exports.RsaPublicKey = RsaPublicKey;
exports["default"] = sayHello;
exports.generateKeys = generateKeys;
exports.helloWorld = helloWorld;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9oZWxsby13b3JsZC50cyIsIi4uLy4uL3NyYy90cy9yc2EudHMiLCIuLi8uLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbImJjdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O1NBU2dCLFVBQVUsQ0FBRSxJQUFZO0lBQ3RDLE1BQU0sSUFBSSxHQUFHLFNBQVMsSUFBSSxHQUFHLENBQUE7SUFHdEI7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQyxDQUFBO0tBQ3RDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYjs7TUNqQmEsWUFBWTtJQUl2QixZQUFhLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWDtJQUVELE9BQU8sQ0FBRSxDQUFTO1FBQ2hCLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsTUFBTSxDQUFFLENBQVM7UUFDZixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztDQUNGO01BRVksYUFBYTtJQUl4QixZQUFhLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWDtJQUVELE9BQU8sQ0FBRSxDQUFTO1FBQ2hCLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsSUFBSSxDQUFFLENBQVM7UUFDYixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztDQUNGO01BT1ksWUFBWSxHQUFHLGdCQUFnQixTQUFpQjtJQUMzRCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7SUFDaEIsSUFBSSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFXLENBQUE7SUFDaEQsR0FBRztRQUNELENBQUMsR0FBRyxNQUFNQSxjQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxHQUFHLE1BQU1BLGNBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7S0FDMUIsUUFBUUEsY0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztJQUU1RCxNQUFNLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFeEMsTUFBTSxDQUFDLEdBQUdBLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRTVCLE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV2QyxPQUFPO1FBQ0wsU0FBUztRQUNULFVBQVUsRUFBRSxPQUFPO0tBQ3BCLENBQUE7QUFDSDs7QUMvREE7Ozs7Ozs7O1NBVXdCLFFBQVEsS0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7Ozs7OzsifQ==
