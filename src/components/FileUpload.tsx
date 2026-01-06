/**
 * Client-side file upload stub for attaching project photos.
 */
"use client";

import { useRef } from "react";

interface FileUploadProps {
  maxFiles: number;
  onFilesChange?: (files: File[]) => void;
}

export function FileUpload({ maxFiles, onFilesChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []).slice(0, maxFiles);
    onFilesChange?.(files);
  };

  return (
    <div className="space-y-2 rounded-lg border border-dashed border-slate-300 p-4">
      <div className="text-sm font-semibold text-slate-900">Add project photos (optional)</div>
      <p className="text-sm text-slate-600">Upload up to {maxFiles} images to help us estimate accurately.</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFilesSelected}
        className="text-sm"
      />
      <p className="text-xs text-slate-500">Uploads are placeholder-only until storage is configured.</p>
    </div>
  );
}
