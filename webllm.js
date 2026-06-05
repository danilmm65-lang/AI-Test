import * as webllmModule from "https://cdn.jsdelivr.net/npm/@webllm/browser-wgpu@0.2.4/lib/index.js";
window.webllm = webllmModule;
window.dispatchEvent(new Event("webllm-loaded"));
