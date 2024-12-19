Go Encrypt (go-encrypt)

A lightweight and secure encryption library built with TypeScript, designed to simplify manual data encryption and decryption using the AES-GCM algorithm and the Web Crypto API. This package is ideal for developers looking for a reliable and modern solution to handle sensitive data securely in their JavaScript or TypeScript projects.

Features
🔒 Strong Encryption: Uses the AES-GCM algorithm, which is highly secure and widely adopted.
⚡ Lightweight: Minimal dependencies, leveraging the Web Crypto API.
🛠️ TypeScript Support: Fully typed for better developer experience and code safety.
🌍 Cross-Platform: Works seamlessly in modern browsers and Node.js environments.
📦 Ready to Use: Easily integrates with your JavaScript or TypeScript projects.

Installation

Install the package via npm:

```
npm install go-encrypt

```

Usage
Here’s how you can use this package to encrypt and decrypt data securely:

Generate an AES Key

```
import { generateKey } from "go-encrypt";

const key = await generateKey();
```

Encrypt Data

```
import { encrypt } from "go-encrypt";

const key = await generateKey();
const message = "Secret message";

const { encryptedData, iv } = await encryptData(message, key);
console.log('Encrypted Data:', encryptedData);
console.log('Initialization Vector (IV):', iv);
```

Decrypt Data

```
import { decryptData } from 'my-encryption-package';

const key = await generateKey();
const message = "Secret message";

const { encryptedData, iv } = await encryptData(message, key);
const decryptedMessage = await decryptData(encryptedData, key, iv);

console.log('Decrypted Message:', decryptedMessage); // Output: "Secret message"
```

Full Examples
Encrypt and Decrypt a Message

```
import { generateKey, encryptData, decryptData } from 'my-encryption-package';

const message = () => {
  const key = await generateKey();
  const message = "Hello, secure world!";

  // Encrypt the message
  const { encryptedData, iv } = await encryptData(message, key);
  console.log('Encrypted Data:', encryptedData);

  // Decrypt the message
  const decryptedMessage = await decryptData(encryptedData, key, iv);
  console.log('Decrypted Message:', decryptedMessage); // Output: "Hello, secure world!"
}
```


Requirements
Node.js: v18 or higher (for Web Crypto API support in Node.js).
Browser: Modern browsers with Web Crypto API support.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Built with ❤️ and powered by the Web Crypto API.