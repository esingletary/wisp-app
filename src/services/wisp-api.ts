import { v4 as uuidv4 } from 'uuid';
import { Wisp } from '../models/wisp';

export class WispApi {
  async encryptText(password: string, contents: string): Promise<string> {
    const id = uuidv4();
    await fetch('http://localhost:4567/create', {
      method: 'POST',
      body: JSON.stringify({ id, contents, password } as Wisp)
    });
    return id;
  }

  async decryptText(id: string, password: string) {
    const result = await fetch('http://localhost:4567/retrieve', {
      method: 'POST',
      body: JSON.stringify({ id, password } as Wisp)
    });
    return await result.text();
  }
}