import type { CompletedTerritories, TerritoryScores, Wolf, Treats } from "../types";

const STORAGE_KEY = "wolfGrammarQuest_v1";
const FILE_NAME = "wolf-grammar-quest-save.json";

export interface PersistedState {
  completedTerritories: CompletedTerritories;
  territoryScores: TerritoryScores;
  pack: Wolf[];
  treats: Treats;
  hasWon: boolean;
}

// File System Access API types
interface FilePickerOptions {
  suggestedName?: string;
  types?: Array<{
    description: string;
    accept: Record<string, string[]>;
  }>;
  multiple?: boolean;
}

interface FileSystemWritableFileStream {
  write(data: string): Promise<void>;
  close(): Promise<void>;
}

interface FileSystemFileHandle {
  createWritable(): Promise<FileSystemWritableFileStream>;
  getFile(): Promise<File>;
}

declare global {
  interface Window {
    showSaveFilePicker?: (options?: FilePickerOptions) => Promise<FileSystemFileHandle>;
    showOpenFilePicker?: (options?: FilePickerOptions) => Promise<FileSystemFileHandle[]>;
  }
}

/**
 * Check if File System Access API is available
 * Note: Even if supported, it requires user gesture to work
 */
export function isFileSystemAccessSupported(): boolean {
  return "showSaveFilePicker" in window && "showOpenFilePicker" in window;
}

/**
 * Load persisted state from localStorage (primary) or return null
 * Note: File System Access API requires user gesture, so we use localStorage
 * as the primary persistence mechanism for auto-save/load
 */
export async function loadPersistedState(): Promise<PersistedState | null> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }
    const parsed = JSON.parse(stored);
    return parsed as PersistedState;
  } catch (error) {
    console.error("Failed to load persisted state:", error);
    return null;
  }
}

/**
 * Save state to localStorage for automatic persistence
 */
export async function savePersistedState(state: PersistedState): Promise<void> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save persisted state:", error);
  }
}

/**
 * Export game save to a JSON file (user-initiated)
 * Uses File System Access API if available, otherwise downloads via blob
 */
export async function exportSaveFile(state: PersistedState): Promise<void> {
  const jsonString = JSON.stringify(state, null, 2);

  if (isFileSystemAccessSupported() && window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: FILE_NAME,
        types: [
          {
            description: "Wolf Grammar Quest Save",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(jsonString);
      await writable.close();
      return;
    } catch (error) {
      // User cancelled or error occurred, fall through to blob download
      if ((error as Error).name !== "AbortError") {
        console.error("File System Access API error:", error);
      }
    }
  }

  // Fallback: Download via blob URL
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = globalThis.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = FILE_NAME;
  a.click();
  globalThis.URL.revokeObjectURL(url);
}

/**
 * Import game save from a JSON file (user-initiated)
 * Uses File System Access API if available, otherwise uses file input
 */
export async function importSaveFile(): Promise<PersistedState | null> {
  if (isFileSystemAccessSupported() && window.showOpenFilePicker) {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Wolf Grammar Quest Save",
            accept: { "application/json": [".json"] },
          },
        ],
        multiple: false,
      });
      const file = await handle.getFile();
      const text = await file.text();
      const parsed = JSON.parse(text);
      return parsed as PersistedState;
    } catch (error) {
      // User cancelled or error occurred
      if ((error as Error).name !== "AbortError") {
        console.error("File System Access API error:", error);
      }
      return null;
    }
  }

  // Fallback: File input
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        resolve(parsed as PersistedState);
      } catch (error) {
        console.error("Failed to parse save file:", error);
        resolve(null);
      }
    };
    input.click();
  });
}
