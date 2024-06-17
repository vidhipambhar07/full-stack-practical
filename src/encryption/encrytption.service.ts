import { Injectable } from '@nestjs/common';
// import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {
  /* NOTE: do not modify secrect key to encrypt/decrypt password */
  private secretKey = process.env.ENCRYPTION_SECRET;

  /**
   * The function encrypts a given text using AES-256-CBC encryption with a randomly generated
   * initialization vector (IV) and a secret key.
   * @param {string} text - The `text` parameter is the string that you want to encrypt.
   * @returns the encrypted text.
   */
  // encrypt(text: string) {
  //   const iv = randomBytes(8).toString('hex');
  //   const cipher = createCipheriv('aes-256-cbc', this.secretKey, iv);
  //   let encrypted = cipher.update(text);
  //   encrypted = Buffer.concat([encrypted, cipher.final()]);
  //   const final = `${iv}.${encrypted.toString('hex')}`;
  //   return final;
  // }
  encrypt(text: string) {
    const key = CryptoJS.enc.Utf8.parse(this.secretKey); // Convert key into WordArray (using Utf8)
    const iv = CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]); // Use zero vector as IV
    const encrypted = CryptoJS.AES.encrypt(text, key, { iv }); // Encrypt using AES with CBC, PKCS7
    return encrypted.toString(); // Convert ciphertext to string
  }

  /**
   * The function decrypts a given text using AES-256-CBC encryption with a secret key.
   * @param {string} text - The `text` parameter is a string that represents the encrypted text that
   * needs to be decrypted. It is expected to be in the format of "iv.encrypted", where "iv" is the
   * initialization vector used for encryption and "encrypted" is the actual encrypted data.
   * @returns The decrypted text is being returned.
   */
  // decrypt(text: string) {
  //   const [iv, encrypted] = text.split('.');
  //   const decipher = createDecipheriv('aes-256-cbc', this.secretKey, iv);
  //   let decrypted = decipher.update(Buffer.from(encrypted, 'hex'));
  //   decrypted = Buffer.concat([decrypted, decipher.final()]);
  //   const final = decrypted.toString();
  //   return final;
  // }
  decrypt(text: string) {
    const key = CryptoJS.enc.Utf8.parse(this.secretKey); // Convert into WordArray (using Utf8)
    const iv = CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]); // Use zero vector as IV
    const decrypted = CryptoJS.AES.decrypt(text, key, { iv }); // By default: CBC, PKCS7
    return decrypted.toString(CryptoJS.enc.Utf8); // Convert into string (using Utf8)
  }
}
