export declare function generateKey(): Promise<CryptoKey>;
export declare function encryptData(data: string, key: CryptoKey): Promise<{
    encryptedData: Uint8Array;
    iv: Uint8Array;
}>;
export declare function decryptData(encryptedData: Uint8Array, key: CryptoKey, iv: Uint8Array): Promise<string>;
