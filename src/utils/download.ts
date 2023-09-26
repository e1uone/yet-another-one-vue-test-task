export function downloadFileFromString(fileName: string, content: string): void {
  const element = document.createElement("a");

  const file = new Blob([content], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = fileName;

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  URL.revokeObjectURL(element.href);
}
