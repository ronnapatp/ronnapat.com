import { writable } from 'svelte/store'
import { browser } from '$app/env'

const storage = browser ? window.localStorage : ({} as Record<string, unknown>)

export const showCookies = writable<boolean>(storage.showCookies !== 'false')

showCookies.subscribe((value) => (storage.showCookies = String(value)))