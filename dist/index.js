"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKey = generateKey;
exports.encryptData = encryptData;
exports.decryptData = decryptData;
async function generateKey() {
    return crypto.subtle.generateKey({
        name: "AES-GCM",
        length: 256, // 256-bit key
    }, true, // Key is extractable (can be exported)
    ["encrypt", "decrypt"] // Usages for this key
    );
}
async function encryptData(data, key) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12 bytes IV for AES-GCM
    const encryptedBuffer = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: iv,
    }, key, encodedData);
    return {
        encryptedData: new Uint8Array(encryptedBuffer),
        iv,
    };
}
async function decryptData(encryptedData, key, iv) {
    const decryptedBuffer = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: iv,
    }, key, encryptedData);
    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
}
