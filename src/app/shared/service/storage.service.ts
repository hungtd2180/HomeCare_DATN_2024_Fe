import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: Storage
  constructor() {
    this.storage = window.sessionStorage;
  }
  set(key: string, value: string): void {
    this.storage[key] = value;
  }
  get(key: string): string{
    return this.storage[key] || false;
  }
  setObject(key: string, value:any):void {
    if (!value){
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }
  getObject(key: string): any {
    return JSON.parse(this.storage[key] || '{}');
  }
  getValue<T>(key: string): T | null {
    const object = JSON.parse(this.storage[key] || null);
    return <T>object || null;
  }
  remove(key: string): any {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
  get length(): number {
    return this.storage.length;
  }
  get isStorageEmpty(): boolean {
    return this.length === 0;
  }
}
