type Runtime = {
  getURL: (path: string) => string;
};

let runtime: Runtime;
let storage: Storage;

const dict = new Map<string, string>();

if (process.env.NODE_ENV === "production") {
  const browser = require("webextension-polyfill");
  runtime = browser.runtime;
  storage = browser.storage;
} else {
  runtime = {
    getURL: (path: string) => {
      return path;
    },
  };
  storage = {
    length: dict.size,
    clear: () => {
      dict.clear();
    },
    getItem: (key) => dict.get(key) ?? null,
    key: (index) => null,
    removeItem: (key) => {
      dict.delete(key);
    },
    setItem: (key, value) => {
      dict.set(key, value);
    },
  };
}

export { runtime, storage };
