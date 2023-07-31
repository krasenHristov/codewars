"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToIp = exports.ipToNum = void 0;
function ipToNum(ip) {
    const numbers = ip.split(".");
    let binary = "";
    const binaryArray = [128, 64, 32, 16, 8, 4, 2, 1];
    for (let i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers[i]);
        for (let j = 0; j < binaryArray.length; j++) {
            if (num >= binaryArray[j]) {
                binary += "1";
                num -= binaryArray[j];
            }
            else {
                binary += "0";
            }
        }
    }
    return parseInt(binary, 2);
}
exports.ipToNum = ipToNum;
function numToIp(x) {
    let binary = x.toString(2);
    let binaryArray = [128, 64, 32, 16, 8, 4, 2, 1];
    let ip = "";
    for (let i = 0; i < binary.length; i += 8) {
        let num = 0;
        for (let j = 0; j < 8; j++) {
            if (binary[i + j] === "1") {
                num += binaryArray[j];
            }
        }
        ip += num.toString();
        if (i < binary.length - 8) {
            ip += ".";
        }
    }
    return ip;
}
exports.numToIp = numToIp;
console.log(ipToNum("192.168.1.1"));
console.log(numToIp(3232235777));
console.log(numToIp(167772160));
