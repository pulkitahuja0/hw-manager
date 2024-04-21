import { writable } from "svelte/store";

const stored = JSON.parse(localStorage.getItem("hw"));

export const homework = writable(stored || []);

homework.subscribe((v) => localStorage.setItem("hw", JSON.stringify(v)));