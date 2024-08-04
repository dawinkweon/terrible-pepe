import { runtime as webExtRuntime } from "webextension-polyfill";

const runtime = {
    getURL: (path: string) => webExtRuntime.getURL(path)
}

export default runtime;