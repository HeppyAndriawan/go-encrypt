// src/index.ts

export async function generateKey(): Promise<CryptoKey> {
    return crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256, // 256-bit key
      },
      true, // Key is extractable (can be exported)
      ["encrypt", "decrypt"] // Usages for this key
    );
  }
  
  export async function encryptData(
    data: string,
    key: CryptoKey
  ): Promise<{ encryptedData: Uint8Array; iv: Uint8Array }> {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
  
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12 bytes IV for AES-GCM
  
    const encryptedBuffer = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      encodedData
    );
  
    return {
      encryptedData: new Uint8Array(encryptedBuffer),
      iv,
    };
  }
  
  export async function decryptData(
    encryptedData: Uint8Array,
    key: CryptoKey,
    iv: Uint8Array
  ): Promise<string> {
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      encryptedData
    );
  
    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  }
  